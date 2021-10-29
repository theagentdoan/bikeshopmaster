import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router';
import { Link } from 'react-router-dom';
import Nomatch from './Nomatch';

export default function Detail() {
  const [product, setProduct] = useState([]);
   const [ recommendedProduct, setRecommendedProduct] = useState([]);
   const [slide, setSlide] = useState({});
   const {id} = useParams();
   const [foundIndex,addToCart] = useState([]);

let output = {};

    useEffect(() => {
      
      if (isNaN(id))
      setProduct(null);
    else
        fetch('https://fakestoreapi.com/products/' + id)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
        let category = data.category;
        fetch('https://fakestoreapi.com/products/category/' + category)
            .then(res=>res.json())
            .then(data=>{
            setRecommendedProduct(data.filter(p => p.id != id))
            console.log(data);
        }
        )
        addToCart (() => {
          let cart = JSON.parse(localStorage.getItem('cart'));
          if (cart == null) cart = [];
          let foundIndex = cart.findIndex((p) => p.id === product.id)
          //console.log(data.id)
          //alert(foundIndex)
          if (foundIndex == -1)
          {
            cart.push({id: product.id, name: product.title, image: product.img, price: product.price, qty: product.quantity })
          }
          else {
            cart[foundIndex].qty++;
          }
          localStorage.setItem('cart', JSON.stringify(cart));
    
        })
        })
        
        .catch(err => console.log(err));
    }, [id])

    
    
   output = recommendedProduct.map(product=>(
          
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
let thumbnails = document.getElementsByClassName('thumbnail');
let activeImages = document.getElementsByClassName('active');


for (let i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('mouseover', function(){
      if (activeImages.length > 0){
      activeImages[0].classList.remove('active')}
      this.classList.add('active')
      document.querySelector('.featured').src = this.src

})}

// document.getElementById('loader2').classList.add = 'show';

// setSlide(slide+180){
//   document.getElementById('sliderRight').scrollLeft = slide + 180;
// }

// function slideLeft(){
//   document.getElementById('sliderLeft').scrollLeft -= 180;
// }
// function slideRight(){
//   alert('ok')
//   document.getElementById('sliderRight').scrollLeft += 180;
// }
// let buttonRight = document.getElementById('slideRight');
// let buttonLeft = document.getElementById('slideLeft');

// buttonLeft.addEventListener('click', function(){
//   document.getElementById('slider').scrollLeft -= 180;
// })

// buttonRight.addEventListener('click', function(){
//   document.getElementById('slider').scrollLeft +=180;
// })
    return (
      product === null ? <Nomatch/> :
        <div className="product">
  <div className="container">
    <div className="ctnt-bar cntnt">
      <div className="content-bar">
        <div className="single-page">
          <div className="product-head">
          
            <a href="/">Home</a> <span>::</span>	
          </div>
          {/*Include the Etalage files*/}
          <link rel="stylesheet" href="css/etalage.css" />
          {/*//details-product-slider*/}
          <div className="col-md-4">
            <div className="">
              
                  
                  <img className="featured" src={product.image} alt={product.title} />
              <div id="slide-wrapper">
                <img  id="slideLeft" className="arrow" src="images/arrowleft.png" alt="arrowleft"/>
                <div id="slider2">
                  <img className="thumbnail active" src={product.image} alt={product.title} />
                  <img className="thumbnail active" src="images/tshirt-thumbnail.jpg" alt={product.title} />
                  <img className="thumbnail" src="images/tshirt2-thumbnail.jpg" alt={product.title}  />
                  <img className="thumbnail" src="images/tshirt3-thumbnail.jpg" alt={product.title} />
                  <img className="thumbnail" src="images/tshirt4-thumbnail.jpg" alt={product.title} />
              </div>
              <img  id="slideRight" className="arrow" src="images/arrowright.png" alt="arrowright"/>
              </div> 
            </div>
          </div>
          <div className="details-left-info col-md-8">
            <h3>{product.title}</h3>
            <h4>Model No: 3498</h4>
           
            <p><label>$</label> {product.price}</p>
            <p className="size">RATING ::</p>
            <img src="images/rating.png" alt="" />
            <div className="btn_form">
              <input type="number" value="0"></input>
              <a href="javacript:void()" onClick={addToCart}>ADD TO CART</a>
            </div>
            <div className="bike-type">
              <p>TYPE  ::<a href="/">{product.category}</a></p>
              <p>BRAND  ::<a href="/">SPORTS SCOTTY</a></p>
            </div>
            <h5>Description  ::</h5>
            <p className="desc">{product.description}</p>
          </div>
          <div className="clearfix" />				 	
        </div>
      </div>
    </div>
    <div className="single-bottom2">
      <h6>Related Products</h6>
      {output}
      
     
    </div>	
  </div>
</div>
    )
}
