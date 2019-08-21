import React, { Component } from "react";
import PsaNav from '../psaNav';
import CA from './ca';
 
class CreateAccount extends Component {
  render() {
    return (
      <div className="card">
         <PsaNav/>
         <CA/>

        </div>
    );
  }
}
 
export default CreateAccount;
