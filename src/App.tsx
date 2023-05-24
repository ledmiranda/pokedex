import './App.css';
import PokemonList from './components/pokemon-list';
import NavBar from './components/nav-bar/nav-bar';

function App() {
  return (
    <div className="home">
      <NavBar />
      <main>
        <PokemonList />
      </main>
    </div>
  );
}

export default App;
