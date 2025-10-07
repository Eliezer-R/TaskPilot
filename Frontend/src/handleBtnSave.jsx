function useSaveClick ({ objId, taskData, setTaskObj, setModalTask }) {
  const handleSabeClick = async () => {
    try {
      // We check if the task is null, it means that we are creating a new task, if not we are updating a task
      if (objId.task_id !== null && objId.task_id !== undefined) {
        await UpdateTasks(objId, taskData, setTaskObj)
      } else {
        await SaveTasks(taskData, setTaskObj)
      }
      setModalTask(false)
    } catch (error) {
      console.error('Error saving task:', error)
    }
  }

  return { handleSabeClick }
}

const emptyTask = async (taskData) => {
  const emptyTitle = taskData.name === '' ? 'Sin título' : taskData.name
  const emptyIcon = taskData.icon === null ? 0 : taskData.icon
  const emptyStatus = taskData.status === null ? 0 : taskData.status
  taskData.name = emptyTitle
  taskData.icon = emptyIcon
  taskData.status = emptyStatus
}
const Port = import.meta.env.VITE_LOCAL_BACKEND_URL

async function UpdateTasks (objId, taskData, setTaskObj) {
  await emptyTask(taskData)

  const response = await fetch(`${Port}/tasks/${objId.task_id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData),
    credentials: 'include'
  })

  if (response.ok) {
    const updatedTask = await response.json()
    setTaskObj((prev) => {
      // Here what we do is filter the previous task and put the new updated one
      const filter = prev.filter((task) => task.task_id !== objId.task_id)
      return [...filter, updatedTask].sort((a, b) => a.task_id - b.task_id)
    }
    )
  } else {
    console.error('Error updating task')
  }
}

async function SaveTasks (taskData, setTaskObj) {
  await emptyTask(taskData)

  const response = await fetch(`${Port}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData),
    credentials: 'include'
  })

  if (response.ok) {
    const newTask = await response.json()

    setTaskObj((prev) => [...prev, newTask])
  } else {
    console.error('Error creating task')
  }
}

export default useSaveClick
