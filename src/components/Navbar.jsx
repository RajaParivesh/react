import React, {Component} from "react";

import { NavLink , Outlet} from "react-router-dom";

class Navbar extends Component{
    render() {
        return (
            <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
        
           )
    }
}


export default Navbar;