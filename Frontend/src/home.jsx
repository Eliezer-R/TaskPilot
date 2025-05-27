import Propery from './components/properyL'

function Home () {
  return (
    <div className='home-page'>
      <div className='home-header'>
        <div className='home-logo'>
          <img src='/resources/Logo.svg' alt='logo' />
          <span>My Task Board</span>
          <img src='/resources/Edit_duotone.svg' alt='logo' />
        </div>
        <Propery methodName='register'>
          <div className='register-boton'>
            <h5>Register</h5>
            <img src='/resources/register-icon.svg' alt='register' />
          </div>
        </Propery>
        <Propery methodName='login'>
          <div className='login-boton'>
            <h5>Login</h5>
            <img src='/resources/password-user.svg' alt='logout' />
          </div>
        </Propery>
      </div>
      <div className='home-content'>
        <h1>Welcome to the tasks board</h1>
        <p>Welcome everyone to the notes application. This application can only be accessed through login or registration.
          This is done so that we can test the endpoints.
        </p>
        <div className='home-image'>
          <img src='../design/Mobile_412px.jpg' alt='design' className='img-design' />
        </div>
      </div>
    </div>
  )
}

export default Home
