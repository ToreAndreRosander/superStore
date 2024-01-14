import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutPage({ cart }) {
	const getTotalPrice = () => {
		return cart.reduce((total, product) => total + (product.discountedPrice || product.price), 0);
	};

	return (
		<div className='container checkout-page'>
			<h1>Checkout</h1>
			{cart.length === 0 ? ( <p>Your cart is empty.</p> ) : (
				<div className="checkout-container">
					{cart.map(product => (
						<div className="checkout-row" key={product.id}>
							<p>{product.title}</p>
							<p>Price: {product.discountedPrice || product.price}</p>
						</div>
					))}
					<p>Total: {getTotalPrice()}</p>
					<div className="cart-buttons">
						<Link to="/checkout/success" className="blue-btn">Complete Order</Link>
					</div>
				</div>
			)}
		</div>
	);
}

export default CheckoutPage;