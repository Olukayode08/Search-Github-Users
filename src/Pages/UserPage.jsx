import React, { useEffect, useContext } from 'react'
import { GithubContext } from '../context/Context'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserStats from '../components/UserStats'
import UserRepos from '../components/UserRepos'

const UserPage = () => {
  const { getUser, user, loading } = useContext(GithubContext)
  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,

    hireable,
  } = user

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
        <div>
          <Link to='/' className='back-home'>
            BACK TO SEARCH
          </Link>
        </div>
        <div>
          <div className='user-details'>
            <div className='user-info'>
              <img src={avatar_url} alt='User_Avatar' />
              <h2 className='user-name'>{name}</h2>
              <p className='user-login'>{login}</p>
            </div>
            <div className='user'>
              <div className='user-detail'>
                <h1>{name}</h1>
                <p className='user-type'>{type}</p>
                {hireable && <div className='hire-type'>Hireable</div>}
              </div>
              <div>
                <p className='user-bio'>{bio}</p>
                <a
                  className='user-github'
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                >
                  Visit Github Profile
                </a>
                <div className='user-blogs'>
                  <div>
                    {location && (
                      <div className='user-location'>
                        <div className='user-heading'>Location</div>

                        <div>{location}</div>
                      </div>
                    )}
                  </div>
                  <div>
                    {blog && (
                      <div className='user-location'>
                        <div className='user-heading'> Website</div>
                        <a
                          href={`https://${blog}`}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {blog}
                        </a>
                      </div>
                    )}
                  </div>
                  <div>
                    {twitter_username && (
                      <div className='user-location'>
                        <div className='user-heading'> Twitter</div>
                        <a
                          href={`https://twitter.com/${twitter_username}`}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {twitter_username}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <UserStats />
          <UserRepos />
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  a {
    cursor: pointer;
    color: #fff;
    text-decoration: none;
  }
  .back-home {
    font-size: 14px;
  }
  .user-details {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    padding: 30px;
  }
  .user {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    height: fit-content;
  }
  .user-detail {
    display: flex;
  }
  .user-info {
    position: relative;
    width: 45%;
  }
  img {
    width: 80%;
    opacity: 0.43;
  }
  .user-login,
  .user-name {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
  .user-login {
    bottom: 10px;
  }
  p,
  h1 {
    margin: 0;
  }
  .user-type {
    color: green;
    background: #454545;
    padding: 3px 7px;
    border-radius: 5px;
    margin: 0 15px;
  }
  .hire-type {
    background: #6363f7;
    padding: 3px 7px;
    border-radius: 5px;
  }
  .user-bio {
    margin: 20px 0 35px 0;
  }

  .user-github {
    text-transform: uppercase;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #fff;
  }
  .user-github:hover {
    background-color: #fff;
    color: #454545;
    transition: all 0.3s;
  }
  .user-location {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-right: 45px;
  }
  .user-heading {
    margin: 15px 0 5px 0;
    color: #8a8888;
  }
  .user-blogs {
    display: flex;
  }
  @media screen and (max-width: 1050px) {
    .user-info {
      width: 70%;
    }
    img {
      width: 90%;
    }
  }
  @media screen and (max-width: 800px) {
    .user-info {
      width: 90%;
    }
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 800px) {
    .user-info {
      display: none;
    }
    .user-blogs {
      flex-wrap: wrap;
    }
    .user {
      margin-left: 0;
    }
  }
`
export default UserPage
