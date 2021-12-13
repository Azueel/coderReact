import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<body>
				<ItemListContainer nombre="Alejo" />
			</body>
		</div>
	);
}

export default App;
