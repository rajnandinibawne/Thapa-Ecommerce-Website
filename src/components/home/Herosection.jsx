import React from 'react';
import style from './Herosection.module.css';
import heroimg from '/public/images/hero.jpg';
import { NavLink } from 'react-router-dom';
const Herosection= ({ myData })=> {
  const {name}= myData;
  return (
    <div className={style.wrapper}>
        <div className={style.main}>
            <div className={style.intro}>
                <p className={style.wel}>WELCOME TO</p>
                <h2 className={style.header}>{name}</h2>
                <p className={style.lorem}>Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit. 
                  Cupiditate aliquid, magni, doloremque repellendus dolor 
                  rem autem, quisquam eaque velit rerum quo illo placeat asperiores qui 
                  at vitae iste illum recusandae.</p>
                <button className={style.btn1}><NavLink to='/products'> Shop Now </NavLink> </button>
            </div>
            <div className={style.img}>
              <div className={style.herobg}></div>

              <img src={heroimg}  alt="Hero Section" className={style.hero} />
              
            </div>
        </div>
    </div>
  )
}

export default Herosection







