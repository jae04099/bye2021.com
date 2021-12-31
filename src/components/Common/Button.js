import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Button({ handleClick, children, width }) {

    return <Container props={width}>
      
        <Link to="/question">{children}</Link>
    </Container>
  )
}

// 여기 위에 링크 to를 변수로 바꾸고 싶은데 그게 어렵네유
const Container = styled.div`
  width: ${(props) => props.width}vw;
  display: flex;
  justify-content: center;
`

const Btn = styled.button`
  width: 80%;
  height: 48px;
  font-size: 18px;
  background: #ced0f2;
  border-radius: 5px;
`
