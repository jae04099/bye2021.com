import styled from "styled-components"
import Question from "./pages/Question"
import FormName from "./components/Main/FormName"

import Result from "./pages/Result"
import Main from "./pages/Main"
import Header from "./components/Common/Header"
import "./App.css"

function App() {
  return (
      <div className="App">
        <Header />
        {/* <Question /> */}
        {/* <FormName /> */}
        <Result />
      </div>
  )
}

export default App
