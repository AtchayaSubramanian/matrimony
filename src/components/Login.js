import { Link } from "react-router-dom";
// import axios from "axios";
import React, { Component } from "react";
import "../css/login.css";

class Register extends Component {

  render(){
    return(
      <div className="logLogin" >
    <div className="reg">    
        <form id="regform" name="suForm" >    
          
          <label className="name" id="name" ><b>Email ID:</b>
          </label>
          <input type="email" id="uname" placeholder="Email Id"  /> 
           
          <br /><br /> <br /><br /> 
          <label className="name" id="name1" ><b>Password:</b>
          </label>
          <input type="password" id="uname" placeholder="Password"  /> 
      
         
          <Link to="/NavigationBar"><button className="button1" type="submit">Login</button></Link>
          <br/>
          <Link to="/Reg"><p className="register-link1" id='reg-link'>Create an Account </p></Link>
        {/* <p className="register-link2"><Link to="/Regester">Forget Password?</Link> </p> */}
        </form>
      </div></div>
);
          }
        }
export default Register;