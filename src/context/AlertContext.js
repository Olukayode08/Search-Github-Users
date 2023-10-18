import React, {useReducer, createContext} from 'react'
import AlertReducer from '../reducers/AlertReducer'


const UserAlertContext = createContext()

const AlertContext = ({children}) => {

    const initialState = null
    const [state, dispatch] = useReducer(AlertReducer, initialState)
  
    // set Alert
// Whatever is passed into the message and type will be put into setAlert
    const setAlert = (msg, type)=>{
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type},
        })
        setTimeout(()=>dispatch({
            type: 'REMOVE_ALERT'
        }), 3000)
    }
  
    return (
    <>
    <UserAlertContext.Provider value={{
        alert: state,
        setAlert

    }}>
        {children}
    </UserAlertContext.Provider>
    </>
  )
}

export { AlertContext, UserAlertContext }