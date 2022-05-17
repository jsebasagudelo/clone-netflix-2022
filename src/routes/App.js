import React, { Suspense, lazy }  from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

const Profile = lazy(() => import("../pages/Profile"));
const Genero = lazy(() => import("../pages/Genero"));
const NotFound = lazy(() => import("../components/NotFound"));
const Search = lazy(() => import("../pages/Search"));
const Mylist = lazy(() => import("../components/Mylist"));
const Home = lazy(() => import("../pages/Home"));
import useStylesApp from "../styles/components/StylesApp";
import "../components/styles/App.css";
function App() {
  const classes = useStylesApp();



  return (
    <div className={classes.root}>
      <BrowserRouter  history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/genero" exact>
            <Genero />
          </Route>
          <Route path="/mylist" exact>
            <Mylist />
          </Route>

          <Route path="/search" exact>
            <Search/>
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
