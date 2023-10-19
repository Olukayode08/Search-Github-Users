import React, { createContext, useReducer } from 'react'
import GithubReducer from '../reducers/GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

const Context = ({ children }) => {
  // Using Usestate

  //   const [users, setUser] = useState([])
  //   const [loading, setLoading] = useState(true)

  // Use reducer instead of use state
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(GithubReducer, initialState)

  // When we call search users we pass in the text
  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    })
    setLoading()
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    })
    const { items } = await response.json()
    // Using Usestate
    // setUser(data)
    // setLoading(false)

    // Use reducer instead of use state
    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  // When we call search users we pass in the text
  const getUser = async (login) => {
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    })
    if (response.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await response.json()
      // Using Usestate
      // setUser(data)
      // setLoading(false)

      // Use reducer instead of use state
      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }
  const getUserRepos = async (login) => {
    setLoading()
        const params = new URLSearchParams({
          sort: "created",
          per_page: 10,
        })
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    })
    if (response.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await response.json()
      // Using Usestate
      // setUser(data)
      // setLoading(false)

      // Use reducer instead of use state
      dispatch({
        type: 'GET_REPOS',
        payload: data,
      })
    }
  }
  //   Setloading function would be use multiple times
  //   Which is why we are doing the dispatch seperately
  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    })
  // CLEAR USERS FROM STATE
  const clearUsers = () =>
    dispatch({
      type: 'CLEAR_USERS',
    })

  return (
    <>
      <GithubContext.Provider
        value={{
          //   users,
          //   setUser,
          //   loading,
          //   setLoading,
          users: state.users,
          loading: state.loading,
          searchUsers,
          clearUsers,
          getUser,
          user: state.user,
          repos: state.repos,
          getUserRepos,
        }}
      >
        {children}
      </GithubContext.Provider>
    </>
  )
}

export { Context, GithubContext }
