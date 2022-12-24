import React from "react";
import styled from "styled-components";
import FormName from "./components/Main/FormName";
import Button from "./components/Common/Button";
import Container from "./components/Common/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { primary700, primary900 } from "./constant/color";

export default function App() {
  return (
    <Container>
      <TopTitle>
        <h1>안녕<span>2022</span></h1>
        <a href="https://github.com/jae04099/loglog.co.kr" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub} /></a>
      </TopTitle>
      <Description>
        <Strong>키워드</Strong>와 <Strong>색</Strong>으로
        <br />
        나의 2022 기록하기
      </Description>
      <Wrapper>
        <BookImage src="/image/favorite-book.png" alt="" />
        <FormName />
        <Button toLink={"/answer"} children={"2022 정리하기"} />
      </Wrapper>
    </Container>
  );
}

const TopTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
> h1 {
  font-size: 36px;
  font-weight: 600;
  color: ${primary700};
  span {
    font-style: normal;
    color: #939393;
  }
}

> a {
  font-size: 24px;
  color: ${primary900};
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
