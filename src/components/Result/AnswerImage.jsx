import styled from "styled-components";

export const AnswerImage = ({ data }) => {
  const { pic_url, full_keyword } = data;
  return (
    <Container className="masonry-item-image" bgImage={pic_url}>
      <Title>{full_keyword}</Title>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 11px;
  background: url(${({ bgImage }) => bgImage}) center center no-repeat
    rgba(0, 0, 0, 0);
  background-size: cover;
  background-blend-mode: multiply;
  border-radius: 15px;
  color: #ffffff;
`;

const Title = styled.span`
background: rgba(0, 0, 0, 0.4);
padding: 3px;
border-radius: 5px;
  margin: 0;
  font-weight: 700;
`;
