import React from 'react'
import { FaGithub } from 'react-icons/fa'
import styled from 'styled-components'
// Gets the current year
const footerYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className='developer'>
          <p>Olukayode</p>
          <FaGithub className='github-logo' />
        </div>
        <p>Copyright &copy; {footerYear}</p>
      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .developer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    margin: 3px 0;
  }
  .github-logo {
    font-size: 20px;
    padding-left: 5px;
  }
`
export default Footer