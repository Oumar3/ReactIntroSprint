import React, { useEffect, useState } from "react";
import "../index.css"
import api from "../libs/Api";


type Pokemon = {
  _id?: string;
  number?: number;
  name?: string;
  types?: string;
  imageUrl?: string;
  trainer?: string;
  zones?: string[];
};

const Pokedex: React.FC<Pokemon> = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        await api.get("/pokemons")
          .then((response) => {
            setPokemons(response.data.data);
          })
          .catch((error) => {
            console.error("Error fetching Pokémons:", error);
          });
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <h2>Liste des Pokémons</h2>
      <ul className="pokemon-list">
        {pokemons.length > 0 ? pokemons.map((pokemon,index) => (
          <li key={index} className="pokemon-list-item">
            <h3>{pokemon.name}</h3>
            {pokemon.imageUrl && <img src={pokemon.imageUrl} alt="Photo" />}
            <a href={`${import.meta.env.VITE_API_URL}/pokemons/${pokemon._id}`}>Voir détails</a>
          </li>
        )) : <p>pas de données sur les Pokémons pour le moment</p>}
      </ul>
    </div>
  );
};

export default Pokedex;
