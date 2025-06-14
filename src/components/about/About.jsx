import React, { useContext } from 'react'
import Herosection from '../home/Herosection'
import Services from '../home/Services'
import { AppContext, useProductContext } from '../../context/productcontext';

const About = ( ) => {
  const { myName }= useProductContext();

  const data ={
    name:"Thapa Ecommerce",
  };
  
  return(
    <>
    {myName}
    <Herosection myData={data}/>
    
    <Services />
    </>
    
  )
}
export default About