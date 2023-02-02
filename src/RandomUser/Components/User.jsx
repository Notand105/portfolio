import React from 'react'
import '../Styles/RandomUser.css'

const User = ({user}) => {

  //function to get the text to copy on clipboard  
  const generateInfo = () =>{
    return (
        `name: ${user[0].name.first} ${user[0].name.last}
         gender: ${user[0].gender}
         email: ${user[0].email}
         location: ${user[0].location.city}, ${user[0].location.state}, ${user[0].location.country} 
         age: ${user[0].dob.date}
         birthday: ${(user[0].dob.date).slice(0,10)}
         cellphone:  ${user[0].cell}
         telephone: ${user[0].phone}
         username: ${user[0].login.username}
         password: ${user[0].login.password}
         `
    )
  } 
  const handleClick = () =>{
    const toCopy = generateInfo()
    navigator.clipboard.writeText(toCopy)
  }

  return (
    <div className='user'>

        { user.map( ( (person, index)=>
            (
              <div className='userData' key={index}>
                <img src={person.picture.large} 
                width='150px'
                alt={person.name.first} 
                style={{borderRadius:'15px'}}
                />
                {/*{person.name.title}.*/}
                <h3> {person.name.first} {person.name.last}</h3>
                {/*Capitalize first letter of the person.gender */}
                <p>{(person.gender)[0].toUpperCase() + (person.gender).slice(1) }</p>
                <p>{person.email}</p>
                <p>{person.location.city}, {person.location.state}, {person.location.country} </p>
                <p>Birth day: {(person.dob.date).slice(0,10)} || Age: {person.dob.age}</p> 
                <p>Cell: {person.cell} || Telephone: {person.phone}</p>
                <p>username: {person.login.username}  ||  password: {person.login.password}</p>
                </div>  
            )
            
         )  ) }
        <button className='btn copy' 
        onClick={handleClick}
       >
        Copy information
       </button>  

    </div>
  )
}

export default User
