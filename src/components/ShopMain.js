import React, { Component } from "react";
import Product from '../components/Product';
import Category from "./Category";
import {withRouter} from "react-router-dom";

class  ShopMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      filteredProduct: [],
      sort: "",
      price: "",
      isLoading: true,
      currentPage: 1,
    };
    this.products = [];
    this.productPerPage = 8;
    this.numberPages = 1;
    let _isMounted = false;
    this.sortProduct = this.sortProduct.bind(this);
    this.filterProductPrice = this.filterProductPrice.bind(this);
    
  }
  
  loadAPI = (category) => {
    this._isMounted = true;
    document.querySelector('.loader').style.display = 'block';
   console.log(this.props)
    let url = "https://fakestoreapi.com/products";
    if ( category != undefined) 
    
      url += "/category/" + category;
      fetch (url)
      .then((res) => res.json())
      .then((data) => {
        if (this._isMounted){
          console.log(data);
          this.products = data
          let startIndex = this.productPerPage*(this.state.currentPage -1);
          let endIndex = startIndex + this.productPerPage; 
          let filteredProduct = this.products.slice(startIndex, endIndex); 
          this.numberPages = Math.ceil(this.products.length/this.productPerPage);
          this.setState({
            isLoading: false,
            products: data,
            filteredProduct: filteredProduct,
            // currentProducts: currentProducts,
          });
        }
        document.querySelector('.loader').style.display = 'none';
      })
      .catch((err) => console.log(err));
   }
  componentDidMount() {
   this.loadAPI(this.props.match.params.category);
  }
  shouldComponentUpdate(nextProps){
    if (this.props.match.params.category != nextProps.match.params.category){
      this.loadAPI(nextProps.match.params.category);
    }
    return true;
  }
  // componentDidUpdate(nextProps){
  //   if (this.props.match.params.category != nextProps.match.params.category){
  //     this.loadAPI(nextProps.match.params.category);
  //   }
    
  //  }
// componentWillUnmount(){
//   this._isMounted = false;
// }
showPageProduct = (page,event) => {
  //event.prevenDefault();
  let startIndex = this.productPerPage*(page -1);
          let endIndex = startIndex + this.productPerPage; 
          let filteredProduct = this.products.slice(startIndex, endIndex); 
          this.setState({
            filteredProduct: filteredProduct,
            currentPage: page,
            // currentProducts: currentProducts,
          });
}

createListPage = (numberPages) => {
let pages = [];
for (let i =1; i <= numberPages; i++){
  let page = <li key={i} className={this.state.currentPage === i &&"active"}><a href="javacript: void()"  onClick={this.showPageProduct.bind(this,i)}>{i}</a></li>
pages.push(page)
}
return pages;
}

changeNextPage = (event) => {
  event.preventDefault();
  this.showPageProduct(this.state.currentPage+1);
}


  sortProduct = (e) => {
    
    this.setState({sort: e.target.value});
    this.listProduct();
    };
    //(state.sort === "lowest") ? (a.price < b.price? -1 : 1) : (a.price > b.price? -1 : 1)
    listProduct = () => {
      this.setState(state => {
        
        if (state.sort !== ''){
          state.products.sort((a,b) =>  
          ((state.sort === "lowest") && (a.price < b.price? -1 : 1)) ||
          ((state.sort === "highest") && (a.price > b.price? -1 : 1)) ||
          ((state.sort === "0") && (a.id < b.id? -1 : 1)) || 
          ((state.sort === "3") && (a.title.toLowerCase() < b.title.toLowerCase()? -1 : (a.title.toLowerCase() > b.title.toLowerCase())? 1 : 0 )) ||
          ((state.sort === "4") && (a.title.toLowerCase() > b.title.toLowerCase()? -1 : (a.title.toLowerCase() < b.title.toLowerCase())? 1 : 0 )) ||
          ((state.sort === "bestseller1") && (a.rating.count > b.rating.count? -1 : 1)) ||
          ((state.sort === "bestseller2") && (a.rating.count < b.rating.count? -1 : 1))
          )}
          else {state.products.sort((a,b) => (a.id < b.id) ? -1 : 1 )
          }
          if (state.price !== ''){
            if (state.price === "filter"){
              return {filteredProduct: state.products.filter(function(product){
                return product.price >= 0;})}
            }
            if (state.price === "under50"){
              return {filteredProduct: state.products.filter(function(product){
                return product.price <= 50;})}
            }
            if (state.price === "50to300"){
              return {filteredProduct: state.products.filter(function(product){
                return product.price >= 50 && product.price <= 300;})}
            }
            if (state.price === "300to600"){
              return {filteredProduct: state.products.filter(function(product){
                return product.price >= 300 && product.price <= 600;})}
            }
            if (state.price === "above600"){
              return {filteredProduct: state.products.filter(function(product){
                return product.price >= 600;})}
            }
            
          }
          
          return {filteredProduct: state.filteredProduct}
        }
      )};
      filterProductPrice = (e) => {
    
        this.setState({price: e.target.value});
        this.listProduct();
        };
      


  render() {
    //console.log(this.sortProduct, this.displayProduct)
    //console.log(this.state.sort)
   
    
    return (
      
      <div className="parts">
        <div className="container">
          <h2>ALL PRODUCTS</h2>
          <div className="bike-parts-sec">
            <div className="bike-parts">
              <div className="top row">
               
                <div className="container row">
                  <div className="col-md-3">
                  <ul className="pagination">
                    {this.createListPage(this.numberPages)}
                    {/* <li><a href="#" onClick={this.showPageProduct.bind(this,1)}>1</a></li>
                    <li class="active" onClick={() => this.showPageProduct(2)}><a href="#">2</a></li>
                    <li><a href="#">3</a></li> */}
                    <li><a href="" onClick={this.changeNextPage.bind(this)}>&raquo;</a></li>
                  </ul>
                  </div>
               
                  <div className="col-md-2">
                    {this.state.filteredProduct.length} products found
                  </div>
                  
                  <div className="col-md-4">
                    <select
                      onChange={this.filterProductPrice}
                      name="sort"
                      value={this.state.price}
                    >
                        <option value="filter">Filter by Price Range</option>
                        <option value="under50">Price &lt;= $50</option>
                        <option value="50to300">Price between $50 and $300</option>
                      
                        <option value="300to600">Price between $300 and $600</option>
                        <option value="above600">Price &gt;= $600</option>
                      
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select
                      onChange={this.sortProduct}
                      name="sort"
                      value={this.state.sort}
                    >
                      <option value="0">Sort</option>
                      <optgroup label="Price">
                        
                        <option value="lowest">Lowest to Highest</option>
                        <option value="highest">Highest to Lowest</option>
                      </optgroup>
                      <optgroup label="Name">
                        <option value="3">Name Ascending</option>
                        <option value="4">Name Descending</option>
                      </optgroup>
                      <optgroup label="Bestseller">
                        <option value="bestseller1">Descending</option>
                        <option value="bestseller2">Ascending</option>
                      </optgroup>
                    </select>
                  </div>
                  
                  
                </div>
              </div>
              <div class="loader"></div>
              <Product products={this.state.filteredProduct}/>
            </div>
            <div className="rsidebar span_1_of_left">
              <section className="sky-form">
                <Category products={this.state.products}/>
               
              </section>
              
            </div>
            <div className="clearfix" />
          </div>
        </div>
       
      </div>
    );
  }
}

export default withRouter(ShopMain)