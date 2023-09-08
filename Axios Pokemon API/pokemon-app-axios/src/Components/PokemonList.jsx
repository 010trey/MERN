    // src/components/PokemonList.js
    import React, { useState } from 'react';
    import axios from 'axios';

    function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPokemon = async () => {
        setLoading(true);
        try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
        setPokemonList(response.data.results);
        } catch (error) {
        console.error('Error:', error);
        }
        setLoading(false);
    };

    return (
        <div>
        <button onClick={fetchPokemon}>Fetch Pokémon</button>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul>
            {pokemonList.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
            ))}
            </ul>
        )}
        </div>
    );
    }

    export default PokemonList;
