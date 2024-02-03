import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  });
  return (
    <div>
      Product
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product
      </button>
      <Link to={`/product/details/1010`}>
        <button>Navigate to Product Detail - 1010</button>
      </Link>
      {goToProduct && <Navigate to="/product/details/9780" />}
      <button
        onClick={() => {
          setGoToProduct({ goToProduct: true });
        }}
      >
        Navigate to Product - 9780 {useState}
      </button>
    </div>
  );
}

export default Product;
