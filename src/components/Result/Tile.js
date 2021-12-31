import React from "react"
import styled from "styled-components"

export default function Tile({ color, tileCategory, children, fontColor }) {
  return (
    <TilePiece color={color} fontColor={fontColor}>
      <h1>{tileCategory}</h1>
      <p>{children}</p>
    </TilePiece>
  )
}

const TilePiece = styled.div`
  color: ${(props) => props.fontColor};
  grid-auto-columns: 130px;
  grid-auto-rows: 130px;
  min-height: 190px;
  padding: 20px;
  background: ${(props) => props.color};
  h1 {
    margin-bottom: 10px;
  }
  p {
    line-height: 20px;
  }
`
