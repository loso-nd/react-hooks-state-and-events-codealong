import React, {useState} from "react"
function Toggle() {
  let [isOn, setIsOn] = useState(false)


  const handleClick = () => {
    setIsOn((isOn) => !isOn);
    //setIsOn(true)
  }

  const color = isOn ? "red" : "green";

  return (
    <button style={{background: color}}
      onClick={ handleClick}>{isOn ? "ON" : "OFF"}</button>
  )
}

export default Toggle;

