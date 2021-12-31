import React from 'react'
import styled from 'styled-components'

export default function Tile({color, tileCategory, tileContent, fontColor}) {
    const LOREM = "꽤 괜찮은 하루였다. 특히 2021년 10월은 내 생일이 있는 달이면서 좋은 선물을 받았기에 더더욱 뜻깊었다. 특히나 내가 좋아하는 샐러드는 먹지 못했다. 이게 괜찮은 일일까?"
    return (
        <TilePiece color={color} fontColor={fontColor}>
            <h1>{tileCategory}</h1>
            <p>{LOREM}</p>
        </TilePiece>
    )
}

const TilePiece = styled.div`
color: ${props => props.fontColor};
grid-auto-columns: 130px;
grid-auto-rows: 130px;
min-height: 190px;
padding: 20px;
background: ${props => props.color};
h1 {
    margin-bottom: 10px;
}
p {
    line-height: 20px;
}
`