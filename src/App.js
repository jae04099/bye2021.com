import React from "react";
import styled from "styled-components";
import FormName from "./components/Main/FormName";
import Button from "./components/Common/Button";
import { useStore } from "./store";

import Container from "./components/Common/Container";
import { primary700 } from "./constant/color";
import { useNavigate } from "react-router-dom";

export default function App() {
  const { name, setName } = useStore();
  let navigate = useNavigate();
  const handleStart = (ev) => {
    if(name !== ''){
      navigate('/answer');
    }else{
      alert('이름을 입력해주세요!');
    }
  }
  return (
    <Container>
      <Header>
        안녕<span>2022</span>
      </Header>
      <Description>
        <Strong>키워드</Strong>와 <Strong>색</Strong>으로
        <br />
        나의 2022 기록하기
      </Description>
      <Wrapper>
        <BookImage src="/image/favorite-book.png" alt="" />
        <FormName />
        <Button children={"2022 정리하기"} onClick={ev => handleStart(ev)} />
      </Wrapper>
    </Container>
  );
}

const Header = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${primary700};
  span {
    font-style: normal;
    color: #939393;
  }
`;

const Description = styled.p`
  margin-top: 15px;
  line-height: 20px;
`;

const Strong = styled.strong`
  color: #171717;
`;

const Wrapper = styled.div`
  text-align: center;
`;
const BookImage = styled.img`
  width: 50%;
`;
