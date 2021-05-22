import { useContext } from "react";
import classes from "./Favorites.module.css";
import FavoritesContext from "../store/favorites-context";
import SearchList from "../components/layout/Searches/SearchList";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <h4 className={classes.h4}>
        You have no favorites yet. Start adding some!
      </h4>
    );
  } else {
    content = <SearchList items={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1 className={classes.heading}>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
