import React, { useContext } from 'react'
import { GithubContext } from '../context/Context'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const UserResults = () => {
  const { users, loading } = useContext(GithubContext)

  if (loading) {
    return (
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Loading...
      </h1>
    )
  }
  return (
    <>
      <Wrapper>
        <div className='user-details'>
          {users.map((user) => (
            <div key={user.id}>
              <div className='user-profile'>
                <div>
                  <img src={user.avatar_url} alt='Profile' />
                </div>
                <div className='user-info'>
                  <h2>{user.login}</h2>
                  <Link className='visit-profile'to={`/user/${user.login}`}>Visit Profile</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .user-details {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin: 30px 0;
  }
  .user-profile {
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    img {
      width: 70px;
      border-radius: 100px;
    }
    .user-info {
      padding-left: 15px;
    }
    h2 {
      font-size: 17px;
      margin: 0;
      padding-bottom: 5px;
    }
    .visit-profile {
      text-decoration: none;
      color: grey;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1000px) {
    .user-details {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 800px) {
    .user-details {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 550px) {
    .user-details {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`
export default UserResults
