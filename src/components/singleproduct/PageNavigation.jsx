import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './PageNavigation.module.css'

const PageNavigation = ({title}) => {
  return (
    <div className={style.top}>
        <div className={style.head}>
        <NavLink to = '/'>Home</NavLink> / {title}
        </div>
    </div>
  )
}

export default PageNavigation
