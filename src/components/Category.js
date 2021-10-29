import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Category(props) {
   const [product, setProduct] = useState([]);
   const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then((res) => res.json())
        .then((data)=> {setCategory(data);
        
    })
    .catch(err => console.log(err));
    }, [])
       
       const output = categories.map(category => (
        
        <div key={category.toString()} className="panel panel-default">
            <div className="panel-heading">
            <h4 className="panel-title">
                        <Link to={'/shop/'+category}>{category}</Link>
                    </h4>
                  </div>
        </div>
        
    ))
        
        
   
    return (
        <div  className="product_right">
        <h3 className="m_2">Categories</h3>
        <div className="panel-group category-products" id="accordian">
        {output}
        </div>
         </div>
    )
}
