import { useEffect, useState } from "react";
import styled from "styled-components";
import { AnswerBlock } from "../components/Result/AnswerBlock";
import tinycolor from "tinycolor2";

const Result = () => {
  const [pointColor, setPointColor] = useState(null);

  function masonryLayout() {
    const masonryContainerStyle = getComputedStyle(
      document.querySelector(".masonry-container"),
    );

    const autoRows = parseInt(
      masonryContainerStyle.getPropertyValue("grid-auto-rows"),
    );

    document.querySelectorAll(".masonry-item").forEach((elt) => {
      elt.style.gridRowEnd = `span ${Math.ceil(
        elt.scrollHeight / autoRows / 1.4,
      )}`;
    });
  }

  useEffect(() => {
    masonryLayout();
    window.addEventListener("resize", masonryLayout);
  }, []);

  return (
    <Container>
      <Nav>
        <div>
          <ColorLabel htmlFor="color">🎨</ColorLabel>
          <ColorInput
            id="color"
            type="color"
            onChange={(e) => setPointColor(e.target.value)}
          />
          <ColorSet bgcolor={pointColor}></ColorSet>
        </div>
      </Nav>
      <GridContainer className="masonry-container">
        <AnswerBlock
          text={"lorem"}
          bgColor={tinycolor(pointColor || "#ffffff").brighten(30)}
        />
        <AnswerBlock
          text={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo dolorem nostrum beatae voluptatem harum assumenda hic cupiditate, eaque, culpa fugit distinctio at? Amet laboriosam nam nesciunt?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo dolorem nostrum beatae voluptatem harum assumenda hic cupiditate, eaque, culpa fugit distinctio at? Amet laboriosam nam nesciunt?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo dolorem nostrum beatae voluptatem harum assumenda hic cupiditate, eaque, culpa fugit distinctio at? Amet laboriosam nam nesciunt?"
          }
          bgColor={tinycolor(pointColor || "#ffffff").darken(10)}
        />
        <AnswerBlock
          text={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo dolorem nostrum beatae voluptatem harum assumenda hic cupiditate, eaque, culpa fugit distinctio at? Amet laboriosam nam nesciunt?"
          }
          bgColor={tinycolor(pointColor || "#ffffff").brighten(30)}
        />
        <AnswerBlock
          text={
            "lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo doloreLorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo doloreLorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo doloreLorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo dolore"
          }
          bgColor={tinycolor(pointColor || "#ffffff").darken(30)}
        />
      </GridContainer>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  height: 100vh;
  background-color: #000000;
`;

const Nav = styled.nav`
  padding: 87px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  grid-auto-rows: 10px;

  & div:first-of-type {
    grid-column: 1/3;
  }
`;

const ColorLabel = styled.label`
  font-size: 20px;
  margin-right: 6px;
`;
const ColorInput = styled.input`
  display: none;
`;

const ColorSet = styled.div`
  display: inline-block;
  width: 83px;
  height: 15px;
  border-radius: 15px;
  background: ${({ bgcolor }) =>
    bgcolor || "linear-gradient(270deg, #00ff19 0%, #6d79ec 99.99%)"};
`;
