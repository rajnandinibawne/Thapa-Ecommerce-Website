import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Errorpage.module.css"

function Errorpage() {
  return (
    <div className={style.errorpage}>

      <div className={style.sec}>
        <h1>404</h1>
      </div>
      <div className={style.sec}>
        <h2>UH OH! You're lost</h2>
      </div>
      <div className={style.sec}>
        <p>The page you are looking for does not exist. How you get here is a mysteryuy. But you can click the button below to go back to the homepage</p>
      </div>
      <div className={style.sec}>
        <button>
        <NavLink to='/'>
            Go Back to Home
        </NavLink>
        </button>
      </div>
    </div>
  )
}

export default Errorpage





