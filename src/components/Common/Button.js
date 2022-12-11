import React from "react"
import styled from "styled-components"

export default function Button({ children, onClick }) {
  return (
    <Container>
      <button onClick={onClick}>
        {children}
      </button>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  > button {
    width: 100%;
  height: 48px;
  font-size: 14px;
  color: white;
  background: #4f4f4f;
  border-radius: 15px;
  text-align: center;
  line-height: 48px;
  }
`
