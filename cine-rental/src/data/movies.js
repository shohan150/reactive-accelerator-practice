const movieData = [
  {
    id: crypto.randomUUID(),
    cover: "once-in-ho.jpg",
    title: "Once Upon a Time... in Hollywood",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    cover: "marriage-strory.jpg",
    title: "Marriage Story",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Comedy/Drama",
    rating: 3,
    price: 90,
  },
  {
    id: crypto.randomUUID(),
    cover: "pain-and-gain.jpg",
    title: "Pain & Gain",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action/Comedy/Crime/Drama",
    rating: 4,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "parasite.jpg",
    title: "Parasite",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Comedy, Drama, Thriller",
    rating: 4,
    price: 250,
  },
  {
    id: crypto.randomUUID(),
    cover: "iron-man.png",
    title: "Iron Man",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 100,
  },
];

// export function getAllMovies() {
//   return movieData;
// }
//or
function getAllMovies() {
  return movieData;
}
export { getAllMovies };
//named export er khetre aladavabe export korte 2nd bracket er vitor rekhe object hisebe export korte hobe. R import korar somoy o object-destructing er maddhome import korte hobe.

//ekhon qiestion holo json na niye js kno nilam?

// first object ta online js object to json coverter e diye emon pai,
// {
//    "id": "15620330-3110-4b2f-8bad-4288c439072a",
//    "cover": "once-in-ho.jpg",
//    "title": "Once Upon a Time... in Hollywood",
//    "description": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
//    "genre": "Comedy/Drama",
//    "rating": 5,
//    "price": 140
//  }

//  Tarmane file ta .js na kore .json korle evabe likhte hoto ei r ki. To js format e likhar subidha ki? subidha holo, ei website e all movies charao, favourite, coming soon, new etc. pages ache. To, ekahen getAllMovies function diye sob movie k dekhano hooche. kintu favouriteba trending dekhate proti object e aro 2 ta key add korte hobe. tokhon jeta korte hobe, r notun function likhte hobe getFavMovies, getTrendingMovies nam e jekhane for loop chaliye, sudhu j movie gulo fav o trending tader return korbe. Last e ei notun 2 ta function keo export kore dite hobe. Tahole js format use korate amra ekhan theke e data filter kore website e pathabo. eta json file hle amra ekhane data chara kono function e likhte partam na. Emonki const moiveData ei kotha tai to thakto na. directly array shuru first object thakto, tarpor second evabe cholto. Plus crypto.randomUUID() use korte partam na. Id manually bosate hoto.
