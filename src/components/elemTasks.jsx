import useResources from '../resources/recourcesElems'

// This component is used to display a task element in the task list.
function ElemTasks ({ setObjId, tasks }) {
  const { icons, statusImg, colorsStatus, colorsStatus2 } = useResources()

  return (
    <div className='Add-boards' onClick={() => setObjId(tasks)} style={{ backgroundColor: `var(${colorsStatus2[tasks.status]})` }}>
      <div className='board-img' style={{ backgroundColor: 'white' }}>
        <span>{icons[tasks.icon]}</span>
      </div>
      <div className='child-tasks'>
        <div className='Status-board'>
          <span>{tasks.title}</span>
        </div>
        <span className='description-board'>{tasks.description}</span>
      </div>
      <div className='status-img-2' style={{ backgroundColor: `var(${colorsStatus[tasks.status]})` }}>
        <img src={statusImg[tasks.status]} alt='Add' />
      </div>
    </div>
  )
}

export default ElemTasks
