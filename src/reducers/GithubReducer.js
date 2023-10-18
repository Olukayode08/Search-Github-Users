const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        // Return the current state or Spread across anything in that is currently in the state
        ...state,
        users: action.payload,
        loading: false,
      }
    case 'GET_USER':
      return {
        // Return the current state or Spread across anything in that is currently in the state
        ...state,
        user: action.payload,
        loading: false,
      }

    case 'SET_LOADING':
      return {
        ...state,
        loading: false
      }
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      }
    default:
      return state
  }
}

export default GithubReducer
