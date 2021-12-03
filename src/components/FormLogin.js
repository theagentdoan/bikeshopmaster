import React from 'react';
import UseFormLogin from './UseFormLogin';
import validate from "./ValidateInfo";
import {Link} from "react-router-dom";

function FormLogin(submitForm) {
    const {handleSubmit, handleChange, values, errors} = UseFormLogin(validate, submitForm);
    return (
        <div>
  <div className="container-login">
    <form onSubmit={handleSubmit} >
      <div className="row">
        <h2 style={{textAlign: 'center'}}>Welcome to Bike Shop! Please login.</h2>
        <div className="vl">
          <span className="vl-innertext">or</span>
        </div>
        <div className="col">
          <a href="javascript: void()" className="fb btn">
            <i className="fa fa-facebook fa-fw" /> Login with Facebook
          </a>
          {/* <a href="#" className="twitter btn">
            <i className="fa fa-twitter fa-fw" /> Login with Twitter
          </a> */}
          <a href="javascript: void()" className="google btn">
            <i className="fa fa-google fa-fw" /> Login with Google+
          </a>
        </div>
        <div className="col">
          
          <input type="text" id="email" name="usernameLogin" placeholder="Username" value={values.username} onChange={handleChange} />
          {errors.username && <p className="validation-notice">{errors.username}</p> }
          <input type="password" id="pass" name="passwordLogin" placeholder="Password"  value={values.password} onChange={handleChange}/>
          {errors.password && <p className="validation-notice">{errors.password}</p> }
          <div className="checkbox">
            <div className=""><label><input className="remember" type="checkbox" name="remember" id="rememberCheck"/> Remember me</label></div>
          
            <span><button type="submit" className="login">Login</button></span>
        </div>
        </div>
      </div>
    </form>
    <div className="form-login-register">New member? Register <Link to="/form">here</Link> </div>
  </div>
  
  
</div>
    )
}

export default FormLogin;
