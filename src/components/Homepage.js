import React from 'react';
import { Link } from 'react-router-dom';


export default function Homepage() {
    return (
        <div>
           
  <div id="cate" className="categories">
    <div className="container">
      <h3>CATEGORIES</h3>
      <div className="categorie-grids">
       
        <div className="col-md-3 cate-grid grid1">
            <Link to="/shop">
            <h4>ELECTRONICS</h4>
            
          </Link>
          <Link className="store" to="/shop">GO TO STORE</Link>
        </div>
        
        <div className="col-md-3 cate-grid grid2">
            <Link to="/shop">
            <h4>JEWELERY</h4>
          </Link><Link className="store" to="/shop">GO TO STORE</Link>
        </div>
        
        <div className="col-md-3 cate-grid grid1">
            <Link to="/shop">
            <h4>MEN'S CLOTHING</h4>
          </Link><Link className="store" to="/shop">GO TO STORE</Link>
        </div>
        <div className="col-md-3 cate-grid grid2">
        <Link to="/shop">
            <h4>WOMEN'S CLOTHING</h4>
            </Link><Link className="store" to="/shop">GO TO STORE</Link>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  
  <div className="contact">
    <div className="container">
      <h3>CONTACT US</h3>
      <p>Please contact us for all inquiries and purchase options.</p>
      <form>
        <input type="text" placeholder="NAME" required />
        <input type="text" placeholder="SURNAME" required />			 
        <input className="user" type="text" placeholder="USER@DOMAIN.COM" required /><br />
        <textarea placeholder="MESSAGE" defaultValue={""} />
        <input type="submit" defaultValue="SEND" />
      </form>
    </div>
  </div>
</div>

    )
}
