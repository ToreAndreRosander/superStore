import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './../components/Product';

function HomePage() {
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(8);

	useEffect(() => {
		axios.get('https://api.noroff.dev/api/v1/online-shop')
		.then(response => {
			setProducts(response.data);
		})
		.catch(error => {
			console.error(error);
		});
	}, []);

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="container store-frontpage">
		<h1>Welcome to our eCom store</h1>
		<div className="product-list">
			{currentProducts.map(product => (
			<Product key={product.id} product={product} />
			))}
		</div>
		<nav>
			<ul className='pagination'>
			{pageNumbers.map(number => (
				<li key={number} className='page-item'>
				<button onClick={() => paginate(number)} className='page-link'>
					{number}
				</button>
				</li>
			))}
			</ul>
		</nav>
		</div>
	);
}

export default HomePage;