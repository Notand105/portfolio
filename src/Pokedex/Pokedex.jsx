// import Homepage from "./Pages/Homepage"
// import PokemonProfile from './Pages/PokemonProfile'
// import { BrowserRouter, Routes, Route } from "react-router-dom"

// const Pokedex = () => {
//   return (
//     <>
//       <BrowserRouter >
//       <Routes>
//         <Route path="/" element={ <Homepage /> } />
//         <Route path="/pokemon/:id" element={ <PokemonProfile /> } />
//       </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default Pokedex
import Homepage from "./Pages/Homepage"
import PokemonProfile from './Pages/PokemonProfile'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Pokedex = () => {
  return (
    <>
      <Homepage />
    </>
  )
}

export default Pokedex