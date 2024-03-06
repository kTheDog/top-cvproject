import { useState } from "react"

export default function GeneralInfo (props) {
  console.log(props.data[0])
  let [generalInfo, setGeneralInfo] = props.data
  let [editing, setEditing] = useState(false)
  let currentInputData = generalInfo

  console.log(generalInfo)
  function submitButton () {

    console.log(currentInputData)
    setGeneralInfo(currentInputData)

  }

  function handleInput(e) {
    let input = e.target
    Object.assign(currentInputData, {[e.target.id]: e.target.value})
    console.log(input)
    console.log(currentInputData)
  }
  let component;

  if (editing) {
    component =
    <div className="general-info">
      <fieldset onChange={(e) => {handleInput(e)}}>
      <h2>General Information</h2>
        <div className="normal-input">
          <input type="text" id="name" placeholder="your name"></input>
          <label htmlFor="name"></label>
        </div>

        <div className="normal-input">
          <input type="text" id="email" placeholder="your name"></input>
          <label htmlFor="email"></label>
        </div>

        <div className="normal-input">
          <input type="tel" id="phone" placeholder="your name"></input>
          <label htmlFor="phones"></label>
        </div>
      </fieldset>

      <button className="submit" onClick={submitButton()}>Save</button>
    </div>
  } else {
    component =
    <div className="general-info mini-display">
      <button className="add-button" onClick={() => {setEditing(true)}}>Edit</button>
    </div>
  }
  return component
}
