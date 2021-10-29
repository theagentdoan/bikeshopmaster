import React, { useState } from 'react';
import {Link} from "react-router-dom";

export default function Cart() {
  const [value, setValue] = useState('');
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))
  //const [cart, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')));

  const itemsPrice = cart.reduce((a,c) => a + c.price*c.qty, 0);
  const discount = itemsPrice > 500 ? 0.1*itemsPrice : 0;
  const shipping = itemsPrice > 500 ? 0 : 20;
  const totalPrice = itemsPrice - discount + shipping;
  

const onAdd =(cartItem) => {
  const exist = cart.find((x) => x.id === cartItem.id)
  if (exist){
setCart(
  cart.map((x) => 
  x.id === cartItem.id ? {...exist, qty:exist.qty + 1} : x)
);
  }
  else {
    setCart([...cart, {...cartItem, qty:1}])
  };
}

const onRemove = (cartItem) => {
  const exist = cart.find((x) => x.id === cartItem.id);
  if (exist.qty === 1)
  {
    setCart(cart.filter((x) => x.id !== cartItem.id))
  }
  else{
    setCart(
      cart.map((x) => 
      x.id === cartItem.id ? {...exist, qty:exist.qty - 1} : x)
    );
  }
}

const handleRemove = (cartItem) => {
  const exist = cart.find((x) => x.id === cartItem.id);
  
    setCart(cart.filter((x) => x.id !== cartItem.id))
  
}

  const changeValue = (v) => {
    // let value = document.getElementById('quantity').innerHTML;
    let value = document.querySelector('#quantity').innerHTML;
    console.log(value);
    setValue(parseInt(value+v))
  }
    return (
      // (cart == {}) ? <div>Cart is empty</div> :

        <div className="cart">
  <div className="container">

    
    <div className="cart-top">
      <Link to="/">&lt;&lt; home</Link>
    </div>	
    <div className="col-md-9 cart-items">
      <h2>My Shopping Bag </h2>
      

        {(cart != null) && 
        (cart.map((p) => 
        (
          <div className="cart-header">
          <div onClick={() => handleRemove(p)}  className="close1"> </div>
        <div className="cart-sec">
          <div className="cart-item cyc">
            <img src={p.img} alt={p.title}/>
          </div>
          <div className="cart-item-info">
            <h3>{p.name}</h3>
            <h6>Model No: 3578</h6>
            <h4 id="itemPrice"><span> $ </span>{p.price}</h4>
            <p className="qty">Qty ::</p>
            <button className="cart_quantity_up" onClick = {() => onRemove(p)}> - </button>
            <input id="itemQty" min={1} type="text" value ={p.qty + value} id="quantity" name="quantity" defaultValue={1} className="form-control input-small" />
            <button className="cart_quantity_down" onClick ={() => onAdd(p)} > + </button>
          <h4 className="qty-price">${(p.qty*p.price).toFixed(2)}</h4>
          </div>
          <div className="clearfix" />
          <div className="delivery">
            
            <span>Delivered in 2-3 bussiness days</span>
            <div className="clearfix" />
          </div>	
          </div>
          </div>
          )
        ))}
        					
        
      
      
    </div>
    {cart.length !== 0 && 
    <div className="col-md-3 cart-total">
    <Link className="continue" to="/shop">Continue to basket</Link>
    <div className="price-details">
      <h3>Price Details</h3>
      <span>Total</span>
      <span className="total">${itemsPrice.toFixed(2)}</span>
      <span>Discount</span>
      <span className="total">${discount.toFixed(2)}</span>
      <span>Delivery Charges</span>
      <span className="total">${shipping.toFixed(2)}</span>
      <div className="clearfix" />				 
    </div>	
    <h4 className="last-price">TOTAL</h4>
    <span className="total final">${totalPrice.toFixed(2)}</span>
    <div className="clearfix" />
    <a className="order" onClick={() => alert('Would you like to check out?')}href="javascript: void()">Place Order</a>
    <div className="total-item">
      <h3>OPTIONS</h3>
      <h4>COUPONS</h4>
      <a className="cpns" href="/">Apply Coupons</a>
      <p><Link to="/signin">Log In</Link> to use accounts - linked coupons</p>
    </div>
  </div>
    }
    
  </div>
</div>

    )
}
