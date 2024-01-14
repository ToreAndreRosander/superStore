import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

function Header({ cart }) {
	return (
		<header>
		<nav>
			<Link to="/">Frontpage</Link>
			<Link to="/contact">Contact</Link>
			<CartIcon cart={cart} />
		</nav>
		</header>
	);
}

export default Header;