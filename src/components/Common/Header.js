import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
            <Title>안녕!<em>2021</em>✋</Title>
    )
}

const Title = styled.h1`
width: 100%;
background: #999;
color: #222;
padding: 50px 0 20px 0;
em {
    font-style: normal;
}
`