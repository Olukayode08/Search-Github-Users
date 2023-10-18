const AlertReducer = (state, action) => {

    switch (action.type) {
        case 'SET_ALERT':
            // Only one piece of state so we return the action.payload which is (msg, type)
            return action.payload
        case 'REMOVE_ALERT':
            return null
      default:
        return state
    }

}

export default AlertReducer