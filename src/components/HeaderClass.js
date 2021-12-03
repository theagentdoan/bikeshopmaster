import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { FilterContext } from '../FilterContext';


export default class Header extends Component {
static contextType = FilterContext;

// constructor(props){
//     super(props);
//     this.state = {keyword: ''};
// }
// handleChange = (event) => 
//   {
//     this.setState({[event.target.name]: event.target.value});
//   }

//   handleSubmit = (event) =>
//   {
//     // alert(this.state.keyword);
//     event.preventDefault();
   
//     window.keyword = this.state.keyword;
//     this.props.setKeyword(this.state.keyword);
//     //this.state.keyword='';
//   }

handleMoveDown = () => {
  window.scrollTo(0, 600);
}
    render() {
        return (
            <div className="banner-bg banner-bg1">	
  <div className="container">
    <div className="header">
      <div className="logo">
        <Link to="/"><img src="images/logo.png" alt="" /></Link>
      </div>							 
      <div className="top-nav">		

        <label className="mobile_menu" htmlFor="mobile_menu">
          <span>Menu</span>
        </label>
        <input id="mobile_menu" type="checkbox" />
        <ul className="nav">
          <li className="dropdown1"><Link exact activeClassName="active" to="/" onClick={this.handleMoveDown}>HOME</Link>
            
          </li>
          <li className="dropdown1"><Link to="/shop" onClick={this.handleMoveDown}>SHOP</Link>
            
          </li>      
            
          <li className="dropdown1"><Link to="/login" onClick={this.handleMoveDown}>LOGIN</Link>
           
          </li>             
          
          <Link className="shop" to="/cart" onClick={this.handleMoveDown}><img src="images/cart.png" alt=""/><span id="cart-count" className="badge badge-light">0 </span></Link>
          <br></br>
          
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
        <Link className="morebtn" to="/shop">SHOP</Link>
      </div>
    </div>
  </div>
  <div className="dwn">
    <div className="scroll" onClick={this.handleMoveDown}><img src="images/scroll.png" alt="" /></div>
  </div>				 
</div>
        )
    }
}
