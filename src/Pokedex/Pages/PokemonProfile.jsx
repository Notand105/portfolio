import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/PokemonProfile.module.css";
import "../styles/Effects.css";
import fetchOnePokemonData from "../Utils/fetchOnePokemon";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Footer from "../Components/Footer";

const PokemonProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pokemonData, setPokemonData] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchOnePokemonData(id).then((response) => {
      setPokemonData(response);
      setReady(true);
    });
  }, []);

  const handleBack = () => {
    navigate("/projects/pokedex");
  };

  return (
    <div className={styles.pokemonProfile}>
      <button onClick={handleBack} className={styles.btn}>
        <ArrowBackIosNewOutlinedIcon />
        Back to home{" "}
      </button>
      {ready && (
        <div className={styles.container}>
          <div className={styles.img}>
            <img
              src={pokemonData.sprites.other["official-artwork"].front_default}
              alt={pokemonData.name}
            />
          </div>
          <div className={styles.stats}>
            <h1 style={{fontSize:'4rem', color:'white'}}>{pokemonData.name.toUpperCase()}</h1>
            <div className={styles.typeContainer}>
              {pokemonData.types.map((type, index) => (
                <div key={index}>
                  <div className={`${type.type.name} ${styles.type} `}>
                    {type.type.name}
                  </div>
                </div>
              ))}
            </div>
            {pokemonData.stats.map((stat, index) => (
              <div key={index} className={styles.statContainer}>
                <p>{stat.stat.name.toUpperCase()} </p>
                <div
                  className={`stat ${styles.stat}`}
                  style={{ width: `${stat.base_stat * 2}px` }}
                >
                  {stat.base_stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PokemonProfile;
