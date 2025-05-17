//weather info er moto location info er api jonno ou ekta file banai. etar main kaj lat, long theke location deya ba location theke lat, long deya. ekhon eta nijer server er api e use korte pari ba bigdatacloud.

//bigdatacloud use kore lat, long dile se location diye dibe. this the only api used from bigdatacloud.
export const getLocationData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
        );
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e.message);
    }
};

//internal api to get the list of all available location in our server.
export const getLocationLatLongList = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/location`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e.message);
    }
};

//get the lat, long of a location saved in our server.
export const getLocationLatLong = async (locationName) => {
    try {
        const response = await fetch(
            `http://localhost:3000/api/location/${locationName}`
        );
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e.message);
    }
};

//resolve lat, long issue. if lat, long not provided, check if the let, lang is provided in out server, if provided retieve the lat, long. and return them.
export const getResolvedLatLong = async (location, lat, lon) => {
    // console.log(location, lat, lon);
    if (lat && lon) {
        return { lat, lon };
    }

    const locationLatlong = await getLocationLatLong(location);
    // console.log(locationLatlong);

    if (locationLatlong.latitude && locationLatlong.longitude) {
        const lat = locationLatlong.latitude;
        const lon = locationLatlong.longitude;

        return { lat, lon };
    }
};
