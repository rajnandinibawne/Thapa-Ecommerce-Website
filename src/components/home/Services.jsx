import React from 'react'
import styled from 'styled-components';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () =>{

  return (
    <Wrapper>
        <div className="container">
            <div className=" grid grid-three-column">
                <div className="services-1">
                    <div>
                    <TbTruckDelivery className='icon'/>
                    <h3>Super Fast and Free Delivery</h3>

                    </div>
                </div>
                <div className="services-2">
                    <div className="services-colum-2">
                    <MdOutlineSecurity className='icon' />
                    <p>Non Contact Shipping</p>
                    </div>
                    <div className="services-colum-2">
                    <GiReceiveMoney className='icon'/>
                    <p>Money Back Guarantee</p>
                    </div>
                </div>
                <div className="services-3">
                    <div>
                    <RiSecurePaymentLine className='icon'/>
                    <p>Super Secure Payment System</p>

                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
  
}
const Wrapper = styled.section`
 padding: 9rem 0;

    .grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: 35rem;
    height: 23rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 7rem;
    height: 7rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
    `
export default Services