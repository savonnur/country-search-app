import { useContext } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import classes from "./SearchItem.module.css";
import FavoritesContext from "../../../store/favorites-context";

function SearchItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        flag: props.flag,
        name: props.name,
        capital: props.capital,
        population: props.population,
      });
    }
  }

  return (
    <Card style={{ width: "18rem" }} className={classes.card}>
      <Card.Img variant="top" src={props.flag} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Capital: {props.capital}</Card.Text>
        <Card.Text>Population: {props.population}</Card.Text>
        <Button onClick={toggleFavoriteStatusHandler}>
          {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SearchItem;
