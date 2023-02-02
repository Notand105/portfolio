import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectsData from '../Models/data'
import styles from '../styles/Projects.module.css'

const Projects = () => {

  const data = ProjectsData
  const navigate = useNavigate()

  const handleTravel = (location) =>{
    navigate(`/projects/${location}`)
  }

  return (
    <div id='PROJECTS'className={styles.Container} >
      <h1 >PROJECTS</h1>
      <div style={{width:'80vw' ,height:'100vh', color:'black'}}>
            {
              data.map(project => (
                <div 
                onClick={() => handleTravel(project.link)}
                className={styles.ProjectsContainer} 
                key={project.id}>
                  <img 
                  className={styles.img} src={project.img} />
                  <div className={styles.textContainer}>
                  <h3 style={{color:'black'}} >{project.name}</h3>
                  <p>{project.description}</p>

                  </div>
                  
                </div>
              ))
            }
            
      </div>
    </div>
  )
}

export default Projects
