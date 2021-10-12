import { Button } from "react-bootstrap";
import classes from "./Search.module.css";
import { useState } from "react";
import SearchList from "../components/layout/Searches/SearchList";

function Search() {
  const [loadedSearch, setLoadedSearch] = useState();
  const [userInput, setUserInput] = useState("");

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  function searchClickHandler() {
    fetch(`https://restcountries.com/v2/name/${userInput}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          alert("No Results Found...");
        }
        console.log(data);
        setLoadedSearch(data);
      });
  }

  return (
    <div className={classes.heading}>
      <div className={classes.search}>
        <input
          type="text"
          placeholder="Enter a country here..."
          required
          className={classes.input}
          onChange={inputChangeHandler}
          value={userInput}
        />
        <Button
          variant="light"
          className={classes.searchBtn}
          onClick={searchClickHandler}
        >
          Search
        </Button>
      </div>
      <div>
        <SearchList items={loadedSearch} />
      </div>
    </div>
  );
}

export default Search;
