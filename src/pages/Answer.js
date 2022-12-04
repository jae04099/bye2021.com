import React, { useEffect } from "react";
import styled from "styled-components";
import TypeModal from "../components/Answer/TypeModal";
import AnswerBox from "../components/Answer/AnswerBox";
import Button from "../components/Common/Button";
import { QuestionData } from "../data";
import { useRecoilState } from "recoil";
import { clickedKeywordState, isShowState, finDataListState } from "../atom";
import { useNavigate } from "react-router-dom";

export default function Answer() {
  const navigate = useNavigate();
  const [isShow, setShow] = useRecoilState(isShowState);
  const [, setClickedKeyword] = useRecoilState(clickedKeywordState);
  const [finDataList] = useRecoilState(finDataListState);

  useEffect(() => {}, [finDataList]);

  const handleActiveBadge = (e, idx) => {
    if (finDataList.length === 5) {
      alert("이미 5개를 선택 하셨습니다.");
    } else if (
      finDataList.filter((item) => item.full_keyword === e.target.value)
        .length === 1
    ) {
      return null;
    } else {
      setShow(true);
      setClickedKeyword(e.target.value);
    }
  };

  const checkIsContEmpty = () => {
    let tmpPicType = finDataList.filter((item) => item.content === "pic");
    let tmpNoPicType = finDataList.filter((item) => item.content === "no_pic");
    if (
      tmpPicType.some((item) => item.pic_url === "") ||
      tmpNoPicType.some((item) => item.content === "")
    ) {
      alert("모든 칸을 채워주세요!");
      return;
    }
    if (finDataList[0].length === 0 || finDataList.length <= 4) {
      alert("키워드를 선택 해 주세요!");
      return;
    }
    navigate("/result");
    return;
  };
  return (
    <Container>
      <h1>키워드를 5개 선택해주세요</h1>
      <h5>2022년의 단어는 무엇인가요?</h5>
      <KeywordContainer>
        {QuestionData.map((item, index) => {
          return (
            <button
              onClick={(e) => handleActiveBadge(e, index)}
              key={index}
              className={
                finDataList.find((e) => e.full_keyword === item)
                  ? "active"
                  : "none"
              }
              value={item}
            >
              <span>{item}</span>
            </button>
          );
        })}
      </KeywordContainer>
      <AnswerWrap>
        {finDataList.map((e, index) => {
          return <AnswerBox key={`${index}`} data={e} index={index} />;
        })}
      </AnswerWrap>
      <button onClick={checkIsContEmpty}>다음</button>
      {/* <Button
        toLink={checkIsContEmpty}
        onClick={checkIsContEmpty}
        children={"다음"}
      /> */}
      {isShow && <TypeModal />}
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  max-width: 500px;
  width: calc(100% - 40px);
  height: 100%;
  min-height: calc(100vh - 88px);
  margin: 0 auto;
  padding: 88px 20px 0;
  background: #e9e9e9;
  h1 {
    font-size: 20px;
    margin-bottom: 6px;
    font-weight: 400;
  }
  h5 {
    font-size: 14px;
    color: #444;
  }
`;

const KeywordContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 17px;
  gap: 6px;
  > button {
    padding: 5px 8px;
    border-radius: 15px;
    background: #6a6a6a;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
    > span {
      display: inline-block;
      pointer-events: none;
      font-size: 12px;
      color: #fff;
    }
    &.active {
      background: #454545;
    }
  }
`;

const AnswerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 40px;
`;
