const Port = import.meta.env.VITE_LOCAL_BACKEND_URL

function useDeleteClick ({ objId, setTaskObj, setModalTask }) {
  const handleDeleteClick = async () => {
    // Check if objId.task_id is defined before proceeding
    if (objId.task_id === undefined || objId.task_id === null) return
    try {
      const response = await fetch(`${Port}/tasks/${objId.task_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })

      if (response.ok) {
        setTaskObj((prev) => prev.filter((task) => task.task_id !== objId.task_id))
        setModalTask(false)
      } else {
        console.error('Error deleting task:', await response.json())
      }
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  return {
    handleDeleteClick
  }
}

export default useDeleteClick
