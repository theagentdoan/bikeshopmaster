import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

class Detail extends Component {
  constructor(props){
    super(props)
    this.id= this.props.match.params.id; 
    this.state = {product: {}, recommendedProduct:[]}

  }

  loadAPI = (id) => {
    fetch('https://fakestoreapi.com/products/'+id)
    .then(res => res.json())
    .then(data => {
      this.setState({product: data}); 
      let category = data.category;
      fetch('https://fakestoreapi.com/products/category/' + category)
      .then(res => res.json())
      .then(data => {
        //let dataCategory = data.filter((p) =>{p.id != this.id});
        this.setState({recommendedProduct: data.filter((p) =>p.id != id)})
      })
    })
    .catch(err => console.log(err))
  }
  componentDidMount(){
    this.loadAPI(this.id);
  }

  shouldComponentUpdate(nextProps){
    if (this.props.match.params.id !== nextProps.match.params.id)
    {this.loadAPI(nextProps.match.params.id)}
    return true;
  }
  addToCart = () => {
  const {product} = this.state;
  console.log(product);
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
  buyNow = () => {
    const {product} = this.state;
    console.log(product);
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
    window.scrollTo(0, 600);
  
    }
    render() {
      let thumbnails = document.getElementsByClassName('thumbnail');
      let activeImages = document.getElementsByClassName('active');


      for (let i = 0; i < thumbnails.length; i++){
      thumbnails[i].addEventListener('mouseover', function(){
      if (activeImages.length > 0){
      activeImages[0].classList.remove('active')}
      this.classList.add('active')
      document.querySelector('.featured').src = this.src

})}

let output = this.state.recommendedProduct.map(product=>(
          
  <div key={product.id} className="product">
  <div className="product-desc">
    <div className="product-img product-img2">
      <img src={product.image} className="img-responsive " alt={product.title} />
    </div>
    <div className="prod1-desc">
      <h5><Link className="product_link" to={"/detail/"+product.id}>{product.title}</Link></h5>
      <p className="product_descr"> {product.description} </p>									
    </div>
    <div className="clearfix" />
  </div>
  <div className="product_price">
    <span className="price-access">${product.price}</span>								
    <Link className="button1" to={"/detail/" + product.id}><span>View details</span></Link>
  </div>
  <div className="clearfix" />
</div>
 ))
        return (
            <div className="product">
  <div className="container">
    <div className="ctnt-bar cntnt">
      <div className="content-bar">
        <div className="single-page">
          <div className="product-head">
            <Link to="/">Home</Link> <span>::</span>	
          </div>
          {/*Include the Etalage files*/}
          <link rel="stylesheet" href="css/etalage.css" />
          {/*//details-product-slider*/}
          <div className="col-md-4">
          <div className="">
              
                  
              <img className="featured" src={this.state.product.image} alt={this.state.product.title} />
          <div id="slide-wrapper">
            <img  id="slideLeft" className="arrow" src="images/arrowleft.png" alt="arrowleft"/>
            <div id="slider2">
              <img className="thumbnail active" src={this.state.product.image} alt={this.state.product.title} />
              <img className="thumbnail active" src="images/tshirt-thumbnail.jpg" alt={this.state.product.title} />
              <img className="thumbnail" src="images/tshirt2-thumbnail.jpg" alt={this.state.product.title}  />
              <img className="thumbnail" src="images/tshirt3-thumbnail.jpg" alt={this.state.product.title} />
              <img className="thumbnail" src="images/tshirt4-thumbnail.jpg" alt={this.state.product.title} />
          </div>
          <img  id="slideRight" className="arrow" src="images/arrowright.png" alt="arrowright"/>
          </div> 
        </div>
          </div>
          <div className="details-left-info">
            <h3>{this.state.product.title}</h3>
            <h4>Model No: 3498</h4>
           
            <p><label>$</label> {this.state.product.price}</p>
            <p className="size">RATING ::</p>
            <img src="images/rating.png" alt="" />
            <div className="btn_form">
            <Link to="/cart" onClick={this.buyNow}>BUY NOW</Link>
              <a href="javacript: void()" onClick={this.addToCart}>ADD TO CART</a>
            </div>
            <div className="bike-type">
              <p>TYPE  ::<a href="/">{this.state.product.category}</a></p>
              <p>BRAND  ::<a href="/">SPORTS SCOTTY</a></p>
            </div>
            <h5>Description  ::</h5>
            <p className="desc">{this.state.product.description}</p>
          </div>
          <div className="clearfix" />				 	
        </div>
      </div>
    </div>
    <div className="single-bottom2">
      <h6>Related Products</h6>
      {output}
      {/* <div className="product">
        <div className="product-desc">
          <div className="product-img product-img2">
            <img src="images/s1.jpg" className="img-responsive " alt="" />
          </div>
          <div className="prod1-desc">
            <h5><a className="product_link" href="bicycles.html">Road Bike</a></h5>
            <p className="product_descr"> Vivamus ante lorem, eleifend nec interdum non, ullamcorper et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.eleifend nec interdum non, ullamcorper et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra. </p>									
          </div>
          <div className="clearfix" />
        </div>
        <div className="product_price">
          <span className="price-access">$300.51</span>								
          <a className="button1" href="cart.html"><span>Add to cart</span></a>
        </div>
        <div className="clearfix" />
      </div> */}
      {/* <div className="product">
        <div className="product-desc">
          <div className="product-img product-img2">
            <img src="images/s2.jpg" className="img-responsive " alt="" />
          </div>
          <div className="prod1-desc">
            <h5><a className="product_link" href="bicycles.html">Mountain Bike</a></h5>
            <p className="product_descr"> Vivamus ante lorem, eleifend nec interdum non, ullamcorper et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.eleifend nec interdum non, ullamcorper et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra. </p>									
          </div>
          <div className="clearfix" />
        </div>
        <div className="product_price">
          <span className="price-access">$1500.51</span>								
          <a className="button1" href="cart.html"><span>Add to cart</span></a>
        </div>
        <div className="clearfix" />
      </div>
      <div className="product">
        <div className="product-desc">
          <div className="product-img product-img2">
            <img src="images/s3.jpg" className="img-responsive " alt="" />
          </div>
          <div className="prod1-desc">
            <h5><a className="product_link" href="bicycles.html">Single Speed Bike</a></h5>
            <p className="product_descr"> Vivamus ante lorem, eleifend nec interdum non, ullamcorper et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.eleifend nec interdum non, ullamcorper et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra. </p>									
          </div>
          <div className="clearfix" />
        </div>
        <div className="product_price">
          <span className="price-access">$800.51</span>								
          <a className="button1" href="cart.html"><span>Add to cart</span></a>
        </div>
        <div className="clearfix" />
      </div> */}
    </div>	
  </div>
</div>

        )
    }
}
export default withRouter(Detail)