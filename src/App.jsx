
//import './App.css'

import { useState } from "react"
import GeneralInfo from "./components/GeneralInfo"
import EducationalExperience from "./components/EducationalExp"
import PracticalExperience from "./components/PracticalExp"

function App() {
  const [generalInfo, setGeneralInfo] = useState({name: '', email: '', phone: ''})
  const [educationalExp, setEducationalExp] = useState({school: '', degree: '', date: ''})
  const [practicalExp, setPracticalExp] = useState({})

  console.log(generalInfo, educationalExp)





  return (
    <>
      <GeneralInfo data={[generalInfo, setGeneralInfo]}></GeneralInfo>
      <EducationalExperience data={[educationalExp, setEducationalExp]}></EducationalExperience>
      <PracticalExperience data={[practicalExp, setPracticalExp]}></PracticalExperience>
    </>
  )
}

export default App
