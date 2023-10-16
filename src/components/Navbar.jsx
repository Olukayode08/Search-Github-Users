import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className='logo'>
          <FaGithub className='github-logo' />
          <Link to='/' className='link'>
            Github Finder
          </Link>
        </div>
        <div className='pages'>
          <Link className='home-page' to='/'>
            HOME
          </Link>
          <Link className='about-page' to='/about'>
            ABOUT
          </Link>
        </div>
      </nav>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: #301934;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 85%;
    margin: auto;
  }
  .logo {
    display: flex;
    align-items: center;
    .github-logo {
      font-size: 30px;
    }
    .link {
      text-decoration: none;
      color: #fff;
      padding-left: 10px;
      font-weight: 500;
    }
  }
  .pages {
    display: flex;
    justify-content: space-between;
  }
  .about-page,
  .home-page {
    color: #fff;
    text-decoration: none;
    padding: 15px 15px;
    margin: 0 10px;
    cursor: pointer;
  }
  .home-page:hover {
    background-color: #808080;
    border-radius: 10px;
  }
  .about-page:hover {
    background-color: #808080;
    border-radius: 10px;
  }
`

export default Navbar
