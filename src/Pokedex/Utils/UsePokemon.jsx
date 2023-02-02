import { useState, useEffect } from "react"
import fetchPokemonData from "./fetchPokemon"

export const usePokemon = () =>{

    const [loading, setLoading] = useState(true)
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
      
    fetchPokemonData().then(response => {
        setPokemons( response )
        setLoading( false )
    })

    }, [])
    


    return {
        loading,
        pokemons
    }

}