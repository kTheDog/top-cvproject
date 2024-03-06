
//import './App.css'

import { useState } from "react"
import GeneralInfo from "./components/GeneralInfo"
import EducationalExperience from "./components/EducationalExp"

function App() {
  const [generalInfo, setGeneralInfo] = useState({name: '', email: '', phone: ''})
  const [educationalExp, setEducationalExp] = useState({})

  console.log(generalInfo, educationalExp)





  return (
    <>
      <GeneralInfo data={[generalInfo, setGeneralInfo]}></GeneralInfo>
      <EducationalExperience data={[educationalExp, setEducationalExp]}></EducationalExperience>
    </>
  )
}

export default App
