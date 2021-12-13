import React from 'react';
import tijera from '../img/tijera.jpg';
import { ItemCount } from './ItemCount';
import Swal from 'sweetalert2';

export const Item = () => {
	const alertaAgregado = () => {
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Tu Producto fue Agregado exitosamente al carrito',
			showConfirmButton: false,
			timer: 1500,
		});
	};

	const onAdd = () => {
		alertaAgregado();
	};

	return (
		<div>
			<div className="w-25 m-auto border border-3 border-dark">
				<img src={tijera} alt="tijera" className=" imgTijera w-100" />
				<p className="bg-dark text-white text-center fs-3">Stock: 5</p>
				<ItemCount stock={5} initial={1} onAdd={onAdd} />
			</div>
		</div>
	);
};
