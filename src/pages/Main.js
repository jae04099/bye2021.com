import React from 'react'
import styled from 'styled-components'
import FormName from '../components/Main/FormName'

export default function Main() {
return (<>
    <Title>안녕!<em>2021</em>✋</Title>
    <FormName />
</>)

}

const Title = styled.h1`
margin: 145px 0 50px 0;
font-size: 36px;
text-align: center;
em {
    color: #9091ED;
    font-style: normal;
}
`