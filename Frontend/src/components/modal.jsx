import useResources from '../resources/recourcesElems'
import useColorsAndTasks from '../hooks/colorsAndTask'
import useObjId from '../hooks/userID'
import useHandleData from '../handlesData'
import useSaveClick from '../handleBtnSave'
import useDeleteClick from '../handleBtnDelete'
import { renderIcons } from '../renderIcons'
import { StatusTokensRender } from '../renderStatusTokens'

function ModalTasks ({ setModalTask, setTaskObj, objId }) {
  const { icons, status, statusImg, colorsStatus, Hcolors } = useResources()
  const { Hcolor, setHcolor, addTask, setAddTask } = useColorsAndTasks()
  const { taskData, setTaskData } = useObjId({ objId })
  const { handleIconClick, handleInputValue, handleStatusClick } =
  useHandleData({
    setAddTask,
    setHcolor,
    setTaskData
  })
  const { handleDeleteClick } = useDeleteClick({ objId, setModalTask, setTaskObj })
  const { handleSabeClick } = useSaveClick({ objId, taskData, setTaskObj, setModalTask })

  return (
    <div className='modal-tasks' onClick={() => setModalTask((prev) => !prev)}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className='title-modal'>
          <span>Task Details</span>
          <div onClick={() => setModalTask((prev) => !prev)}>
            <img src='/resources/close_ring_duotone-1.svg' alt='close' />
          </div>
        </div>
        <div className='content-details'>

          <div className='content-inputs'>
            <label htmlFor='name-task'>Task name:</label>
            <input
              type='text'
              name='name'
              id='name-task'
              value={taskData.name}
              autoComplete='name'
              onChange={(e) => handleInputValue(e)}
            />
          </div>

          <div className='content-inputs'>
            <label htmlFor='description-task'>Description:</label>
            <textarea
              name='description'
              value={taskData.description}
              id='description-task' onChange={(e) => handleInputValue(e)}
              placeholder='Enter a short description'
              autoComplete='off'
            />
          </div>

          <div className='content-iconts'>
            <span>Icons:</span>
            <div className='content-icons'>
              {renderIcons({ handleIconClick, Hcolor, taskData, Hcolors, icons })}
            </div>
          </div>

          <div className='content-status'>
            <span>Status:</span>
            <div className='content-status-img'>
              {StatusTokensRender({ status, statusImg, handleStatusClick, colorsStatus, taskData, addTask })}
            </div>
          </div>

        </div>

        <div className='footer-modal'>

          <div onClick={handleDeleteClick}>
            <button type='button' className='delete'>Delete</button>
            <img src='/resources/Trash.svg' alt='trash' />
          </div>
          <div onClick={handleSabeClick}>
            <button type='button' className='save'>Save</button>
            <img src='/resources/check.svg' alt='close' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ModalTasks
