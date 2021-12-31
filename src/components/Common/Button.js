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
`

const Btn = styled.button``
