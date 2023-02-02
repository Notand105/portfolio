import React, { useEffect, useState } from "react";
import { usePokemon } from "../Utils/UsePokemon";
import formatPokemon from "../Utils/PokeFormat";
import Pokemon from "../Components/Pokemon";
import styles from '../styles/Homepage.module.css'
import ControlBar from "../Components/ControlBar";
import Footer from "../Components/Footer";


const Homepage = () => {
  const { loading, pokemons } = usePokemon();
  const [pokemonPage, setPokemonPage] = useState(0);
  const [searchPokemon, setSearchPokemon] = useState('')
  const pageLength = 40;
  
  
  const filterPokemon = () => {
    if(searchPokemon.length === 0){
        return pokemons.slice(pokemonPage, pokemonPage + pageLength);
    }
    const searchedpokes = pokemons.filter( pokemon => pokemon.name.includes(searchPokemon) )
    return  searchedpokes.slice(pokemonPage, pokemonPage + pageLength)
    
  };

  const nextPage = () =>{
        setPokemonPage(pokemonPage => pokemonPage + pageLength)
    
  }
  const previousPage = () =>{
    if (pokemonPage - pageLength >= 0){
        setPokemonPage(pokemonPage => pokemonPage - pageLength)
    }
  }

  const handleSearch = (e) =>{
    setSearchPokemon(e)
    setPokemonPage(0)
  }


  return (
    <div className={styles.Homepage}>
      <input 
      className={styles.input}
      placeholder=" Enter pokemon name..."
      type='text' 
      value={searchPokemon} 
      onChange={(e) =>handleSearch(e.target.value)} />
      <ControlBar previousPage={previousPage} nextPage={nextPage} />
      <div className={styles.pokemonContainer}>
        {filterPokemon().map((pokemon, index) => (
          <Pokemon key={index} pokemon={formatPokemon(pokemon)} />
          ))}
      </div>
      
      {loading && <h1>Loading pokemon information</h1>}

      <ControlBar previousPage={previousPage} nextPage={nextPage} />
      <Footer /> 
    </div>
  );
};

export default Homepage;
