import React from 'react'

export const LoginContext = React.createContext()

export function LoginContextProvider({children}) {
  const [user, setUser] = React.useState(null)
  return (
    <LoginContext.Provider value={{user, setUser}}>{children}</LoginContext.Provider>
  )
}

export default LoginContext