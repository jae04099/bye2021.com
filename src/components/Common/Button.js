import React from "react"
import styled from "styled-components"

export default function Button({ handleClick, children }) {
  return <Btn onClick={handleClick}>{children}</Btn>
}

const Btn = styled.button`
  width: 80;
  height: 48px;
  background: #ced0f2;
  border-radius: 5px;
`
