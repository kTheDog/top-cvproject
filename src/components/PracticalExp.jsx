import { useState } from "react"

export default function PracticalExperience (props) {

  let [practicalExperience, setPracticalExperience] = props.data
  let [editing, setEditing] = useState(false)
  let currentInputData = practicalExperience

  console.log(practicalExperience)
  function submitButton () {

    console.log(currentInputData)
    setPracticalExperience(currentInputData)
    setEditing(false)
  }
 //advanced // new
  function handleInput(e) {
    let input = e.target
    Object.assign(currentInputData, {[e.target.id]: e.target.value})
    console.log(input)
    console.log(currentInputData)
  }
  let component;
  if (editing) {
    component = (
      <div className="practical-exp">
        <fieldset onChange={(e) => {handleInput(e)}}>
        <h2>Educational Experience</h2>
          <div className="normal-input">
            <input type="text" id="" placeholder=""></input>
            <label htmlFor=""></label>
          </div>

          <div className="normal-input">
            <input type="text" id="" placeholder=""></input>
            <label htmlFor=""></label>
          </div>

          <div className="normal-input">
            <input type="tel" id="" placeholder=""></input>
            <label htmlFor=""></label>
          </div>
        </fieldset>

        <button className="submit" onClick={() => {submitButton()}}>Save</button>
      </div>

    )
  } else {
    component =
      <div className="practical-exp mini-display">
        <button className="add-button" onClick={() => {setEditing(true)}}>Edit</button>
      </div>
  }

  return component
}
