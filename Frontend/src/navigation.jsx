import { useNavigate } from 'react-router-dom'
import { useValidationContext } from './hooks/contextValueUser'
// Navigation between pages, Login, register, logout and home
const Port = import.meta.env.VITE_BACKEND_URL || 3000
function useNavigaten (methodName) {
  const navigate = useNavigate()
  const {
    setUserNotExists,
    setNameError,
    setEmailError,
    setPasswordError,
    setName,
    setEmail,
    setPassword
  } = useValidationContext()

  // reset all values while navigating to a new page
  const setDefaultValues = (name) => {
    setUserNotExists(false)
    setNameError(false)
    setEmailError(false)
    setPasswordError(false)
    setName('')
    setEmail('')
    setPassword('')
    navigate(`/${name}`)
  }

  const HandleGo = async () => {
    switch (methodName) {
      case 'logout':
        await fetch(`${Port}/logout`, {
          method: 'POST',
          credentials: 'include'
        })
        navigate('/')

        break

      case 'register':
        setDefaultValues('register')

        break
      case 'login':
        setDefaultValues('Login')

        break

      case 'home':
        navigate('/')

        break
    }
  }

  return {
    HandleGo
  }
}

export default useNavigaten
