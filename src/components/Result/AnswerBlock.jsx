import { forwardRef } from "react";
import styled from "styled-components";

export const AnswerBlock = forwardRef(({ style, className, ...props }, ref) => {
  const { children, datakey } = props;
  return (
    <Container
      key={datakey}
      style={{ ...style }}
      className={className}
      ref={ref}
      {...props}
    >
      <Title>영화 🎬</Title>
      <Contents>
        세상에 이렇게 행복한 일이 있었나? 나는 잘 모르겠다.
        가나다라마바사가바나ㅏㄹ어니ㅏㅇ러니ㅏ러니ㅏ어ㅣ라넝리ㅏ너ㅣ아ㅓㄹ니아러ㅣㄴ아러니아러니ㅏ어린아ㅓ린아ㅓ리나ㅓㅇ리아ㅓ리나어리나.
        세상에 이렇게 행복한 일이 있었나? 나는 잘 모르겠다.
        가나다라마바사가바나ㅏㄹ어니ㅏㅇ러니ㅏ러니ㅏ어ㅣ라넝리ㅏ너ㅣ아ㅓㄹ니아러ㅣㄴ아러니아러니ㅏ어린아ㅓ린아ㅓ리나ㅓㅇ리아ㅓ리나어리나.
      </Contents>
      {children}
    </Container>
  );
});

const Container = styled.div`
  box-sizing: border-box;
  padding: 10px 11px;
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
  height: calc(100% - 28px);
  font-size: 12px;
  color: #212121;
  overflow: auto;
`;
