import { getLocations } from "./location-util";

// here are the apis used in the PromiseRejectionEvent. the localhost:3000/api/location gives the info of the location names stored in the project. then, localhost:3000/api/location/dhaka gives the latitude, longitude of dhaka.
export async function GET() {
    const locationData = getLocations();

    return Response.json(locationData);
}
