import React from 'react'
import './Navigate.css'

const Navigation = () => {
  return (
    <nav className='container'>
        <div className='logo'>
            <img src='/img/logo.png' alt='Contact'/>
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation
