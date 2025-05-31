import Propery from './properyL'
import { useHandleSubmitLogin, useValidation } from '../Validation'
import { useValidationContext } from '../hooks/contextValueUser'

function Login () {
  const { validationEmail, validationPassword } = useValidation()
  const { handleSubmitLogin } = useHandleSubmitLogin()
  const { emailError, passwordError, userNotExists } = useValidationContext()

  return (
    <div className='login-page'>
      <section className='Login-content'>
        {userNotExists && <span className='UserExists'>User does not exist</span>}
        <div className='image-login-content'>
          <img src='/resources/Logo.svg' alt='logo' />
          <span className='logo'>My Task Board</span>
        </div>
        <form onSubmit={handleSubmitLogin}>
          <div className='inputs-content'>
            <label htmlFor='name-input'>Email:</label>
            <input
              type='text'
              name='name'
              id='name-input'
              autoComplete='email'
              onChange={(e) => validationEmail(e.target.value)}
            />
            {emailError && <span className='validatLogin'>Please enter a valid email</span>}
          </div>

          <div className='inputs-content'>
            <label htmlFor='pass-input'>Password:</label>
            <input
              type='text'
              name='password'
              id='pass-input'
              autoComplete='current-password'
              onChange={(e) => validationPassword(e.target.value)}
            />
            {passwordError && <span className='validatLogin'>Please enter a password</span>}
          </div>
          <div className='content-button-login'>
            <button type='submit'>Continuar</button>
          </div>
        </form>
        <div className='content-buttons'>
          <Propery methodName='register'>
            <h5>Register</h5>
            <img src='/resources/register-icon.svg' alt='register' />
          </Propery>
          <Propery methodName='home'>
            <h5>Home</h5>
            <img src='/resources/home.svg' alt='home' />
          </Propery>
        </div>
      </section>
    </div>
  )
}

export default Login
