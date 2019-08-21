import React from "react";
import { NavLink } from "react-router-dom";

const alignHome ={
  'float':'right',
  'margin-right':'10px',
};

const Header = () => {
  
    return (
      <div className="header">
         <NavLink to="/">Access Management Tool</NavLink>
         <NavLink to="/" style={alignHome}>Home</NavLink>
      </div>
    );
  };

 
export default Header;
