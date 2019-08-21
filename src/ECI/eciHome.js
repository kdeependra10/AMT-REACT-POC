import React, { Component } from "react";
import Search from "../component/search";
import EciNav from './eciNav';

class eciHome extends Component {
  render() {
    return (
      <div className="card">
         <EciNav/>
         <Search/>
       </div>
    );
  }
}
 
export default eciHome;