import AQIComponent from "@/components/AQIComponent";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

// gives the air quality index. retrive the location from param according to the dynamic [location]. then get the params passed with the url. 
const AQIPage = async ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    //check if let, lang is provided. if not provided find out the lat, long. then, if lat, long is received show the AQIComponent else show NoLocationInfo component. 
    const resolved = await getResolvedLatLong(location, latitude, longitude);

    if (resolved?.lat && resolved?.lon) {
        return <AQIComponent lat={resolved.lat} lon={resolved.lon} />;
    } else {
        return <NoLocationInfo />;
    }
};

export default AQIPage;
