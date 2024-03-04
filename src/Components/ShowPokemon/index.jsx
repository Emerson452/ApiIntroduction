import axios from "axios";
import React, { useState } from "react";

function ShowPokemon() {
    const [pokemon, setPokemon] = useState({ name: '', id: '', image: ''});

    const changePokemon = async () => {
        let randomNumber = Math.ceil(Math.random() * 100) + 1;
        let url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

        try {
            const response = await axios.get(url);
            setPokemon({
                name: response.data.name,
                id: response.data.id,
                image: response.data.sprites.front_default,
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des données Pokémon:', error);
        }
    };

  return (
    <div className="container-pokemon">
      <div className="image-wrapper">
        {pokemon.image && <img src={pokemon.image} alt={pokemon.name} />}
      </div>
      <div id="name">{pokemon.name}</div>
      <div id="number">{pokemon.id}</div>
      <button onClick={changePokemon}>Get other Pokemon</button>
    </div>
  );
}

export default ShowPokemon;
