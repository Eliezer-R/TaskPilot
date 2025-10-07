import AuthForm from './components/FormAuth'
import { useHandleSubmitLogin, useValidation } from './Validation'
import { useValidationContext } from './hooks/contextValueUser'

function Login () {
  const { validationEmail, validationPassword } = useValidation()
  const { handleSubmitLogin } = useHandleSubmitLogin()
  const { emailError, passwordError, userNotExists, setPasswordError, setEmailError } = useValidationContext()

  const formatErrors = () => {
    setEmailError(false)
    setPasswordError(false)
  }

  return (
    <AuthForm
      type='login'
      onSubmit={handleSubmitLogin}
      validationEmail={validationEmail}
      validationPassword={validationPassword}
      emailError={emailError}
      passwordError={passwordError}
      userNotExists={userNotExists}
      formatErrors={formatErrors}
    />
  )
}

export default Login
