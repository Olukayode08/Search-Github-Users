import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { GithubContext } from '../context/Context'

const UserStats = () => {
  const { user } = useContext(GithubContext)

  const { followers, following, public_repos, public_gists } = user
  return (
    <>
      <Wrapper>
        <div className='user-stat'>
          <div className='stats'>
            <div>
              <FaUsers color='purple' size={50} />
            </div>
            <div>
              <div className='user-heading'>Followers</div>
              <div className='follower-count'>{followers}</div>
            </div>
          </div>
          <div className='stats'>
            <div>
              <FaUserFriends color='purple' size={50} />
            </div>
            <div>
              <div className='user-heading'>Following</div>
              <div className='follower-count'>{following}</div>
            </div>
          </div>
          <div className='stats'>
            <div>
              <FaCodepen color='purple' size={50} />
            </div>
            <div>
              <div className='user-heading'>Public Repos</div>
              <div className='follower-count'>{public_repos}</div>
            </div>
          </div>
          <div className='stats'>
            <div>
              <FaStore color='purple' size={50} />
            </div>
            <div>
              <div className='user-heading'>Public Gists</div>
              <div className='follower-count'>{public_gists}</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .user-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 30px 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .stats {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 250px;
    margin: 20px;
    flex-direction: row-reverse;
    /* border: 1px solid yellow; */
  }
  .user-heading {
    color: #8a8888;
  }
  .follower-count {
    font-size: 30px;
    margin: 0;
    font-weight: 700;
  }
  @media screen and (max-width: 800px) {
    .user-stat {
      flex-wrap: wrap;
    }
    .stats {
      margin: 10px 0;
    }
  }
`
export default UserStats
