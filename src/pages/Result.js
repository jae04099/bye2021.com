import React from 'react'
import Button from '../components/Common/Button'
import styled from 'styled-components'
import ResultFooter from '../components/Result/ResultFooter'
import Tile from '../components/Result/Tile'
import { ColorChip } from '../data'

export default function Result() {
    return (
        <>
        <Container>
            <Tile color={ColorChip[0]}/>
            <Tile color={ColorChip[1]}/>
            <Tile color={ColorChip[2]}/>
            <Tile color={ColorChip[3]}/>
            <Tile color={ColorChip[4]}/>
            <Tile color={ColorChip[5]}/>
        </Container>
        <Button toLink={'/main'} children={'다시하기'}/>
        <ResultFooter />
        </>
    )
}

const Container = styled.div`
width: 100%;
display: grid;
grid-template-rows: repeat(3, 1fr);
grid-template-columns: repeat(2, 1fr);
`
