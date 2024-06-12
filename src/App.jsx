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
        PokemonList = {pokemonList}
        />
      </div>
    </>
  )
}

const pokemonList = [
  {
      id: 1,
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id : 2,
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id : 3,
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      id : 4,
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      id : 5,
      name: "mew",
    },
  ];

export default App
