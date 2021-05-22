import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteSearch) => {},
  removeFavorite: (searchId) => {},
  itemIsFavorite: (searchId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteSearch) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteSearch);
    });
  }

  function removeFavoriteHandler(searchId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((search) => search.id !== searchId);
    });
  }

  function itemIsFavoriteHandler(searchId) {
    return userFavorites.some((search) => search.id === searchId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
