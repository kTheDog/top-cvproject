import { useState } from "react"

export default function EducationalExperience (props) {

  let [educationalExperience, setEducationalExperience] = props.data
  let [editing, setEditing] = useState(false)
  let currentInputData = educationalExperience

  console.log(educationalExperience)
  function submitButton () {

    console.log(currentInputData)
    setEducationalExperience(currentInputData)
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
      <div className="educational-exp">
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
      <div className="educational-exp mini-display">
        <button className="edit-button" onClick={() => {setEditing(true)}}>Edit</button>
      </div>
  }

  return component
}
