import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from "../App";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery"
import Topics from "./Topics"

class Navbar extends Component{
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to="/about">About </Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/gallery"> Gallery</Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact Us </Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to="/topics"> Topics </Link>*/}
                    {/*</li>*/}

                </ul>

                <Switch>
                    <Route path="/app">
                        <App/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/gallery">
                        <Gallery/>
                    </Route>
                    <Router path="/about">
                        <About/>
                    </Router>
                    {/*<Router path="/topics">*/}
                    {/*    <Topics/>*/}
                    {/*</Router>*/}
                </Switch>
            </Router>
        )
    }

}
export default Navbar;