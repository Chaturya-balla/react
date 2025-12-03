import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products(){
  var [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setProducts([...data.products]);
    });
  },[]);

  return(
    <div>
      <h1>Products</h1>
      <ul>
        {products?.map((prod) => {
          return(
            <li>
              <Link to ={`/products/${prod.id}`}>{prod.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Products;