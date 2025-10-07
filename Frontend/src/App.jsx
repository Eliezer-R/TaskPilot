import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ValidationProvider } from './hooks/contextValueUser'


const LazyHome = lazy(() => import('./home'))
const LazyRegister = lazy(() => import('./register'))
const LazyLogin = lazy(() => import('./login'))
const LazyTasks = lazy(() => import('./components/Tasks'))

function App() {
  return (
    <BrowserRouter>
      <ValidationProvider>
        <Suspense
          fallback={
            <div className="loading-screen">
              <div className="loading-spinner" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/register" element={<LazyRegister />} />
            <Route path="/login" element={<LazyLogin />} />
            <Route path="/tasks" element={<LazyTasks />} />
          </Routes>
        </Suspense>
      </ValidationProvider>
    </BrowserRouter>
  )
}

export default App
