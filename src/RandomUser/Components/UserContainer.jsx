import React from 'react'
import User from './User'
import '../Styles/RandomUser.css'

const UserContainer = ({user, generate }) => {
  return (
    <div className='userContainer'>
      <User user={user}/>
      <button className='btn' onClick={generate} >Generate new profile</button> 
      

    </div>
  )
}

export default UserContainer
