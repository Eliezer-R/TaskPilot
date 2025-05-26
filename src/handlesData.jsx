function useHandleData ({ setTaskData, setHcolor, setAddTask }) {
  const handleInputValue = (e) => {
    const { name, value } = e.target

    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleIconClick = (index) => {
    setTaskData((prev) => {
      return {
        ...prev,
        icon: index
      }
    })
    setHcolor(index)
  }

  const handleStatusClick = (index) => {
    setTaskData((prev) => {
      return {
        ...prev,
        status: index
      }
    })
    setAddTask(index)
  }

  return {
    handleIconClick,
    handleInputValue,
    handleStatusClick
  }
}

export default useHandleData
