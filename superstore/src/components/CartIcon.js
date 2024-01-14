import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
function CartIcon() {
	const [itemCount, setItemCount] = useState(0);

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem('cart')) || [];
		setItemCount(cart.reduce((total, item) => total + (item.quantity || 1), 0));
	}, []);

	return (
		<Link to="/cart" className="cart-icon">
		<img className="shopping-cart-icon" src="./static/images/icons/shopping-cart-icon.png"></img>
		<span className="cart-count">{itemCount}</span>
		</Link>
	);
}

export default CartIcon;
