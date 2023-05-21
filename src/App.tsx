import './App.css';
import PokemonList from './components/pokemon-list';
import NavBar from './components/nav-bar/nav-bar';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <PokemonList />
      </main>
    </>
  );
}

export default App;
