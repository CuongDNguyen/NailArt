import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import Nav from "./Nav"

const App = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/test"/>
                <Route component={NoMatch} />
            </Switch>
        </Router>
    );
};

export default App;