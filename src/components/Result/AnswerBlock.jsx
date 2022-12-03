import styled from "styled-components";

export const AnswerBlock = ({ text }) => {
  return (
    <Container className="masonry-item">
      <Title>영화 🎬</Title>
      <Contents>{text}</Contents>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  padding: 10px 11px;
  /* width: calc(100% - 10px); */
  height: fit-content;
  background-color: #ffffff;
  border-radius: 15px;
`;

const Title = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #212121;
`;

const Contents = styled.p`
  margin: 11px 0 0 0;
  font-size: 12px;
  color: #212121;
`;
