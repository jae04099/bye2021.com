import styled from "styled-components";

export const AnswerImage = ({ data }) => {
  const { pic_url, full_keyword } = data;

  return (
    <Container className="masonry-item-image">
      <Title>{full_keyword}</Title>
      <MainImage className="my-images" src={pic_url} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 10px 11px;
  border-radius: 15px;
  color: #ffffff;
  overflow: hidden;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
  }
`;

const Title = styled.span`
  position: relative;
  margin: 0;
  font-weight: 700;
  z-index: 100;
`;

const MainImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
