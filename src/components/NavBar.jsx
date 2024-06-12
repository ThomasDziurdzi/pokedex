function NavBar (props) {
    const {pokemonIndex, handleClickBefore, handleClickNext, MaxIndex} = props;
    return (
        <div>
        {pokemonIndex > 0 ? (
          <button onClick={handleClickBefore}>Précédent</button>
        ) : (
          <button style={{visibility: 'hidden'}}></button>
        )}
        {pokemonIndex < MaxIndex ? (
          <button onClick={handleClickNext}>Suivant</button>
        ) : (
          <button style={{visibility: 'hidden'}}></button>
        )}
        </div>
    )
}

export default NavBar