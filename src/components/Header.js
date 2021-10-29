import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  
    return (
      <div className="banner-bg banner-bg1">	
  <div className="container">
    <div className="header">
      <div className="logo">
        <NavLink to="/"><img src="images/logo.png" alt="" /></NavLink>
      </div>							 
      <div className="top-nav">		

        <label className="mobile_menu" htmlFor="mobile_menu">
          <span>Menu</span>
        </label>
        <input id="mobile_menu" type="checkbox" />
        <ul className="nav">
          <li className="dropdown1"><NavLink exact activeClassName="active" to="/">HOME</NavLink>
            
          </li>
          <li className="dropdown1"><Link to="/shop">SHOP</Link>
            
          </li>      
            
          <li className="dropdown1"><NavLink to="/signin">LOG IN</NavLink>
           
          </li>             
          
          <NavLink className="shop" to="/cart"><img src="images/cart.png" alt=""/><span id="cart-count" className="badge badge-light">0 </span></NavLink>
          <br></br>
          <li ><label >
            <form >
            <input className="search-bar" type="search" placeholder="Search"></input>
            </form>
            </label></li>
        </ul>
      </div>
      <div className="clearfix" />
    </div>
  </div>	 
  <div className="caption">
    <div className="slider">
      <div className="callbacks_container">
        <ul className="rslides" id="slider">
          <li><h1>ELECTRONICS</h1></li>
          <li><h1>JEWELRY</h1></li>	
          <li><h1>MEN'S CLOTHING</h1></li>	
          <li><h1>WOMEN'S CLOTHING</h1></li>
        </ul>
        <p>You <span>create</span> the <span>experience,</span> we <span>supply</span> excellent <span>services</span></p>
        <NavLink className="morebtn" to="/shop">SHOP</NavLink>
      </div>
    </div>
  </div>
  <div className="dwn">
    <NavLink className="scroll" to="/"><img src="images/scroll.png" alt="" /></NavLink>
  </div>				 
</div>

    
      
    )
}
