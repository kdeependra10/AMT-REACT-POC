import React, { Component } from "react";
import GroupDetails from "./groupDetails";
import {FormBuilder, FieldGroup, FieldControl, Validators} from "react-reactive-form";

class CA extends Component {
    searchForm = FormBuilder.group({});
    handleReset=() => {
        this.searchForm.reset();
    }
    handleSubmit=(e) => {
        e.preventDefault();
        console.log("Form values", this.searchForm.value);
    }
  render() {
    return (
        <div>
            <div className="psaCA">
            <FieldGroup
                control={this.searchForm}
                render={({ get, invalid, reset, value }) => (
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <label className="form-lblCA">Account Number </label>
                        <label className="form-lblCA"> : 1000699655  <i class="far fa-copy"/></label>
                    </div>
                    <div className="row">
                        <label className="form-lblCA">Account Name <span>*</span> </label>
                        <FieldControl name="AccountName" 
                             options={{validators:[Validators.pattern('[a-zA-Z0-9]*'),Validators.required]}} 
                             render={({ handler, touched, hasError, meta }) => (
                              <div>
                                <input {...handler()} />
                                <span>
                                    {touched && hasError('pattern') && hasError('required') && `No special characters(e.g. ! @ # $ %)`}
                                </span>
                              </div>  
                            ) }
                            />
                    </div>
                    <button className="caBtn" disabled={invalid}>Group Information</button>
                   
            </form>
                )}
            />
            </div>
            
            <GroupDetails/>
        </div>
        
      
    );
  }
}
 
export default CA;
