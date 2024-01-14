import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import ContactPage from './pages/ContactPage';

function App() {
	const [cart, setCart] = React.useState(
		JSON.parse(localStorage.getItem('cart')) || []
	);

	const addToCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		localStorage.setItem('cart', JSON.stringify(newCart));
	};

	const clearCart = () => {
		setCart([]);
		localStorage.removeItem('cart');
	};

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<Router>
		<Layout>
			<Routes>
			<Route path="/" element={<HomePage />} />
			<Route
				path="/product/:id"
				element={<ProductPage onAddToCart={addToCart} />}
			/>
			<Route path="/cart" element={<CartPage cart={cart} />} />
			<Route path="/checkout" element={<CheckoutPage cart={cart} />} />
			<Route
				path="/checkout/success"
				element={<CheckoutSuccessPage clearCart={clearCart} />}
			/>
			<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</Layout>
		</Router>
	);
}

export default App; 