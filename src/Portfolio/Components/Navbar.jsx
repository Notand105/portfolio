import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const handleTravel = () =>{
    navigate('/')
  }

  return (
    <div className={styles.Navbar}>
        <ul >
            <li><Link to='/portfolio'>Home</Link></li>
            <li><Link to='/portfolio/projects' >Projects</Link></li>
        </ul>
    </div>
  )
}

export default Navbar