import React, {useState, useEffect} from 'react'
import UserContainer from './Components/UserContainer'
import getRandomUser from './Components/Services/FetchUser'
import './Styles/RandomUser.css'


const RandomUser = () => {

  const [randomUser, setRandomUser] = useState({})
  const [loading, setLoading] = useState(true)  

  useEffect(() => {
     getNewUser()
  }, [])
  
  const getNewUser = async() =>{
    setLoading(true)
    let response = await getRandomUser()
    setLoading(false)
    setRandomUser(response)
  }

  return (
    <div className='RandomUserContainer'>
        <h1 style={{color:'white'}} >- Random User Generator -</h1>
      {
        loading 
        ? 
        <h2 style={{color:'white'}}>Getting your user, please wait...</h2>
        :
        <div>
            <UserContainer user={randomUser} generate={getNewUser}/>
        </div>
      }

      
    </div>
  )
}

export default RandomUser
