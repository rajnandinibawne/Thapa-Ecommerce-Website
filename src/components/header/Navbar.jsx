import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu  } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import style from './Navbar.module.css'
import { useCartContext } from '../../context/Cart_context';

const Navbar = () => {
  const { total_item} = useCartContext();

const Navbar = styled.nav`
    padding : 0.8rem 1.4rem;
   
`

  return (
    <Navbar>
        <div>
            <ul className={style.navlist}>
                <li>
                  <NavLink to="/" className={style.navbarlink}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about"  className={style.navbarlink}>About </NavLink>
                </li>
                <li>
                   <NavLink to="/products"  className={style.navbarlink}>Products </NavLink>
                </li> 
                <li>
                  <NavLink to="/contact"  className={style.navbarlink}> Contacts </NavLink>
                </li>
                <li>
                  <NavLink to="/cart"  className={style.navbarlink }>
                   <FaShoppingCart className={style.trolley}/>
                  <span className={style.Total}>{total_item}</span>
                  </NavLink>
                </li>

               
            </ul>
            <div className={style.mobnavbtn}>
              <IoMenu name="menu-outline" className={style.mobnavicon}/>
              <CgClose name="close-outline" className={style.mobnaviconclose}/>
            </div>
        </div>
    </Navbar>
  )
}

export default Navbar