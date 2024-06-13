import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
    
    return (

        <figure>
            {pokemon.imgSrc ? 
            (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>Et l'image de {pokemon.name} ???</p>
            )}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {
    pokemon : PropTypes.shape( {
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
    }).isRequired,
}


export default PokemonCard;