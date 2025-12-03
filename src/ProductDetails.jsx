import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const goNext = () => {
    navigate(`/products/${parseInt(id) + 1}`);
  };

  const goPrevious = () => {
    if (parseInt(id) > 1) {
      navigate(`/products/${parseInt(id) - 1}`);
    }
  };

  return (
    <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
      
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      {/* Product Details */}
      <div>
        <h1>Product Details: {product.title}</h1>

        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Rating:</strong> ⭐ {product.rating}</p>

        {/* Dimensions */}
        {product.dimensions && (
          <p>
            <strong>Dimensions:</strong><br />
            Width: {product.dimensions.width} cm<br />
            Height: {product.dimensions.height} cm<br />
            Depth: {product.dimensions.depth} cm
          </p>
        )}

        {/* Buttons */}
        <div style={{ marginTop: "20px" }}>
          <button onClick={goPrevious} disabled={parseInt(id) === 1}>
            Previous
          </button>

          <button
            onClick={goNext}
            style={{ marginLeft: "10px" }}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProductDetails;