import React, { Component } from "react";
import AssignApplication from "./assignApp";
import {FormBuilder, FieldGroup, FieldControl, Validators} from "react-reactive-form";

class GroupDetails extends Component {
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
                    <label className="form-lblGD">Group Number </label>
                    <FieldControl name="GroupNumber" 
                             options={{validators:Validators.pattern('[a-zA-Z0-9]*')}} 
                             render={({ handler, touched, hasError, meta }) => (
                              <div>
                                <input {...handler()} />
                                <span>
                                    {touched && hasError('pattern') && `No special characters(e.g. ! @ # $ %)`}
                                </span>
                              </div>  
                            ) }
                            />
                    <label className="form-lblGD">Contract </label>
                    <FieldControl name="Contract" 
                             options={{validators:Validators.pattern('[a-zA-Z]*')}} 
                             render={({ handler, touched, hasError, meta }) => (
                              <div>
                                <input {...handler()} />
                                <span>
                                    {touched && hasError('pattern') && `No special characters(e.g. ! @ # $ %)`}
                                </span>
                              </div>  
                            ) }
                            />
                </div>
                <div className="row">
                    <label className="form-lblGD">Group Name <span>*</span> </label>
                    <FieldControl name="GroupName" 
                             options={{validators:Validators.pattern('[a-zA-Z]*')}} 
                             render={({ handler, touched, hasError, meta }) => (
                              <div>
                                <input {...handler()} />
                                <span>
                                    {touched && hasError('pattern') && `No special characters(e.g. ! @ # $ %)`}
                                </span>
                              </div>  
                            ) }
                            />
                    <label className="form-lblGD">Plan <span>*</span></label>
                    <FieldControl name="Plan" 
                             options={{validators:Validators.pattern('[A-Z]*')}} 
                             render={({ handler, touched, hasError, meta }) => (
                              <div>
                                <input {...handler()} />
                                <span>
                                    {touched && hasError('pattern') && `No special characters(e.g. ! @ # $ %)`}
                                </span>
                              </div>  
                            ) }
                            />
                </div>
                <button className="caBtn" disabled={invalid}>Application & Privilege Assignment</button>
        </form>
        )}
    />
    </div>
        
         <AssignApplication/>
        </div>
        
      
    );
  }
}
 
export default GroupDetails;
