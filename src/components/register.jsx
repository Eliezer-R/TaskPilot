import Propery from './properyL'
import { useHandleSubmitRegister, useValidation } from '../Validation'
import { useValidationContext } from '../hooks/contextValueUser'
function Register () {
  const { validationEmail, validationName, validationPassword } = useValidation()
  const { handleSubmitRegister } = useHandleSubmitRegister()
  const { emailError, passwordError, nameError, userNotExists } = useValidationContext()

  return (
    <section className='Login-content'>
      {userNotExists && <span className='UserExists'>User already exists</span>}
      <div className='image-login-content'>
        <img src='/resources/Logo.svg' alt='logo' />
        <span className='logo'>My Task Board</span>
      </div>
      <form onSubmit={handleSubmitRegister}>
        <div className='inputs-content'>
          <label htmlFor='name-input'>Name:</label>
          <input
            type='text'
            name='name'
            id='name-input'
            autoComplete='name'
            onChange={(e) => validationName(e.target.value)}
          />
          {nameError && <span className='validatLogin'>Please enter a name or a longer name correct!</span>}
        </div>
        <div className='inputs-content'>
          <label htmlFor='email-input'>Email:</label>
          <input
            type='text'
            name='email'
            id='email-input'
            autoComplete='email'
            onChange={(e) => validationEmail(e.target.value)}
          />
          {emailError && <span className='validatLogin'>Please enter a valid email!</span>}
        </div>

        <div className='inputs-content'>
          <label htmlFor='pass-input'>Password:</label>
          <input
            type='text'
            name='password'
            id='pass-input'
            autoComplete='password'
            onChange={(e) => validationPassword(e.target.value)}
          />
          {passwordError && <span className='validatLogin'>Please enter a password!</span>}
        </div>
        <div className='content-button-login'>
          <button type='submit'>Continuar</button>
        </div>
      </form>
      <div className='content-buttons'>
        <Propery methodName='login'>
          <h5>Login</h5>
          <img src='/resources/password-user.svg' alt='login' />
        </Propery>
        <Propery methodName='home'>
          <h5>Home</h5>
          <img src='/resources/home.svg' alt='home' />
        </Propery>
      </div>
    </section>
  )
}

export default Register
