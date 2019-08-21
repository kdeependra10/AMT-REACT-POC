import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class PsaNav extends Component {
    render() {
      return (
          <div className="psaNav">
            <Link to="/PSA">Search   <i className="fas fa-search"/></Link>
            <Link to="/PSA/ca">Create Account  <i className="fa fa-align-justify" aria-hidden="true"/></Link>
            <div className="logInfo">
                Welcome Deependra Kumar(dos60518)
                Logged in as <b>PSA</b>
            </div>
        </div>

    );
  }
}

 
export default PsaNav;
