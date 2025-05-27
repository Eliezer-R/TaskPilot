import { useNavigate } from 'react-router-dom'
import { useValidationContext } from './hooks/contextValueUser'
// This file contains the validation logic and form submission handlers for user registration and login
// It uses React context to manage form state and validation errors
function useValidation () {
  const {
    setName,
    setNameError,
    setEmail,
    setEmailError,
    setPassword,
    setPasswordError
  } = useValidationContext()

  const validationName = (value) => {
    setName(value)
    const hasError = value === '' || value.length < 2
    setNameError(hasError)
    return !hasError
  }

  const validationEmail = (value) => {
    setEmail(value)
    const isValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value)
    setEmailError(!isValid)
    return isValid
  }

  const validationPassword = (value) => {
    setPassword(value)
    const hasError = value === '' || value.length < 6
    setPasswordError(hasError)
    return !hasError
  }

  return {
    validationEmail,
    validationName,
    validationPassword
  }
}

const sendRequest = async (url, method, body, navigate, setUserNotExists) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Error:', errorData.message)
      setUserNotExists(true)
      return false
    }

    setUserNotExists(false)
    navigate('/tasks')
    return true
  } catch (error) {
    console.error('Unexpected error:', error)
    return false
  }
}

function useHandleSubmitRegister () {
  const {
    name, email, password,
    setName, setEmail, setPassword,
    setNameError, setEmailError, setPasswordError, setUserNotExists
  } = useValidationContext()
  const { validationEmail, validationName, validationPassword } = useValidation()
  const navigate = useNavigate()

  const handleSubmitRegister = async (e) => {
    e.preventDefault()
    const isNameValid = validationName(name)
    const isEmailValid = validationEmail(email)
    const isPasswordValid = validationPassword(password)

    if (!isNameValid || !isEmailValid || !isPasswordValid) {
      console.error('Invalid input')
      return
    }

    const success = await sendRequest(
      'http://localhost:3000/register',
      'POST',
      { name, email, password },
      navigate,
      setUserNotExists)

    // If the request was successful, reset the form fields
    if (success) {
      setName('')
      setEmail('')
      setPassword('')
      setNameError(false)
      setEmailError(false)
      setPasswordError(false)
    }
  }

  return {
    handleSubmitRegister
  }
}

function useHandleSubmitLogin () {
  const {
    email, password,
    setEmail, setPassword,
    setEmailError, setPasswordError, setUserNotExists
  } = useValidationContext()
  const { validationEmail, validationPassword } = useValidation()

  const navigate = useNavigate()

  const handleSubmitLogin = async (e) => {
    e.preventDefault()
    const isEmailValid = validationEmail(email)
    const isPasswordValid = validationPassword(password)

    if (!isEmailValid || !isPasswordValid) {
      console.error('Invalid email or password')
      return
    }

    const success = await sendRequest(
      'http://localhost:3000/Login',
      'POST',
      { email, password },
      navigate,
      setUserNotExists)

    // If the request was successful, reset the form fields
    if (success) {
      setEmail('')
      setPassword('')
      setEmailError(false)
      setPasswordError(false)
    }
  }

  return { handleSubmitLogin }
}

export { useHandleSubmitRegister, useHandleSubmitLogin, useValidation }
