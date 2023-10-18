import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/Context'
import { UserAlertContext } from '../context/AlertContext'

const Usersearch = () => {
  const [text, setText] = useState('')

  const { users, clearUsers, searchUsers } =
    useContext(GithubContext)
    const {setAlert} = useContext(UserAlertContext)

  // Submit user infomation
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please enter something', 'error')
    } else {
      // Search users
      searchUsers(text)
      setText('')
    }
  }
  return (
    <>
      <Wrapper>
        <section>
          <div className='search-user'>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  value={text}
                  onChange={handleChange}
                  placeholder='Search'
                />
                <button type='submit' className='send-btn'>
                  GO
                </button>
              </form>
            </div>
            {users.length > 0 && (
              <button onClick={clearUsers} className='clear-btn'>
                CLEAR
              </button>
            )}
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .search-user {
    display: flex;
    align-items: center;
  }
  input {
    width: 430px;
    padding-left: 20px;
    height: 60px;
    background: #fff;
    border: none;
    outline: none;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  .send-btn {
    border: none;
    background: #272626;
    color: #fff;
    height: 65px;
    width: 90px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
  }
  .clear-btn {
    margin-left: 30px;
    font-size: 16px;
    background: none;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    input {
      width: 370px;
    }
  }

  @media screen and (max-width: 670px) {
    .search-user {
      flex-direction: column;
    }
    input {
      width: 300px;
    }
    .clear-btn {
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 450px) {
    input {
      width: 200px;
    }
    .send-btn {
      width: 60px;
    }
  }
`
export default Usersearch
