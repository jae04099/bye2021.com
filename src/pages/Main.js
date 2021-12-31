import React from "react"
import styled from "styled-components"
import FormName from "../components/Main/FormName"
import Container from "../components/Common/Container"

export default function Main() {
  return (
    <MainContainer>
      <Title>
        안녕!<em>2021</em>✋
      </Title>
      <FormName />
    </MainContainer>
  )
}

const MainContainer = styled(Container)`
  justify-content: space-evenly;
`

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  em {
    color: #9091ed;
    font-style: normal;
  }
`
