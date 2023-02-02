
const getRandomUser = async() =>{

    let response = await fetch('https://randomuser.me/api/')
    response = await response.json()
    return response.results
}

export default getRandomUser