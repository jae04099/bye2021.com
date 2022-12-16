import { useEffect } from "react";
import styled from "styled-components";
import { getRandomColor } from "../../utils/getRandomColor";
import { masonryLayout } from "../../utils/masonryLayout";
import { AnswerBlock } from "./AnswerBlock";
import { AnswerImage } from "./AnswerImage";

export const MasonryGrid = ({ datas, pointColor }) => {
  useEffect(() => {
    masonryLayout();
  }, []);

  return (
    <GridContainer className="masonry-container">
      {datas?.map((data, index) => {
        const { content, keyword } = data;

        if (content)
          return (
            <AnswerBlock
              key={keyword}
              data={data}
              data-type="text"
              bgColor={getRandomColor(index, pointColor)}
            />
          );
        return <AnswerImage key={keyword} data={data} data-type="image" />;
      })}
    </GridContainer>
  );
};

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
