import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from "next/server";

let defaultLocale = 'en'
let locales = ['bn', 'en']

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  //retrieves the 'accept-language' header from the incoming request. The 'accept-language' header is a list of preferred languages set at the user's browser (serialized by user preference at the browser); ['en-US', 'en-UK', 'bn-BD', 'bn']. If the header is not present, means users browser has no supported language defined on it, it defaults to undefined. 
  const acceptedLanguage = request.headers.get('accept-language') ?? undefined; 
  // console.log(acceptedLanguage);
  
  //A headers object is created with the 'accept-language' value. This object will be used to initialize a Negotiator instance. Negotiator reads the 'accept-language' header and determines the best language to use.
  let headers = { 'accept-language': acceptedLanguage };


  //A Negotiator instance is created using the headers object. The Negotiator is a library that helps in content negotiation, determines the best language to use based on the 'accept-language' header.The languages() method returns an array of languages sorted by preference.
  // language er short form bivinno vabe deya jai, jemon en-US, en-UK, bn-BD, bn-IN etc. Ekhon amra to sudhu 'bn' r 'en' niyechi. kintu browser er sathe matching korar somoy whole context e matching korar jonno "Negotiator" package ta use korchi. jemon tumi support korcho 'en' kintu browser e ache en-US. ei type er situation e 2 ta k match kora lagbe ebong browser er 'en-US' k apllication e supported 'en' e convert kora lagbe. sejonno Negotiator request er headers e languages operation er maddhome browser e supported language gulor list/array ber kore anbe. Tarpor ei conversion ta complete kore ki locale use korbo seta return kora hobe. 
  let languages = new Negotiator({ headers }).languages();

  console.log(languages);

  //The match function is called with three arguments: the array of preferred languages (languages), a list of available locales (locales), and a default locale (defaultLocale).The match function determines the best matching locale from the available locales based on the user's language preferences. If no match is found, it defaults to defaultLocale.
  //finally, match function diye check korchi browser e supported sob languages er modde amar supported languages (locales) ache kina. jodi false hoi tahole by default 3rd parameter e deya defaultLocale k use korbe.   
  return match(languages, locales, defaultLocale) // -> 'en'
}

//this is the actual middleware. uporer ta normal function.
export function middleware(request) {
  // Check if there is any supported locale in the pathname. as our application gives url like, 'local/en/' or 'local/bn/'. mane j language use korchi home url er por shei language er shortform tarpor pathname. ekhon protita request e middleware check korbe jei url e jete chacche sekhane already ei locale mention kora ache kina. jodi mention kora na thake tahole pathname e locale add kore dite hobe.
  const pathname = request.nextUrl.pathname;

  //pathaname e check koro j tar shuru tei amader deya locale array er kono ekta value ache kina. returns false if no match found.
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    //get which locale to use using the getLocale function.
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api). karon egulo sob server ei to thakbe. ekhn application nije e ba onno keu directly jokhon api diye esb folder access korte chabe tokhon middleware diye redirect korar kono mane to hoi na. sejonno esb address e hit korle middleware active hobe na. sudhu root url active thakbe bolte app folder e middleware kaj korbe. Next.js e app folder e root karon sekhan theke e routing shuru.
    '/((?!api|assets|.*\\..*|_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}

// Ekhon kotha holo sudhu root folder mane app folder e middleware active ache. tarpor sob url k amra localhost/locale/ emon url e pathacchi. tar vitor puro application er onnano page thakbe. tahole directly localhost e amra kokhnoo e kichu dekhacchi na. sob somoy localhost/locale emon link e dekhbo. sejonno app folder ei layout.js thaklo karon seta static. kintu content er jonno page.js k niye jete hobe [lang] er vitor. karon asole shei route/folder structure/url ei content thakbe. erpor shei folder er vitor key value pair hisebe all supported language er jonno kon word er value ki hobe (key-value pair hisebe) seta bole deya hoyeche. amra key ta sob jaigai use korbo. kon lang seta detect kore deictionary.js er maddhome required dictionary k load kore, shei er corresponding value dekhabe website e. 

//api gulo for internal use and external access is out of this lang routing. They can be accessed directly. the base api url is stored in .env file. then you just have to mention the pathname to receive information.