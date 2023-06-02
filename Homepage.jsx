/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import style from './home.module.css'
import { Link } from 'react-router-dom'
const Homepage = () => {
  return (
    <div>
        <section id={style.nav}>
           
          <Link to="/">Create-Users</Link>
            <Link to="/users">Users</Link>
        </section>
    </div>
  )
}

export default Homepage