import React from 'react';

function Cart({ cart }) {
  	const getTotalPrice = () => {
    	return cart.reduce((total, product) => total + (product.discountedPrice || product.price), 0);
  	};

	return (
		<div className="cart-container">
			<h1>Shopping Cart</h1>
			{cart.length === 0 ? ( <p>Your cart is empty.</p> ) : (
				<>
				{cart.map((product, index) => (
					<div key={index} className="cart-row">
						<p>{product.title}</p>
						<p>Price: {product.discountedPrice || product.price}</p>
					</div>
				))}
				<p>Total: {getTotalPrice()}</p>
				</>
			)}
		</div>
	);
}

export default Cart;