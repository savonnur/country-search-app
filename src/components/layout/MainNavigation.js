import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className={classes.brandName}>
          <Link to="/" className={classes.brandLink}>
            Countries Search
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className={classes.listItem1}>
              Search
            </Link>
            <Link to="/favorites" className={classes.listItem2}>
              Favorites
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavigation;
