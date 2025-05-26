import { useState } from 'react'
// hook for colors and hovers with styles
function useColorsAndTasks () {
  const [Hcolor, setHcolor] = useState(null)
  const [addTask, setAddTask] = useState(null)

  return {
    Hcolor,
    setHcolor,
    addTask,
    setAddTask
  }
}

export default useColorsAndTasks
