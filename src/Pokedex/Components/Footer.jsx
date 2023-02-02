import React from 'react'

const styles = {
    footer:{
        marginTop:'50px',
        width:'100%',
        height: '50vh',
        backgroundColor: 'black',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
    }
}

const Footer = () => {
  return (
    <div style={styles.footer}>
        Footer component
    </div>
  )
}

export default Footer