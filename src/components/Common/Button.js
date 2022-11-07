import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Button({ toLink, children, onClick = undefined }) {
  return (
    <Container>
      <StyledLink onClick={onClick} to={toLink}>
        {children}
      </StyledLink>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`

const StyledLink = styled(Link)`
  // position: absolute;
  // bottom: 370px;
  width: 80%;
  height: 48px;
  font-size: 14px;
  color: white;
  background: #4f4f4f;
  border-radius: 15px;
  text-align: center;
  line-height: 48px;
  margin: 15px;
`
