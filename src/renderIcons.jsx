// renders a list of icons with click handlers and dynamic styles.
export const renderIcons = ({ handleIconClick, Hcolor, taskData, Hcolors, icons }) => {
  return icons.map((icon, index) => {
    return (
      <div
        key={index}
        onClick={() => handleIconClick(index)}
        style={{
          backgroundColor: (Hcolor || taskData.icon) === index
            ? `var(${Hcolors[1]})`
            : `var(${Hcolors[0]})`
        }} className='icon'
      >
        {icon}
      </div>
    )
  })
}
