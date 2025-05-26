import { createContext, useContext, useState } from 'react'

const ValidationContext = createContext()

export function ValidationProvider ({ children }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [userNotExists, setUserNotExists] = useState(false)

  const value = {
    setName,
    setEmail,
    setPassword,
    setNameError,
    setEmailError,
    setPasswordError,
    setUserNotExists,
    name,
    email,
    password,
    nameError,
    emailError,
    passwordError,
    userNotExists
  }

  return (
    <ValidationContext.Provider value={value}>
      {children}
    </ValidationContext.Provider>
  )
}

export const useValidationContext = () => useContext(ValidationContext)
