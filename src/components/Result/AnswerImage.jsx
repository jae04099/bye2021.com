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
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),
    url(${({ bgImage }) => bgImage}) center center no-repeat;
  background-size: cover;
  border-radius: 15px;
  color: #ffffff;
`;

const Title = styled.span`
  margin: 0;
  font-weight: 700;
`;
