import React, { useState } from 'react'
import styled from 'styled-components';
const MyImage = ({imgs = [{url : ""}]}) => {
  const [mainImage , setMainImage] = useState(imgs[0]) ;
  console.log(imgs);
  return (
    <Wrapper>
      <div className=" grid grid-four-column">
        {
          imgs.map((curElem , index) => {
            return (
              <figure>
                <img src = {curElem.url} 
                alt={curElem.filename}
                className='box-image--style'
                key={index}
                onClick={ () => setMainImage(curElem)  }
                />
              </figure>
            );
          })
        }
      </div>
      <div className="main-screen">
        <img src= {mainImage.url} alt={mainImage.url} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  margin-bottom: 50px;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      // max-width: 100%;
      // max-height: 100%;
      height:105px;
      width : 150px;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

`

export default MyImage







