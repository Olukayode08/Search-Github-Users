import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <Wrapper>
      <section>
        <h1>Oops!</h1>
        <p>404 - Page not found!</p>
        <Link to='/' className='back-home'>
          <FaHome />
          <h5>BACK TO HOME</h5>
        </Link>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 50px;
    margin: 0;
  }
  p{
    font-size: 30px;
  }
  .back-home{
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 10px;
    background: purple;
    color: #fff;
    padding: 0 15px;
    cursor: pointer;
    font-size: 16px;

  }
  h5{
    padding-left: 5px;
  }
`
export default NotFound