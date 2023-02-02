const formatPokemon = ({name, url}) =>{

    const splittedUrl = url.split('/')
    const id = splittedUrl[6]
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    const img2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`


    const formatedPokemon = {
        id,
        img,
        img2,
        name, 
        url,
    }
    return formatedPokemon

}
export default formatPokemon