import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import styled from 'styled-components'
import Navbar from './Navbar'

function Header() {
  return (
    <MainHeader className={style.header}>
        <NavLink to="/">
            <img src='./images/logo.png' alt='my logo img' />
        </NavLink>
        <Navbar/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
    padding: 0 4.8 rem;
    height: 8.5rem;
    // background-color:${({ theme }) => theme.colors.bg};
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    .logo{
    height:5rem;
    }
`;

export default Header