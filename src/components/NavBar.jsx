function NavBar(props) {
  const { pokemonIndex, handleClickBefore, handleClickNext, MaxIndex, PokemonList } = props;
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickBefore}>Précédent</button>
      ) : (
        <button style={{ visibility: 'hidden' }}></button>
      )}
      {pokemonIndex < MaxIndex ? (
        <button onClick={handleClickNext}>Suivant</button>
      ) : (
        <button style={{ visibility: 'hidden' }}></button>
      )}
      <div>
        {
          PokemonList.map(pokemon => (
            <button key={pokemon.id} onClick={() => console.log(pokemon.id)}>{pokemon.name}</button>
          ))
        }
      </div>
    </div>
  )
}

export default NavBar