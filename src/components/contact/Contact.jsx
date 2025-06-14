import React from 'react'
import styled from 'styled-components';
const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    // width:100%;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .send-btn{
              height:50px;
              width:120px;
              background-color:rgb(77, 188, 219);
              border:none;
              border-radius:10px;
              align-content:center;
              margin-left:20rem;
        }
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
              
          }
        }
      }
    }
  `;


  return (
    <Wrapper>
      <h3 className='common-heading'>Contact Us</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9107584161575!2d73.8160199!3d18.623083299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b860d63876d1%3A0x9bccd5081468bc36!2sDr.%20D.%20Y.%20Patil%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1736336294055!5m2!1sen!2sin" width="100%" height="350" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form className='contact-inputs'>
            <input type="text"  placeholder='Username'  />
            <input type='email' placeholder='E-mail'/>
            <textarea name='msg' placeholder='Enter Your Message'></textarea>
            <button className='send-btn'> Send</button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact