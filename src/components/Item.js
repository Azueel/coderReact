import { useState } from 'react';
import { ItemCount } from './ItemCount';
import Swal from 'sweetalert2';

export const Item = () => {
	const [productos, setProductos] = useState([
		{
			id: '1',
			title: 'Tijera Mundial',
			precio: '$1500',
			imagen: `https://d3ugyf2ht6aenh.cloudfront.net/stores/887/684/products/913810-mla41733146486_052020-f-4e1ecb832026c62f9316010672748794-1024-1024.jpg`,
		},
		{
			id: '1',
			title: 'Tijera Kieper',
			precio: '$4500',
			imagen: `https://http2.mlstatic.com/D_NQ_NP_958643-MLA44199167952_112020-O.webp`,
		},
	]);

	return (
		<div>
			<div className="deck">
				{productos.map((card) => (
					<ItemCount
						key={card.id}
						id={card.id}
						title={card.title}
						precio={card.precio}
						imagen={card.imagen}
					/>
				))}
			</div>
		</div>
	);
};
