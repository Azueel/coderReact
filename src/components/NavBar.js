import React from 'react';

export const NavBar = () => {
	return (
		<div>
			<nav className="bgNav">
				<div className="containerNav">
					<a href="/">Home</a>
					<a href="/">Productos</a>
					<a href="/">Nosotros</a>
					<a href="/">Contactanos</a>

					<a href="/" className="rounded bg-secondary p-2 px-3">
						Login
					</a>
				</div>
			</nav>
		</div>
	);
};
