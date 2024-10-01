
'use client'
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

//jehetu amra native js er geolocation api use korchi, seta to browser er api. plus react er hooks o use korchi. sejonno etake client component hote hobe. ei project matro 2ta client component. ekta ei j browser e giye user er location detect kore r hook use kore. 2nd ta holo LocationSwitcher j amader save kora location er list dekhaiye tar modde theke j kono option pick koreoi location er route e niye jai. sekhane react hook useState r useEffect use kora hoyeche. r react er hook jehetu use hoyeche, tahole e take clinet component hote hobe. cause for now upto react18, only client side rendering is allowed. So, ekanto j minimal portion k client e render kora lagbe sudhu setuk kei client component banabo.
const LocationDetector = () => {
    const [loading, setLoading] = useState(false);

    //getting values from the hooks.
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        //useSearchParams is react hook. sekhan theke pawa data diye native js diye new URLSearchParams baniye nilam.
        const params = new URLSearchParams(searchParams);

        //jodi navigator.geolocation e apnar location dhorte pai tahole tar current position er latitude, longitude set kore dao params e r locationName detect na kore locationName = current dhore niye route er last e sob params k add kore j url hoi sekhane pathiye dao. porcessing hoye gele, next route e redirect korar age loading k false kore dao. 
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                params.set('latitude', position.coords.latitude);
                params.set('longitude', position.coords.longitude);
                setLoading(false);
                router.push(`/current?${params.toString()}`);
            })
        }

    }, [pathName, router, searchParams]);

    //ei page sudhu loading chole kale (jeta prothom theke e cholbe useEffect run korar sathe sathe e) image r loading text ta dekhabe. loading shes hle e next route e niye jabe. ekhane ui etuk e.
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
        {
            loading && (
                <>
                    <Image
                        src="/network.gif"
                        alt="Loading..."
                        height={500}
                        width={500}
                        className="border rounded-md my-4" />
                    <p className="text-4xl text-center">Detecting Location...</p>
                </>
            )
        }
    </div>
  )
}

export default LocationDetector