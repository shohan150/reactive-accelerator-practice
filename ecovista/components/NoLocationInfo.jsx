/* eslint-disable react/no-unescaped-entities */
import Card from "./Card";

const NoLocationInfo = () => {
    return (
        <Card>
            <div className="text-center">
                <h3 className="text-2xl mb-4">This Location is not found.</h3>
                <p className="text-blue-200">The latitude, longitude of the location you are looking for is not stored in the server. As we can not get the lat, long we can not show you the weather info. If you can provide the lat, long manually on the url, we will try to retrieve the data. <br></br> Why don't you try,"http://localhost:3000/dummy?latitude=1.5555&longitude=105.5555"</p>
            </div>
        </Card>
    );
};

export default NoLocationInfo;
