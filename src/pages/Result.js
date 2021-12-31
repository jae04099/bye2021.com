import React from "react"
import Button from "../components/Common/Button"
import styled from "styled-components"
// import ResultFooter from '../components/Result/ResultFooter'
import Tile from "../components/Result/Tile"
import { ColorChip } from "../data"
import { useQuest } from "../store"

export default function Result() {
  const { qna } = useQuest()
  return (
    <>
      <Container>
        {ColorChip.map((color, idx) => {
          return idx < 5 ? (
            <Tile
              color={color}
              key={color}
              fontColor={idx === 0 ? "#fff" : "#000"}
              tileCategory={qna[idx].question}
            >
              {qna[idx].answer}
            </Tile>
          ) : (
            <Tile color={color} key={color} tileCategory={"친구 태그하기"} />
          )
        })}
        {/* <Tile color={ColorChip[0]} fontColor={'#fff'} tileCategory={}/>
            <Tile color={ColorChip[1]}/>
            <Tile color={ColorChip[2]}/>
            <Tile color={ColorChip[3]}/>
            <Tile color={ColorChip[4]}/>
            <Tile color={ColorChip[5]}/> */}
      </Container>
      <Button toLink={"/"} children={"다시하기"} />
      {/* <ResultFooter /> */}
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
`
