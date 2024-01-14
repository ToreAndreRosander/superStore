import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
	return (
		<div className="product-card">

			<div className="product-card-image">
				<img src={product.imageUrl} alt={product.title} />
			</div>

			<h2 className="product-card-title">{product.title}</h2>
			<p className="product-card-description">{product.description}</p>

			<div className="product-card-price">
				<p>Price: {product.discountedPrice || product.price}</p>
				{product.discountedPrice && (
					<p>Discount: {product.price - product.discountedPrice}</p>
				)} 
			</div>
			<div className="product-card-buttons">
				<Link to={`/product/${product.id}`}>View Product</Link>
			</div>
		</div>
	);
}

export default Product;