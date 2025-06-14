import React from 'react'
// import styled from 'styled-components'
import Herosection from './Herosection'
import Services from './Services';
import Trusted from './Trusted';
import FeatureProducts from '../featureproducts/FeatureProducts';
 
const Home = () => {
  const data ={
    name:"Thapa Store",
  };

  return (
    <div>
    <Herosection myData={data}/>
    <FeatureProducts/>
    <Services/>
    <Trusted/>
 
    </div>
  )
}

export default Home