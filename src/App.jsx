import { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';


function App() {
  
  const [pokemonName, setPokemonName] = useState(pokemonList[0].name);
  
  const handlePokemonClick = (name) => {
    if (name === 'pikachu') {
      setPokemonName(name);
      alert("PIKACHUUUUUUUUUUUUUUU")
    } else {
      setPokemonName(name);
    }
  };

  const selectedPokemon = pokemonList.find(pokemon => pokemon.name === pokemonName);

  useEffect( () => {
    alert("hello pokemon trainer :)")
  }, [] 
);

  return (
    <>
      <div>
        <PokemonCard pokemon={selectedPokemon} />
        <NavBar
          PokemonList={pokemonList}
          handlePokemonClick={handlePokemonClick}
        />
      </div>
    </>
  );
}


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
      // imgSrc:
      //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    },
];
export default App;
