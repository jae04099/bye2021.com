import styled from "styled-components";
import tinycolor from "tinycolor2";

export const AnswerBlock = ({ text, bgColor }) => {
  return (
    <Container className="masonry-item" bgcolor={bgColor}>
      <Title>영화 🎬</Title>
      <Contents>{text}</Contents>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  padding: 10px 11px;
  background-color: ${({ bgcolor }) => bgcolor || "#ffffff"};
  border-radius: 15px;
  color: ${({ bgcolor }) =>
    tinycolor(bgcolor).isDark() ? "#ffffff" : "#000000"};
`;

const Title = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

const Contents = styled.p`
  margin: 11px 0 0 0;
  font-size: 12px;
`;
