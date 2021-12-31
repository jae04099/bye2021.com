import React from "react"
import styled from "styled-components"

export default function Header() {
  return (
    <Title>
      안녕!<em>2021</em>✋
    </Title>
  )
}

const Title = styled.h1`
  position: absolute;
  top: 15px;
  left: 10px;
  color: #444;
  em {
    font-style: normal;
  }
`
