import { render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Home from '../home'
import Login from '../components/login'
import Register from '../components/register'
import Tasks from '../components/Tasks'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { ValidationProvider } from '../hooks/contextValueUser'

describe('Home testing, the botons login and register', () => {
  // The beforeAech does a fake data fetch simulating the fetch to the server
  beforeEach(() => {
    global.fetch = vi.fn((url) => {
      if (url.endsWith('/tasks')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([])
        })
      }
      // Para login/register
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ token: 'fake', user: { id: 1, email: 'juan@gmail.com' } })
      })
    })
  })

  // The afterEach cleans up fake requests
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('It should show the home', () => {
    render(<ValidationProvider><MemoryRouter><Home /> </MemoryRouter></ValidationProvider>)
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  it('It should show if we are logged in.', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ValidationProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </ValidationProvider>
      </MemoryRouter>
    )

    await userEvent.click(screen.getByText('Login'))

    expect(await screen.findByText('My Task Board')).toBeInTheDocument()
  })

  it('It should show if we are in the register', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ValidationProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </ValidationProvider>
      </MemoryRouter>
    )

    await userEvent.click(screen.getByText('Register'))

    expect(await screen.findByText('My Task Board')).toBeInTheDocument()
  })

  it('It should show if the register inputs have anything', async () => {
    render(
      <MemoryRouter initialEntries={['/register']}>
        <ValidationProvider>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/tasks' element={<Tasks />} />
          </Routes>
        </ValidationProvider>
      </MemoryRouter>
    )

    await userEvent.type(screen.getByLabelText(/Name/i), 'Juan')
    await userEvent.type(screen.getByLabelText(/Email/i), 'juan@gmail.com')
    await userEvent.type(screen.getByLabelText(/Password/i), '123456')

    expect(screen.getByLabelText(/name/i)).toHaveValue('Juan')
    expect(screen.getByLabelText(/email/i)).toHaveValue('juan@gmail.com')
    expect(screen.getByLabelText(/password/i)).toHaveValue('123456')
  })

  it('Register: Navigate to Tasks when clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/register']}>
        <ValidationProvider>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/tasks' element={<Tasks />} />
          </Routes>
        </ValidationProvider>
      </MemoryRouter>
    )
    await userEvent.type(screen.getByLabelText(/Name/i), 'Juan')
    await userEvent.type(screen.getByLabelText(/Email/i), 'juanito@gmail.com')
    await userEvent.type(screen.getByLabelText(/Password/i), '123456')
    await userEvent.click(screen.getByText('Continuar'))
    expect(await screen.findByText('Tasks to keep organised')).toBeInTheDocument()
  })

  it('It should show if the login inputs have anything', async () => {
    render(
      <MemoryRouter initialEntries={['/Login']}>
        <ValidationProvider>
          <Routes>
            <Route path='/Login' element={<Login />} />
            <Route path='/tasks' element={<Tasks />} />
          </Routes>
        </ValidationProvider>
      </MemoryRouter>
    )

    await userEvent.type(screen.getByLabelText(/Email/i), 'juan@gmail.com')
    await userEvent.type(screen.getByLabelText(/Password/i), '123456')

    expect(screen.getByLabelText(/email/i)).toHaveValue('juan@gmail.com')
    expect(screen.getByLabelText(/password/i)).toHaveValue('123456')
  })

  it('login: navigate to Tasks by clicking', async () => {
    render(
      <MemoryRouter initialEntries={['/Login']}>
        <ValidationProvider>
          <Routes>
            <Route path='/Login' element={<Login />} />
            <Route path='/tasks' element={<Tasks />} />
          </Routes>
        </ValidationProvider>
      </MemoryRouter>
    )

    await userEvent.type(screen.getByLabelText(/Email/i), 'juan@gmail.com')
    await userEvent.type(screen.getByLabelText(/Password/i), '123456')
    await userEvent.click(screen.getByText('Continuar'))
    expect(await screen.findByText('Tasks to keep organised')).toBeInTheDocument()
  })
})
