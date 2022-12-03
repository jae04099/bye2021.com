import React, { useEffect } from "react";
import styled from "styled-components";
import { AnswerBlock } from "../components/Result/AnswerBlock";

export default function Result(props) {
  function masonryLayout() {
    const masonryContainerStyle = getComputedStyle(
      document.querySelector(".masonry-container"),
    );
    const autoRows = parseInt(
      masonryContainerStyle.getPropertyValue("grid-auto-rows"),
    );

    document.querySelectorAll(".masonry-item").forEach((elt) => {
      elt.style.gridRowEnd = `span ${Math.ceil(elt.scrollHeight / autoRows)}`;
    });
  }

  useEffect(() => {
    masonryLayout();
    window.addEventListener("resize", masonryLayout);
  }, []);

  return (
    <Container className="masonry-container">
      <AnswerBlock text={"lorem"} />
      <AnswerBlock
        text={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo dolorem nostrum beatae voluptatem harum assumenda hic cupiditate, eaque, culpa fugit distinctio at? Amet laboriosam nam nesciunt?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo dolorem nostrum beatae voluptatem harum assumenda hic cupiditate, eaque, culpa fugit distinctio at? Amet laboriosam nam nesciunt?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo dolorem nostrum beatae voluptatem harum assumenda hic cupiditate, eaque, culpa fugit distinctio at? Amet laboriosam nam nesciunt?"
        }
      />
      <AnswerBlock
        text={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo dolorem nostrum beatae voluptatem harum assumenda hic cupiditate, eaque, culpa fugit distinctio at? Amet laboriosam nam nesciunt?"
        }
      />
      <AnswerBlock
        text={
          "lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo doloreLorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo doloreLorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo doloreLorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat omnis labore quo dolore"
        }
      />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  grid-auto-rows: 10px;
  background-color: #000000;
`;
