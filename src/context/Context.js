import React, { createContext, useState, useEffect, useReducer } from 'react'
import GithubReducer from '../reducers/GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const Context = ({ children }) => {
  // Using Usestate

  //   const [users, setUser] = useState([])
  //   const [loading, setLoading] = useState(true)

  // Use reducer instead of use state
  const initialState = {
    users: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(GithubReducer, initialState)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    const data = await response.json()
    // Using Usestate
    // setUser(data)
    // setLoading(false)

    // Use reducer instead of use state
    dispatch({
      type: 'GET_USERS',
      payload: data,
    })
  }

  //   Setloading function would be use multiple times
  //   Which is why we are doing the dispatch seperately
  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
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
        }}
      >
        {children}
      </GithubContext.Provider>
    </>
  )
}

export { Context, GithubContext }
