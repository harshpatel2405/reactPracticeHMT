
import React from 'react';
import './ProductCard.css';

function ProductCard2({ image, name, price, description }) {
  const handleAddToCart = () => {
    alert(`${name} added to cart!`);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <span className="product-price">${price}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}


export default ProductCard2
