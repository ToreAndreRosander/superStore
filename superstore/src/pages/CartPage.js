import React from 'react';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';

function CartPage() {
  	const cart = JSON.parse(localStorage.getItem('cart')) || [];

	return (
		<div className="container cart-page">
			<Cart cart={cart} />
			<div className="cart-buttons">
				<Link to="/" onClick={() => localStorage.removeItem('cart')} className="blue-btn">Clear Cart</Link>
				<Link to="/checkout" className="green-btn">Checkout</Link>
			</div>
		</div>
	);
}

export default CartPage;