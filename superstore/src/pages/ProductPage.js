import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductPage({ onAddToCart }) {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		axios
		.get(`https://api.noroff.dev/api/v1/online-shop/${id}`)
		.then((response) => {
			setProduct(response.data);
		})
		.catch((error) => {
			console.error(error);
		});
	}, [id]);

	if (!product) {
		return <div>Loading...</div>;
	}

	const handleAddToCart = () => {
		onAddToCart(product);
		const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
		localStorage.setItem('cart', JSON.stringify([...existingCart, product]));
	};

	return (
		<div className="container single-product">
			<div className="single-product-top">
				<div className="single-product-image">
					<img src={product.imageUrl} alt={product.title} />
				</div>
				<div className='single-product-data'>
					<h1>{product.title}</h1>
					<span className="reviews-count"> {product.reviews.length} Reviews</span>
					<p>{product.description}</p>
					<p>Price: {product.discountedPrice || product.price}</p>
					{product.discountedPrice && (
						<p>Discount: {product.price - product.discountedPrice}</p>
					)}
					<button onClick={() => handleAddToCart(product)} className="blue-btn">Add to Cart</button>
				</div>
			</div>
		{product.reviews.length > 0 && (
			<div className="product-reviews">
				<h2>Reviews</h2>
				{product.reviews.map(review => (
					<div key={review.id} className="review">
						<p><strong>{review.username}</strong>: {review.description}</p>
						<p>Rating: {review.rating}</p>
					</div>
				))}
			</div>
		)}
		</div>
	);
}

export default ProductPage;