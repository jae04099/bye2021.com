import React from 'react'
import FormName from '../components/Main/FormName'
import styled from 'styled-components'
import Button from '../components/Common/Button'

export default function Main() {
    return (
        <>
        <Header>안녕!<em>2021</em>✋</Header>
            <FormName />
            <Button toLink={'/question'} children={'2021 기록하기'}/>
        </>
    )
}

const Header = styled.h1`
position: absolute;
top: 145px;
left: 50px;
font-size: 36px;
z-index: 1;
  color: #222;
  em {
    font-style: normal;
    color: #6D79EC;
  }
`