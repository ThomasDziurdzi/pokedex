import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar';

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);


  const handleClickBefore = () => {
    setPokemonIndex(pokemonIndex - 1);
  }
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  }

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        <NavBar
        pokemonIndex = {pokemonIndex}
        handleClickBefore = {handleClickBefore}
        handleClickNext = {handleClickNext}
        MaxIndex = {pokemonList.length - 1}  
        />
      </div>
    </>
  )
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
    },
  ];

export default App
