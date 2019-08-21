import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class EsaNav extends Component {
    render() {
      return (
          <div className="psaNav">
            <Link to="/ESA">Search  <i class="fas fa-search"/></Link>
            <Link to="">Synch OBR  <i class="fas fa-sync-alt"/></Link>
            <div className="logInfo">
                Welcome Deependra Kumar(dos60518)
                Logged in as <b>ESA</b>
            </div>
        </div>

    );
  }
}

 
export default EsaNav;
