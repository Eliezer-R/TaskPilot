import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

function AuthForm ({
  type = 'login',
  onSubmit,
  validationEmail,
  validationPassword,
  validationName,
  emailError,
  passwordError,
  nameError,
  userNotExists,
  errorMessage,
  formatErrors
}) {
  const isRegister = type === 'register'
  const [showPassword, setShowPassword] = useState(false)
  const [showError, setShowError] = useState(false)

  const formRef = useRef(null)

  // Show error only when userNotExists changes
  useEffect(() => {
    setShowError(userNotExists)
  }, [userNotExists])

  // Clear form and errors when type changes
  useEffect(() => {
    setShowError(false)
    formatErrors()
    if (formRef.current) {
      formRef.current.reset() // Resets all form inputs
    }
  }, [type])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='login-page'>
      <div className='bg-animated'>
        <div className='bg-circle bg-circle-1' />
        <div className='bg-circle bg-circle-2' />
        <div className='bg-circle bg-circle-3' />
      </div>

      <div className='login-content'>
        <div className='login-card-wrapper'>
          <div className='login-card-blur' />
          <div className='login-card'>
            <div className='card-decoration-1' />
            <div className='card-decoration-2' />

            {showError && (
              <div className='error-message'>
                {errorMessage || (isRegister ? 'User already exists' : 'User does not exist')}
              </div>
            )}

            <div className='logo-container'>
              <div className='logo-icon-wrapper'>
                <div className='logo-icon-blur' />
                <div className='logo-icon-2'>
                  <svg viewBox='0 0 24 24' width='40' height='40' fill='none'>
                    <path d='M3 7L3 17L12 22L21 17V7L12 2L3 7Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M3 7L12 12M12 12L21 7M12 12V22' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </div>
              </div>
              <h1 className='logo-title-2'>My Task Board</h1>
              <p className='logo-subtitle'>{isRegister ? 'Create your account' : 'Welcome back'}</p>
            </div>

            <form ref={formRef} onSubmit={onSubmit} className='login-form'>
              {isRegister && (
                <div className='form-group'>
                  <label className='form-label' htmlFor='name-input'>Name:</label>
                  <input
                    type='text'
                    name='name'
                    id='name-input'
                    className='form-input'
                    autoComplete='name'
                    placeholder='Enter your name'
                    onChange={(e) => validationName(e.target.value)}
                  />
                  {nameError && (
                    <span className='validation-error'>
                      Please enter a name or a longer name correct!
                    </span>
                  )}
                </div>
              )}

              <div className='form-group'>
                <label className='form-label' htmlFor='email-input'>Email:</label>
                <input
                  type='text'
                  name={isRegister ? 'email' : 'name'}
                  id='email-input'
                  className='form-input'
                  autoComplete='email'
                  placeholder='Enter your email'
                  onChange={(e) => validationEmail(e.target.value)}
                />
                {emailError && (
                  <span className='validation-error'>
                    Please enter a valid email{isRegister ? '!' : ''}
                  </span>
                )}
              </div>

              <div className='form-group'>
                <label className='form-label' htmlFor='password-input'>Password:</label>
                <div className='password-input-wrapper'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    id='password-input'
                    className='form-input password-input'
                    autoComplete='current-password'
                    placeholder='Enter your password'
                    onChange={(e) => validationPassword(e.target.value)}
                  />
                  <button
                    type='button'
                    className='password-toggle-btn'
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? 'Show password' : 'Hide password'}
                  >
                    {showPassword
                      ? (
                        <svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' strokeWidth='2'>
                          <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                          <circle cx='12' cy='12' r='3' />
                        </svg>
                        )
                      : (
                        <svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' strokeWidth='2'>
                          <path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24' />
                          <line x1='1' y1='1' x2='23' y2='23' />
                        </svg>
                        )}
                  </button>
                </div>
                {passwordError && (
                  <span className='validation-error'>
                    Please enter a password{isRegister ? '!' : ''}
                  </span>
                )}
              </div>

              <div className='submit-button-wrapper'>
                <button type='submit' className='submit-button'>
                  {isRegister ? 'Create Account' : 'Continuar'}
                </button>
              </div>
            </form>

            <div className='action-buttons'>
              <Link to={isRegister ? '/login' : '/register'}>
                <button className='action-btn'>
                  <span>{isRegister ? 'Login' : 'Register'}</span>
                  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                    {isRegister
                      ? (
                        <>
                          <path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4' />
                          <polyline points='10 17 15 12 10 7' />
                          <line x1='15' y1='12' x2='3' y2='12' />
                        </>
                        )
                      : (
                        <>
                          <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                          <circle cx='9' cy='7' r='4' />
                          <line x1='19' y1='8' x2='19' y2='14' />
                          <line x1='22' y1='11' x2='16' y2='11' />
                        </>
                        )}
                  </svg>
                </button>
              </Link>
              <Link to='/'>
                <button className='action-btn'>
                  <span>Home</span>
                  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' width='20' height='20'>
                    <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                    <polyline points='9 22 9 12 15 12 15 22' />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
