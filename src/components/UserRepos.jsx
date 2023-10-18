import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../context/Context'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

const UserRepos = () => {
  const { getUserRepos, repos } = useContext(GithubContext)

  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repos
  const params = useParams()

  useEffect(() => {
    getUserRepos(params.login)
  }, [])
  return (
    <Wrapper>
      <div className='user-repos'>
        <h2>Latest Repositories</h2>
        {repos.map((repo) => (
          <div key={repo.id} className='user-repo'>
            <a target='_blank' rel='noreferrer' href={repo.html_url}>
              <FaLink className='icon' size={18} />
              {repo.name}
            </a>
            <p className='repo-desc'>{repo.description}</p>
            <div className='repo-stats'>
              <div className='watchers_count eye-count'>
                <FaEye size={18} className='icon' />
                {repo.watchers_count}
              </div>
              <div className='watchers_count star-count'>
                <FaStar size={18} className='icon' />
                {repo.stargazers_count}
              </div>
              <div className='watchers_count info-count'>
                <FaInfo size={18} className='icon' />
                {repo.open_issues}
              </div>
              <div className='watchers_count forks-count'>
                <FaUtensils size={18} className='icon' />
                {repo.forks}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .user-repo {
    display: flex;
    flex-direction: column;
    justify-content: left;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    padding: 30px;
  }
  .icon {
    margin-right: 7px;
  }
  a {
    font-size: 20px;
  }
  .repo-desc {
    margin: 20px 0;
  }
  .repo-stats {
    display: flex;
  }
  .watchers_count {
    display: flex;
    align-items: center;
    max-width: 50px;
    padding: 7px 12px;
    margin: 0 10px;
    border-radius: 20px;
  }
  .eye-count {
    margin-left: 0;
    background: #5252eb;
  }
  .star-count {
    background: #023802;
  }
  .info-count {
    background: #ed5858;
  }
  .forks-count {
    background: #e7e787;
  }
`
export default UserRepos
