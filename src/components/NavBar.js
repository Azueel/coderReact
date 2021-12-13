import React from 'react';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
	return (
		<div>
			<nav className="bgNav">
				<div className="containerNav">
					<a href="/">Home</a>
					<a href="/">Productos</a>
					<a href="/">Nosotros</a>
					<a href="/">Contactanos</a>
					<CartWidget />

					<a href="/" className="rounded bg-secondary p-2 px-3">
						Login
					</a>
				</div>
			</nav>
		</div>
	);
};
