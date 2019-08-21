import React, { Component } from "react";
import Search from "../component/search";
import PsaNav from './psaNav';
 
class psaHome extends Component {
  render() {
    return (
      <div className="card">
         <PsaNav/>
         <Search/>
       </div>
    );
  }
}
 

export default psaHome;