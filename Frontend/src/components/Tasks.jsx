import { useState } from 'react'
import ReactDOM from 'react-dom'
import ModalTasks from './modal'
import ElemTasks from './elemTasks'
import Propery from './properyL'
import useTasks from '../hooks/recoverTasks'
import useTasksID from '../hooks/tasksID'

// This component is used to display the tasks and handle the modal for adding/editing tasks
// It uses the useTasks and useTasksID hooks to manage the state of tasks and task IDs
function Tasks () {
  const [modalTask, setModalTask] = useState(false)
  const { taskObj, setTaskObj, loading } = useTasks()
  const { objId, setObjId } = useTasksID()

  if (loading) {
    return (
      <div className='tasks-loading'>
        <span>Loading tasks...</span>
      </div>
    )
  }

  return (
    <div className='tasks'>
      <div>
        <Propery methodName='logout'>
          <>
            <h5>Logout</h5>
            <img src='/resources/logout-2.svg' alt='logout' />
          </>
        </Propery>
      </div>
      <section className='tasks-content'>
        <div>
          <div className='content-title-tasks'>
            <img src='/resources/Logo.svg' alt='logo' />
            <span>My Task Board</span>
            <img src='/resources/Edit_duotone.svg' alt='logo' />
          </div>
          <span className='comn-title'>Tasks to keep organised</span>
          <div className='content-content'>
            <div>
              {taskObj.length > 0 && taskObj.map((task, index) => {
                // if there are no tasks, we show nothing
                return (
                  <ElemTasks
                    key={index}
                    tasks={task}
                    setObjId={() => {
                      setObjId(task)
                      setModalTask(true)
                    }}
                  />
                )
              })}
            </div>

            <div className='Add-boards' data-task='add'>
              <div
                className='board-img' data-more='mr' onClick={() => {
                  setModalTask(!modalTask)
                  setObjId({
                    task_id: null,
                    title: '',
                    description: '',
                    icon: null,
                    status: null
                  })
                }}
              >
                <img src='/resources/Add_round_duotone.svg' alt='Add' />
              </div>
              <span>Add new task</span>
            </div>
          </div>
        </div>

        {modalTask &&
         ReactDOM.createPortal(<ModalTasks
           setModalTask={setModalTask}
           setTaskObj={setTaskObj} objId={objId}
                               />,
         document.body)}

      </section>
    </div>
  )
}

export default Tasks
