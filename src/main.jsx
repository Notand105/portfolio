import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import RandomUser from './RandomUser/RandomUser'
import TaskList from './TaskList/TaskList'
import Routing from './React-router/Routing'
import Pokedex from './Pokedex/Pokedex'
import Portfolio from './Portfolio/Portfolio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RandomUser /> */}
    {/* <TaskList /> */}
    {/* <Routing /> */}
    {/* <Pokedex/> */}
    <Portfolio/>
  </React.StrictMode>,
)
