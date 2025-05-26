function useDeleteClick ({ objId, setTaskObj, setModalTask }) {
  const handleDeleteClick = async () => {
    if (objId.task_id === undefined) return
    try {
      const response = await fetch(`http://localhost:3000/tasks/${objId.task_id}`, {
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
