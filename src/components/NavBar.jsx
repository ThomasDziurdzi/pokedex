function NavBar(props) {
  const { handlePokemonClick, PokemonList } = props;
  return (
      <div>
          {PokemonList.map((pokemon) => (
              <button key={pokemon.name} onClick={() => handlePokemonClick(pokemon.name)}>
                  {pokemon.name}
              </button>
          ))}
      </div>
  );
}

export default NavBar;
