import React from "react";
import styles from "../styles/Pokemon.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Pokemon = ({ pokemon }) => {

  const navigate = useNavigate()
  const location = useLocation()

  const goToPokemon = () =>{
    console.log(location.pathname)
    navigate(`${location.pathname}/${pokemon.id}`)
  }

  return (
    <div onClick={goToPokemon} className={styles.pokemonCard}>
      <img
        className={`${styles.img}`}
        src={pokemon.img}
        alt={pokemon.name}
      />

      <h4>{pokemon.name}</h4>
    </div>
  );
};

export default Pokemon;
