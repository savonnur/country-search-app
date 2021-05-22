import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import SearchPage from "./pages/Search";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <SearchPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
