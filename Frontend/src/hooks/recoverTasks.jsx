import { useEffect, useState } from 'react'

// Recover tasks from the server
const Port = import.meta.env.VITE_BACKEND_URL
function useTasks () {
  const [taskObj, setTaskObj] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true)
      const response = await fetch(`${Port}/tasks`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      const data = await response.json()

      if (!response.ok) {
        if (
          data.message === 'Token expired, please login again' ||
          data.message === 'Unauthorized'
        ) {
          window.location.href = '/login'
        } else {
          console.error('Error fetching tasks:', data.message)
        }
        setLoading(false)
        return
      }
      setTaskObj(data)
      setLoading(false)
    }
    fetchTasks()
  }, [])

  return {
    taskObj,
    setTaskObj,
    loading
  }
}

export default useTasks
