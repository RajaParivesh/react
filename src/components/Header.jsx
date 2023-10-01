import React from "react";
import Navbar from "./Navbar";

class Header extends React.Component{
    render(){
        return (
            <React.Fragment>
                <h1>Header</h1>
                <Navbar/>
            </React.Fragment>
        )
    }
}

export default Header;