import SearchItem from "./SearchItem";
import classes from "./SearchList.module.css";

function SearchList(props) {
  return (
    <ul>
      <li className={classes.li}>
        {props.items &&
          !!props.items.length &&
          props.items.map((item, index) => (
            <SearchItem
              key={index}
              id={item.name}
              flag={item.flag}
              name={item.name}
              capital={item.capital}
              population={item.population}
            />
          ))}
      </li>
    </ul>
  );
}

export default SearchList;
