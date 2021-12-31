import React from "react"
import styled from "styled-components"

export default function Button({ handleClick, children, width }) {
    return <Container props={width}>
        <Btn onClick={handleClick}>{children}</Btn>
    </Container>
  
}

const Container = styled.div`
width: ${props => props};
display: flex;
justify-content: center;
`

const Btn = styled.button``
