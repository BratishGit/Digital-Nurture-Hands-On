import React, { Component } from "react";
import Guest from "./Guest";
import User from "./User";
import "./App.css";
class App extends Component{
  constructor(){
    super();
    this.state={
      isLoggedIn: false
    };
  }
  login =()=>{
    this.setState({
        isLoggedIn:true
    });
  };
  logout =()=>{
    this.setState({
      isLoggedIn:false
    })
  };
  render(){
    let page;
    if(this.setState.isLoggedIn){
      page =<User />;
    }
    else{
      page =<Guest />;
    }
    return(
      <div className="App">
        <h1>Ticket Booking Application</h1>
        {
          this.state.isLoggedIn ?
          <button onClick={this.logout}>
            LogOut
          </button>
          :
          <button onClick={this.login}>
            LogIn
          </button>

      
        }
        <hr />
        {page}
      </div>
    );
  }
}
export default App;