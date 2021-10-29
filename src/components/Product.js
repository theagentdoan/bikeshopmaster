import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Product extends Component {
  constructor(props) {
    super(props);
    // this.state = {cart: JSON.parse(localStorage.getItem('cart')) }
  }

//   addToCart = (product) => {
//     const {products} = this.props;
//     console.log(products)
//     const cart = this.state.cart
//     const exist = cart.find((x) => x.id === product.id)
//   if (exist){
// this.setState({cart: cart.map((x) => x.id === product.id ? {...exist, qty:exist.qty + 1} : x)}
// );
//   }
//   else {
//     this.setState({cart: [...this.state.cart, {...product, qty:1}]})
//   };
//     localStorage.setItem('cart', JSON.stringify(this.state.cart));
//     let total = this.state.cart.reduce((prev, p) => prev + p.qty, 0)
//     document.querySelector('#cart-count').innerHTML = total;
//     window.scrollTo(0, 0);
    

//   }

  addToCart = (product) => {
    const {products} = this.props;
    console.log(products)
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart == null) cart = [];
    let foundIndex = cart.findIndex((p) => p.id === product.id)
    if (foundIndex == -1)
    {
      cart.push({ id:product.id, name: product.title, img: product.image, price: product.price, qty: 1});
    }
    else
    cart[foundIndex].qty++
    localStorage.setItem('cart', JSON.stringify(cart));
    let total = cart.reduce((prev, p) => prev + p.qty, 0)
    document.querySelector('#cart-count').innerHTML = total;
    window.scrollTo(0, 0);
    

  }


    render() {
        const productItems = this.props.products.map((product, index) => (
            <div key={index} className="part-sec col-4">
              <Link to={"/detail/" + product.id}>
                <img src={product.image} alt={product.title} />
              </Link>
              <div className="part-info">
                <Link to={"/detail/" + product.id}>
                  <h5>
                    {product.title}
                    <span className="product-price">${product.price}</span>
                  </h5>
                </Link>
                <Link className="add-cart" to={"/detail/"+ product.id}>
                  Quick View
                </Link>
                {/* <span>Rate: {product.rating.rate}</span>  */}
                <div className="sold-items">Sold Items: {product.rating.count}</div>
                <span className="buy">
                {/* <Link className="qck" to="/cart" onClick={this.addToCart}>
                  Buy Now
                </Link> */}
                </span>
                <span>
                {/* <a className="qck" href="javacript: void()" onClick={this.addToCart}>
                  Add to cart
                </a> */}
                </span>
                
              </div>
            </div>
          ))
        return (
            <div className="bike-apparels ">
                {productItems}
                <div className="clearfix" />
              </div>
        )
    }
}
