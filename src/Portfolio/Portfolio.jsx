import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Homepage from "./Pages/Homepage";
import styles from './styles/Portfolio.module.css'
import RandomUser from '../RandomUser/RandomUser'
import TaskList from '../TaskList/TaskList'
import Pokedex from '../Pokedex/Pokedex'
import PokemonProfile from "../Pokedex/Pages/PokemonProfile";

const Portfolio = () => {
  return (
    <BrowserRouter>
      <div className={styles.webContainer}>
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Homepage />} />
          <Route path='/portfolio/projects' element={<Projects />} />
          <Route path="/portfolio/projects/randomUser" element={<RandomUser />} />
          <Route path="/portfolio/projects/taskList" element={<TaskList />} />
          <Route path="/portfolio/projects/pokedex" element={<Pokedex />} />
          <Route path="/portfolio/projects/pokedex/:id" element={ <PokemonProfile /> } />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Portfolio;
