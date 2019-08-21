import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Home extends Component {
    render() {
      return (
          <div className="contentHome">
            <NavLink to="/PSA">PSA</NavLink>
            <NavLink to="/ESA">ESA</NavLink>
            <NavLink to="/ECI">ECI</NavLink>
        </div>

    );
  }
}

 
export default Home;
