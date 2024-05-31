import { createContext } from "react";
import { useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

const FavouriteContextProvider = ({ children }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  const addFavourite = (id) => {
    setFavouriteMealIds((prev) => [...prev, id]);
  };

  const removeFavourite = (id) => {
    setFavouriteMealIds((prev) => prev.filter((item) => item !== id));
  };

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
