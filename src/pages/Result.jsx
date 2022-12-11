import { useEffect, useState } from "react";
import styled from "styled-components";
import { AnswerBlock } from "../components/Result/AnswerBlock";
import tinycolor from "tinycolor2";
import { useRecoilState } from "recoil";
import { finDataListState } from "../atom";
import { AnswerImage } from "../components/Result/AnswerImage";
import html2canvas from "html2canvas";

const Result = () => {
  const [pointColor, setPointColor] = useState(null);
  const [finDataList] = useRecoilState(finDataListState);

  function masonryLayout() {
    const container = document.querySelector(".masonry-container");
    const masonryContainerStyle = getComputedStyle(container);

    const autoRows = parseInt(
      masonryContainerStyle.getPropertyValue("grid-auto-rows"),
    );

    document.querySelectorAll(".masonry-item").forEach((elt) => {
      const scrollHeight = elt.scrollHeight;

      elt.style.gridRowEnd = `span ${Math.ceil(scrollHeight / autoRows / 1.4)}`;
    });

    document.querySelectorAll(".masonry-item-image").forEach((elt) => {
      const imgWidth = container.scrollWidth / 2 - 10;

      elt.style.gridRowEnd = `span ${Math.ceil(imgWidth / autoRows / 2)}`;
    });
  }

  useEffect(() => {
    masonryLayout();
  }, []);

  const getRandomColor = (index) => {
    if (index === 0) return pointColor;
    const randomValue = Math.floor(Math.random() * 10);
    const bgColor = Math.floor(Math.random() * 1)
      ? tinycolor(pointColor || "#ffffff").darken(randomValue * 10)
      : tinycolor(pointColor || "#ffffff").brighten(randomValue * 10);

    return bgColor;
  };

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

  return (
    <Container>
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
      <GridContainer id="capture" className="masonry-container">
        {finDataList.map((data, index) => {
          const { content, keyword } = data;

          if (content)
            return (
              <AnswerBlock
                key={keyword}
                data={data}
                data-type="text"
                bgColor={getRandomColor(index)}
              />
            );
          return <AnswerImage key={keyword} data={data} data-type="image" />;
        })}
      </GridContainer>
      <ButtonContainer>
        <ResultButton type="button" onClick={captureResult}>
          이미지로 저장하기
        </ResultButton>
        <ResultButton>링크 복사</ResultButton>
      </ButtonContainer>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  min-height: 100vh;
  background-color: #000000;
`;

const Nav = styled.nav`
  padding: 87px 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  /* padding: 20px; */
  box-sizing: border-box;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  grid-auto-rows: 5px;

  & div[data-type="text"]:first-of-type {
    grid-column: 1/3;
  }
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
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
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
`;
