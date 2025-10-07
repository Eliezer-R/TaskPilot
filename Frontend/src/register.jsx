import AuthForm from './components/FormAuth'
import { useHandleSubmitRegister, useValidation } from './Validation'
import { useValidationContext } from './hooks/contextValueUser'

function Register () {
  const { validationEmail, validationName, validationPassword } = useValidation()
  const { handleSubmitRegister } = useHandleSubmitRegister()
  const { emailError, passwordError, nameError, userNotExists, setEmailError, setPasswordError, setNameError } = useValidationContext()

  const formatErrors = () => {
    setEmailError(false)
    setPasswordError(false)
    setNameError(false)
  }

  return (
    <AuthForm
      type='register'
      onSubmit={handleSubmitRegister}
      validationEmail={validationEmail}
      validationPassword={validationPassword}
      validationName={validationName}
      emailError={emailError}
      passwordError={passwordError}
      nameError={nameError}
      userNotExists={userNotExists}
      formatErrors={formatErrors}
      errorMessage='User already exists'
    />
  )
}

export default Register
