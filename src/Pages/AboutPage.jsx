import React from 'react'
import styled from 'styled-components'

const AboutPage = () => {
  return (
    <Wrapper>
      <div className='about-page'>
        <h1>Github Finder</h1>
        <p>
          A React app to searcch Github profiles and see profile details. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos unde
          ad officia porro saepe.
        </p>
        <p>Developed By: Olukayode Azeez</p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .about-page {
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 30px;
    opacity: 0.89;
    margin: 7px 0;
  }
  p {
    margin: 5px 0;
  }
`

export default AboutPage
