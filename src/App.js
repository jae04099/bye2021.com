import React from "react"
import styled from "styled-components"
import FormName from "./components/Main/FormName"
import Button from "./components/Common/Button"
import Container from "./components/Common/Container"

export default function App() {
  return (
    <Container>
      <Header>
        안녕!<em>2021</em>✋
      </Header>
      <FormName />
      <Button toLink={"/question"} children={"2021 기록하기"} />
    </Container>
  )
}

const Header = styled.h1`
  font-size: 36px;
  margin-top: 30px;
  z-index: 1;
  color: #222;
  em {
    font-style: normal;
    color: #6d79ec;
  }
`
