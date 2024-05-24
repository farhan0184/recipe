import Header from "./commonents/Header"
import RecipeLists from "./commonents/RecipeLists"
import Tabs from "./commonents/Tabs"
import './App.scss'
import { useState } from "react"



function App() {
  const [loader, setLoader] = useState(true)
  return (
    <div className="main">
      <Header />
      <Tabs setLoader={setLoader}/>
      <RecipeLists setLoader={setLoader}/>
      {loader && <div className="loader">
        <div className="spinner"></div>
      </div>}
    </div>
  )
}

export default App
