import styled from "styled-components"
import Question from "./pages/Question"
import FormName from "./components/Main/FormName"
import Result from "./pages/Result"
import Main from "./pages/Main"
import Header from "./components/Common/Header"
import "./App.css"
import Answer from "./pages/Answer"

function App() {
  return (
    <>
      {/* <Main /> */}
      <Question />
      <Answer />
    </>
  )
}

export default App
