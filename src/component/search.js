import React, { Component } from "react";
import {FormBuilder, FieldGroup, FieldControl, Validators} from "react-reactive-form";

const stm = {
    'margin':'0 17px',
    padding:'4px 0px 0px 30px',
};

class Search extends Component {
  searchForm = FormBuilder.group({});
  handleReset=() => {
      this.searchForm.reset();
  }
  handleSubmit=(e) => {
      e.preventDefault();
      console.log("Form values", this.searchForm.value);
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "groupOpt"
    };
  }
  handleSearchOption = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };
  render() {
    return (
      <div className="search">
          <div className="switch">
            <button>Web Profile</button>
            <button>Account List</button>
          </div>
         <div className="searchCriteria">
            
            <hr />
            <FieldGroup
                control={this.searchForm}
                render={({ get, invalid, reset, value }) => (
                <form onSubmit={this.handleSubmit}>

            <div className="row" id="searchEmailDiv">
               <input type="radio" className="form-radio" name="searchRadio" value='emailOpt' 
                 checked={this.state.selectedOption === "emailOpt"}
                 onChange={this.handleSearchOption}
               />
               <label className="form-lbl">Email</label>
               <FieldControl name="Email" 
                             options={{validators:Validators.email}} 
                             render={({ handler, touched, hasError, meta }) => (
                              <div>
                                <input {...handler()} />
                                <span>
                                    {touched && hasError('email') && `Please enter valid Email Address`}
                                </span>
                              </div>  
                            ) }
                            />
              
            </div>
            <hr/>
            <div className="row" id="searchGroupDiv" >
                <input type="radio" className="form-radio"  name="searchRadio" value="groupOpt" 
                checked={this.state.selectedOption === "groupOpt"}
                onChange={this.handleSearchOption}
                />
                <label className="form-lbl">Group Number</label>
                <FieldControl name="Group Number" 
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
                    
                <label className="form-lbl">(&)     State</label>
                <select  className="form-control">
                    <option value="California">California</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                </select>
            </div>
            <hr/>
            <div id="searchAccountDiv" >
                <div className="row">
                    <input type="radio" className="form-radio" name="searchRadio" value="accountOpt" 
                    checked={this.state.selectedOption === "accountOpt"}
                    onChange={this.handleSearchOption}
                    />
                    <label className="form-lbl" >Account Number</label>
                    <FieldControl name="Account Number" 
                             options={{validators:Validators.pattern('[0-9]*')}} 
                             render={({ handler, touched, hasError, meta }) => (
                              <div>
                                <input {...handler()} />
                                <span>
                                    {touched && hasError('pattern') && `No Numeric or special characters(e.g. ! @ # $ %)`}
                                </span>
                              </div>  
                            ) }
                            />
                    <label className="form-lbl">Account Name</label>
                    <FieldControl name="Account Name" 
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
               </div>
               <div className="row">
                    
                    <label className="form-lbl" style={stm}>First Name</label>
                    <FieldControl name="First Name" 
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
                    <label className="form-lbl">Last Name</label>
                    <FieldControl name="Last Name" 
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
                </div>
            </div>
            <hr />
            <div className="searchBtn">
               <button type="submit" disabled={invalid}> Submit </button>
               <button  type="button"onClick={this.handleReset}> Cancel</button>
            </div>
          </form>
            )}

/>
         </div> 
    </div>
    );
  }
}
 
export default Search;
