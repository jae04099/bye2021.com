import React from "react"
import styled from "styled-components"

export default function Button({ handleClick, children }) {
  return (
    <Container>
      <Btn onClick={handleClick}>{children}</Btn>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const Btn = styled.button`
  width: 80%;
  height: 48px;
  font-size: 18px;
  background: #ced0f2;
  border-radius: 5px;
`
