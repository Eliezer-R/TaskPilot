import useNavigaten from '../navigation'

// This component is used to navigate to a different page when clicked
// It takes in children and methodName as props
function Propery ({ children, methodName }) {
  const { HandleGo } = useNavigaten(methodName)

  return (
    <div onClick={HandleGo}>
      {children}
    </div>
  )
}

export default Propery
