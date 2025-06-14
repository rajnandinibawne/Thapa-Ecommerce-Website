import React from 'react'
import { NavLink } from 'react-router-dom'
// import styled from 'styled-components'
import style from './Footer.module.css'
import { FaDiscord,  FaInstagram ,FaYoutube } from "react-icons/fa6";


const Footer = ( ) => {
  return (
    <>
        <section className={style.contactshort}>
        <div className={style.ppp}>
            <div className={style.left}>
                <h3 className={style.leftp}>
                    Ready to get started?
                </h3>
                <h3 className={style.leftp}>Talk to us today</h3>
            </div>
            <button className={style.startbtn}>
                <NavLink to = '/contact' className={style.bottom}>Get Started</NavLink>
                
            </button>
        </div>
        </section>

        <footer className={style.foot}>
          <div className={style.wrap}>
            <div className={style.one}>
              <h3>Thapa Technical</h3>
              <h4 className={style.pppp}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h4>
            </div>

            <div className={style.two}>
              <h3 className={style.subs}>Subsribe to get important updates</h3>
              <input type='email ' placeholder='Your Email' className={style.input}/>
              {/* <input type='button' placeholder='Subscribe' className={style.subtwo}/> */}
              <input type="submit" value="subscribe" className={style.subtwo}/>
            </div>
            <div className={style.three}>
            <h3 className={style.subs}>follow us</h3>
            <div className={style.iii}>
              <div className={style.ii}>
              <FaDiscord className={style.icons}/>
              </div>
              <div className={style.ii}>
              <FaInstagram className={style.icons}/>
              </div>
              <div className={style.ii}>
              <FaYoutube className={style.icons}/>
              </div>
              
            </div>
            </div>
            <div className={style.four}>
              <p className={style.low}>Call Us</p>
              <a href="tel:12345678989" className={style.num}>+91 12345678989</a>
            </div>
            </div>
            <div className={style.bottomfoot}>
              <hr/>
              <div className={style.lasttwo}>
                <div className={style.copyright}>
                  <p className={style.low}>@ {new Date().getFullYear()} ThapaTechnical. All Rights Reserved</p>
                </div>
                <div className={style.easy}>
                  <p className={style.low}>Privacy Policy</p>
                  <p className={style.low}>Terms & Conditions</p>
                </div>
              </div>
              
            </div>
        </footer>
        
        </>
  )
}

















// const Wrapper = styled.section`
//   .iSIFGq {
//     margin: 0;
//   }

//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 5rem 10rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: translateY(50%);

//     .grid div:last-child {
//       justify-self: end;
//       align-self: center;
//     }
//   }

//   footer {
//     padding: 14rem 0 9rem 0;
//     background-color: ${({ theme }) => theme.colors.footer_bg};
//     h3 {
//       color: ${({ theme }) => theme.colors.hr};
//       margin-bottom: 2.4rem;
//     }
//     p {
//       color: ${({ theme }) => theme.colors.white};
//     }
//     .footer-social--icons {
//       display: flex;
//       gap: 2rem;

//       div {
//         padding: 1rem;
//         border-radius: 50%;
//         border: 2px solid ${({ theme }) => theme.colors.white};

//         .icons {
//           color: ${({ theme }) => theme.colors.white};
//           font-size: 2.4rem;
//           position: relative;
//           cursor: pointer;
//         }
//       }
//     }
//   }

//   .footer-bottom--section {
//     padding-top: 9rem;

//     hr {
//       margin-bottom: 2rem;
//       color: ${({ theme }) => theme.colors.hr};
//       height: 0.1px;
//     }
//   }

  
// `;
export default Footer