import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './Pages/home'
import Search from './Pages/searchRepos'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/search-repos" component={Search}/>
            </Switch>
        </Router>
    )
}

export default Routes
