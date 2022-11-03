import React from "react"
import styled from "styled-components"
import FormName from "./components/Main/FormName"
import Button from "./components/Common/Button"
import Container from "./components/Common/Container"
import { primary700 } from "./constant/color"

export default function App() {
  return (
    <Container>
      <Header>
        안녕<em>2021</em>
      </Header>
      <Description>
        <Strong>키워드</Strong>와 <Strong>색</Strong>으로
        <br />
        나의 2022 기록하기
      </Description>
      <Wrapper>
        <BookImage src="/image/favorite-book.png" alt="" />
        <FormName />
        <Button toLink={"/question"} children={"2021 기록하기"} />
      </Wrapper>
    </Container>
  )
}

const Header = styled.h1`
  padding: 88px 20px 0;
  font-size: 36px;
  font-weight: 600;
  color: ${primary700};
  em {
    font-style: normal;
    color: #939393;
  }
`

const Description = styled.p`
  margin: 10px 20px;
`

const Strong = styled.strong`
  color: #171717;
`

const Wrapper = styled.div`
  text-align: center;
`
const BookImage = styled.img`
  width: 50%;
`
