import { useEffect, useState } from "react";
import styled from "styled-components";
import tinycolor from "tinycolor2";
import html2canvas from "html2canvas";
import { MasonryGrid } from "../components/Result/MasonryGrid";
import { useRecoilState } from "recoil";
import { finDataListState, nameState } from "../atom";

const Result = () => {
  const [pointColor, setPointColor] = useState(null);
  const [finDataList] = useRecoilState(finDataListState);
  const [name] = useRecoilState(nameState);

  useEffect(() => {
    const myImgs = document.querySelectorAll(".my-images");

    myImgs.forEach((myImg) => {
      const imgWidth = myImg.clientWidth;
      const imgHeight = myImg.clientHeight;

      if (imgWidth > imgHeight) {
        myImg.style.height = "100%";
      } else {
        myImg.style.width = "100%";
      }
    });
  }, []);

  const captureResult = () => {
    html2canvas(document.getElementById("capture"), {
      backgroundColor: "#000000",
    }).then(function (canvas) {
      const downloadLink = document.createElement("a");
      downloadLink.download = "filename.png";
      downloadLink.href = canvas.toDataURL();
      downloadLink.click();
    });
  };

  const copyUrl = () => {
    window.navigator.clipboard.writeText("https://loglog.co.kr").then(() => {
      alert("링크가 복사되었습니다! 친구에게 공유해보세요 :)");
    });
  };

  return (
    <Container>
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <CaptureContainer id="capture">
        <Title>
          <Name fontColor={pointColor}>{name}</Name>의
          <br />
          2022년 순간들
        </Title>
        <Nav>
          <div>
            <ColorLabel htmlFor="color">
              <span>🎨</span> <ColorSet bgcolor={pointColor}></ColorSet>
            </ColorLabel>
            <ColorInput
              id="color"
              type="color"
              onChange={(e) => setPointColor(e.target.value)}
            />
          </div>
          <div>
            <RandomButton
              type="button"
              onClick={() => setPointColor(tinycolor.random().toHexString())}
            >
              🎲
            </RandomButton>
          </div>
        </Nav>
        <MasonryGrid datas={finDataList} pointColor={pointColor} />
      </CaptureContainer>
      <ButtonContainer>
        <ResultButton type="button" onClick={captureResult}>
          이미지로 저장하기
        </ResultButton>
        <ResultButton type="button" onClick={copyUrl}>
          링크 복사
        </ResultButton>
      </ButtonContainer>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  padding: 41px 0 16px;
  background-color: #000000;
`;

const CaptureContainer = styled.div`
  padding: 30px 16px;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
`;

const Name = styled.span`
  color: ${({ fontColor }) => fontColor || "#ffffff"};
`;

const Nav = styled.nav`
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ColorLabel = styled.label`
  font-size: 20px;
  margin-right: 6px;
`;
const ColorInput = styled.input`
  opacity: 0;
`;

const ColorSet = styled.div`
  display: inline-block;
  width: 83px;
  height: 15px;
  border-radius: 15px;
  background: ${({ bgcolor }) =>
    bgcolor || "linear-gradient(270deg, #00ff19 0%, #6d79ec 99.99%)"};
`;

const RandomButton = styled.button`
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: grid;
  padding: 0 16px;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const ResultButton = styled.button`
  display: inline-block;
  width: 100%;
  height: 48px;
  background: none;
  border: 1px solid #ffffff;
  border-radius: 15px;
  color: #ffffff;
  font-size: 14px;

  &:hover {
    background: #ffffff;
    color: #000;
  }
`;
