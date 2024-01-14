import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CheckoutSuccessPage({ clearCart }) {
	useEffect(() => {
		localStorage.removeItem('cart');
	}, [clearCart]);

	return (
		<div className="container checkout-success">
			<h1>Order Successful</h1>
			<p>Your order has been placed successfully!</p>
			<Link to="/">Back to Store</Link>
		</div>
	);
}

export default CheckoutSuccessPage;