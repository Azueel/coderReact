import React from 'react';

export const ItemCount = ({ id, title, precio, imagen }) => {
	return (
		<>
			<div className="d-flex">
				<div className="w-25 m-auto border border-3 border-dark mt-5 mb-3">
					<h2 className="text-center">{title}</h2>
					<img src={imagen} alt="tijera" className=" imgTijera w-100" />
					<p className="bg-dark text-white text-center fs-3">Stock: 5</p>
					<p className="fw-bold fs-2 text-center">Precio: {precio}</p>
					<div className=" d-flex justify-content-center p-3">
						<button className="btn btn-dark p-3 w-50 fs-5">Agregar A Carrito</button>
					</div>
				</div>
			</div>
		</>
	);
};
