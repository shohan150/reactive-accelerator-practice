import { useContext, useEffect, useState } from "react";
import redHeartIcon from "../../assets/heart-red.svg";
import heartIcon from "../../assets/heart.svg";
import { favouriteContext, weatherContext } from "../../context";

export default function AddToFavourite() {
  const { favourites, toggleFavourites, removeFromFavourites } =
    useContext(favouriteContext);

  const { weatherData } = useContext(weatherContext);
  const { latitude, longitude, location } = weatherData;

  //setFav and ToggleFav are same. I am destrucing an array here. And the second element rreturns an array. Now, I can give any name to those two values. Normally, setState is used, but that is not a must.
  const [isFavourite, toggleIsFavourite] = useState(false);

  function handleFavourites() {
    toggleIsFavourite(!isFavourite);
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      toggleFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
  }

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleIsFavourite(found);
  }, [favourites, location, toggleFavourites]);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourites}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? redHeartIcon : heartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
