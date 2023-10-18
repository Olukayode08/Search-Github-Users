import React, { useContext } from 'react'
import { UserAlertContext } from '../context/AlertContext'
import { BiCommentError } from 'react-icons/bi'
import styled from 'styled-components'

const Alert = () => {
  const { alert } = useContext(UserAlertContext)
  return (
    alert !== null && (
      <Wrapper>
        <main>
          <p>{alert.type === 'error' && <BiCommentError color='red'  size={30}/>}</p>
          <p className='alert-msg'>{alert.msg}</p>
        </main>
      </Wrapper>
    )
  )
}
const Wrapper = styled.section`
  main {
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 15px;
  }

  .alert-msg {
    padding-left: 15px;
    font-size: 20px;
  }
`
export default Alert
