import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../pages/Contact";
import NoMatch from "../pages/NoMatch";
import Nav from "./Nav";
import Home from "../pages/Home";
import NailMenu from "./NailMenu";

const App = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/menu" component={NailMenu} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    );
};

export default App;