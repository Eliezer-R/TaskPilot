// render status tokens for the task status
export const StatusTokensRender =
({
  statusImg,
  handleStatusClick,
  colorsStatus,
  status,
  taskData,
  addTask
}) => {
  return statusImg.map((img, index) => {
    return (
      <div
        key={index}
        onClick={() => handleStatusClick(index)}
        className='status-img'
        style={{
          borderColor: (addTask || taskData.status) === index
            ? 'var(--color-blue)'
            : 'var(--color-overlay)'
        }}
      >
        <div style={{ backgroundColor: `var(${colorsStatus[index]})` }} className='circle-status'>
          <img src={img} alt='status' />
        </div>
        <div className='status-check'>
          <span>{status[index]}</span>
          {(taskData.status ?? addTask) === index && <img src='/resources/check.svg' alt='check' />}

        </div>
      </div>
    )
  })
}
