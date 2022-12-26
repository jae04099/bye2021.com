import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormName from "./components/Main/FormName";
import { useRecoilState } from "recoil";
import { nameState } from "./atom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { primary700, primary900 } from "./constant/color";
import { INAPP_LIST } from "./constant/inappList";

export default function App() {
  const [name] = useRecoilState(nameState);
  const [customVh, setCustomVh] = useState(0);
  const navigate = useNavigate();

  const checkHasName = () => {
    if (!name) {
      alert('이름을 입력해주세요!');
    } else {
      navigate("/answer");
    }
  }

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      checkHasName();
    }
  }

  const handleIsAosInappBrowser = () => {
    if (navigator.userAgent.match(INAPP_LIST) && !navigator.userAgent.match(/iPhone|iPad/i)) {
      window.location.href =
        "intent://" +
        window.location.href.replace(/https?:\/\//i, "") +
        "#Intent;scheme=http;package=com.android.chrome;end";
    }
  }

  useEffect(() => {
    setCustomVh(window.innerHeight * 0.01);
    document.documentElement.style.setProperty('--vh', `${customVh}px`);
    setTimeout(() => { handleIsAosInappBrowser(); }, 3000);
  }, []);

  if (
    navigator.userAgent.match(INAPP_LIST) && !navigator.userAgent.match(/iPhone|iPad/i)
  ) {
    return (
      <Container>
        <Caution>
          더 나은 환경을 위해 외부 브라우저로 이동 중 입니다! 🚀
        </Caution>
      </Container>
    );
  } else {
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
          <BookImage src="/image/favorite-book.png" alt="book icon" />
          <FormName onKeyPress={onKeyPress} />
          <ButtonContainer>
            <NextBtn onClick={checkHasName}>2022 정리하기</NextBtn>
          </ButtonContainer>
        </Wrapper>
      </Container>
    );
  }
}

const Container = styled.main`
  max-width: 500px;
  margin: 0 auto;
  padding: 50px 20px 0;
`;

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

const CopyButton = styled.button`
display: inline-block;
width: 100%;
height: 48px;
font-size: 14px;
border-radius: 15px;
background-color: #454545;
color: white;
`;

const Caution = styled.h1`
text-align: center;
margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`

const NextBtn = styled.button`
  width: 100%;
  height: 48px;
  font-size: 14px;
  color: white;
  background: #4f4f4f;
  border-radius: 15px;
  text-align: center;
  line-height: 48px;
`
