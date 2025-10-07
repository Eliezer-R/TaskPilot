import { useState } from 'react'
import ReactDOM from 'react-dom'
import ElemTasks from './elemTasks'
import { Link } from 'react-router-dom'
import useTasks from '../hooks/recoverTasks'
import useTasksID from '../hooks/tasksID'
import useNavigaten from '../navigation'
import { lazy, Suspense } from 'react'

const LazyModal = lazy(() => import('./modal'))

function Tasks () {
  const [modalTask, setModalTask] = useState(false)
  const { taskObj, setTaskObj, loading } = useTasks()
  const { objId, setObjId } = useTasksID()
  const { HandleGo } = useNavigaten('logout')

  if (loading) {
    return (
      <div className='tasks-page'>
        <div className='bg-animated'>
          <div className='bg-circle bg-circle-1' />
          <div className='bg-circle bg-circle-2' />
          <div className='bg-circle bg-circle-3' />
        </div>
        <div className='tasks-loading'>
          <div className='loading-spinner' />
          <span>Loading tasks...</span>
        </div>
      </div>
    )
  }

  return (
    <div className='tasks-page'>
      <div className='bg-animated'>
        <div className='bg-circle bg-circle-1' />
        <div className='bg-circle bg-circle-2' />
        <div className='bg-circle bg-circle-3' />
      </div>

      <header className='tasks-header'>
        <div className='tasks-header-container'>
          <div className='header-logo'>
            <div className='logo-icon-wrapper'>
              <div className='logo-icon-blur' />
              <div className='logo-icon-2'>
                <svg viewBox='0 0 24 24' width='32' height='32' fill='none'>
                  <path d='M3 7L3 17L12 22L21 17V7L12 2L3 7Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  <path d='M3 7L12 12M12 12L21 7M12 12V22' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </div>
            </div>
            <div>
              <h1 className='header-title'>My Task Board</h1>
              <p className='header-subtitle'>Tasks to keep organised</p>
            </div>
          </div>

          <Link onClick={HandleGo}>
            <button className='logout-btn'>
              <span>Logout</span>
              <svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' strokeWidth='2'>
                <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
                <polyline points='16 17 21 12 16 7' />
                <line x1='21' y1='12' x2='9' y2='12' />
              </svg>
            </button>
          </Link>
        </div>
      </header>

      <section className='tasks-content'>
        <div className='tasks-container'>
          <div className='tasks-card-wrapper'>
            <div className='tasks-card-blur' />
            <div className='tasks-card'>
              <div className='card-decoration-1' />
              <div className='card-decoration-2' />

              <div className='tasks-grid'>
                {taskObj.length > 0 && taskObj.map((task, index) => {
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

                <div
                  className='add-task-card'
                  onClick={() => {
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
                  <div className='add-task-icon-wrapper'>
                    <div className='add-task-icon-blur' />
                    <div className='add-task-icon'>
                      <svg viewBox='0 0 24 24' width='32' height='32' stroke='white' strokeWidth='2' fill='none'>
                        <line x1='12' y1='5' x2='12' y2='19' />
                        <line x1='5' y1='12' x2='19' y2='12' />
                      </svg>
                    </div>
                  </div>
                  <span className='add-task-text'>Add new task</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalTask && (
        <Suspense fallback={null}>
        {ReactDOM.createPortal(
          <LazyModal
            setModalTask={setModalTask}
            setTaskObj={setTaskObj}
            objId={objId}
          />,
          document.body
        )}
        </Suspense>
      )
      }

    </div>
  )
}

export default Tasks
