import React, { Component } from "react";

 
class AssignApplication extends Component {
  render() {
    return (
        <div>
        <div className="psaCA">
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Application Name</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td> <input type="checkbox"/> </td>
                            <td><label >Eligibility & Benefits</label></td>
                         </tr>
                         <tr>
                            <td> <input type="checkbox"/> </td>
                            <td><label >Eligibility Maintenance</label></td>
                         </tr>
                         <tr>
                            <td> <input type="checkbox"/> </td>
                            <td><label >Online Billing</label></td>
                         </tr>
                         <tr>
                            <td> <input type="checkbox"/> </td>
                            <td><label >Standard Reports</label></td>
                         </tr>
                         <tr>
                            <td> <input type="checkbox"/> </td>
                            <td><label >PDF Reports</label></td>
                         </tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
        <div className="row">
        <button className="caBtn">Previous Saved Groups</button>
        <button className="caBtn">Continue & Finish</button>
        <button className="caBtn">Add More Groups</button>
        </div>
        
        </div>
        
      
    );
  }
}
 
export default AssignApplication;
