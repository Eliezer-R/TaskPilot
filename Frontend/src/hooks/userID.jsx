import { useEffect, useState } from 'react'

// userID hook to manage the state of a task object
// It initializes the task data and updates it when the objId changes
function useObjId ({ objId }) {
  const [taskData, setTaskData] = useState({
    name: '',
    description: '',
    icon: 0,
    status: null
  })

  useEffect(() => {
    if (objId && objId.task_id !== 0) {
      setTaskData({
        name: objId.title,
        description: objId.description,
        icon: objId.icon,
        status: objId.status
      })
    }
  }, [objId])

  return {
    taskData,
    setTaskData
  }
}

export default useObjId
