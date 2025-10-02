import Register from './components/register'
import Tasks from './components/Tasks'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import BackgroundSetter from './backgroundStyle'
import { ValidationProvider } from './hooks/contextValueUser'
import BackendWarningToast from './Warning'

function App () {
  return (
    <>
      <BrowserRouter>
        <BackgroundSetter />
        <BackendWarningToast />
        <ValidationProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/tasks' element={<Tasks />} />
          </Routes>
        </ValidationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
