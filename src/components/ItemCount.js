import { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd }) => {
	const [stockRestante, setStockRestante] = useState(stock);
	const [cantidad, setCantidad] = useState(initial);

	const resta = () => {
		if (cantidad === 1) {
			return;
		} else {
			setCantidad(cantidad - 1);
		}
	};
	const suma = () => {
		if (cantidad === stockRestante) {
			return;
		} else {
			setCantidad(cantidad + 1);
		}
	};
	return (
		<>
			<div className="d-flex justify-content-center">
				<button className="btn btn-dark me-2 fs-4" onClick={resta}>
					-
				</button>
				<label className="fs-3 mb-2">Cantidad: {cantidad}</label>
				<button className="btn btn-dark ms-2" onClick={suma}>
					+
				</button>
			</div>
			<div className="d-flex justify-content-center m-4">
				<button className="btn btn-primary p-3" onClick={onAdd}>
					Agregar al Carrito
				</button>
			</div>
		</>
	);
};
