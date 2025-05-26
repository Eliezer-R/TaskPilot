import { useState } from 'react'
// this hook is used to manage the state of a task ID object
function useTasksID () {
  const [objId, setObjId] = useState({
    task_id: null,
    title: '',
    description: '',
    icon: 0,
    status: 0
  })

  return {
    objId,
    setObjId
  }
}

export default useTasksID
