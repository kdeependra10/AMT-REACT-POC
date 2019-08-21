import React, { Component } from "react";
import Search from "../component/search";
import EsaNav from './esaNav';
 
class esaHome extends Component {
  render() {
    return (
      <div className="card">
         <EsaNav/>
         <Search/>
       </div>
    );
  }
}
 
export default esaHome;