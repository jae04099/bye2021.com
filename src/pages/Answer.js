import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Common/Button";
import { QuestionData } from "../data";
import { useStore, useQuest } from "../store";

export default function Answer() {
  const { name } = useStore();
  const { qna, editAnswer } = useQuest();

  const [clicked, setClicked] = useState(false);
  const [clickedList, setClickedList] = useState([]);

  const handleActiveBadge = (e, idx) => {
    setClickedList({})
    console.log(clickedList);
  }
  return (
    <Container>
      <h1>키워드를 5개 선택해주세요</h1>
      <h5>2022년의 단어는 무엇인가요?</h5>
      <KeywordContainer>
        {QuestionData.map((item, index) => {
          return <button onClick={e => handleActiveBadge(e, index)} key={index} className={clicked && "active"} value={item}><span>{item}</span></button>
        })}

      </KeywordContainer>
      <AnswerWrap>
        <AnswerPiece>
          <img className="close_icon" src="/image/close.png" alt="" />
          <PieceInnerWrap>
            <div className="keyword_icon">🎧</div>
            <span className="char_cnt">121/500</span>
            <MainContWrap>
              <h2 className="title">음악</h2>
              <textarea id="story" name="story" placeholder="내용을 입력해주세요"
                rows="5" cols="33">
              </textarea>
            </MainContWrap>
          </PieceInnerWrap>
        </AnswerPiece>
        <AnswerPiece className="photo_type">
          <img className="close_icon" src="/image/close.png" alt="" />
          <PieceInnerWrap className="photo_type_inner_wrap">
            <div className="keyword_icon">🎧</div>
            <MainContWrap>
              <h2 className="title">음악</h2>
              <button className="upload_btn">사진업로드</button>
            </MainContWrap>
          </PieceInnerWrap>
        </AnswerPiece>
        <AnswerPiece className="photo_type">
          <img className="close_icon" src="/image/close.png" alt="" />
          <PieceInnerWrap className="photo_type_inner_wrap">
            <div className="keyword_icon">🎧</div>
            <MainContWrap>
              <h2 className="title">음악</h2>
              <button className="upload_btn">사진업로드</button>
            </MainContWrap>
          </PieceInnerWrap>
        </AnswerPiece>
      </AnswerWrap>
      <Button
        toLink={"/result"}
        children={"다음"}
      />
    </Container>
  );
}

const Container = styled.section`
  max-width: 500px;
  width: calc(100% - 40px);
  height: 100%;
  min-height: 100vh;
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
`

const KeywordContainer = styled.section`
display: flex;
flex-wrap: wrap;
margin-top: 10px;
margin-bottom: 17px;
gap: 6px;
button {
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
  .active {
    background: #454545;
  }
}
`

const AnswerWrap = styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: 40px;
`;

const AnswerPiece = styled.div`
position: relative;
width: 100%;
border-radius: 15px;
box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.15);
padding: 20px 11px;
margin-bottom: 7px;
background: #fff;
> .close_icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 10px;
  height: 10px;
  cursor: pointer;
}
&.photo_type {
  display: flex;
  justify-content: center;
  margin-right: 7px;
  width: calc(100% / 2 - 25.5px);
  &:last-child{
    margin-right: unset;
  }
}
`
const PieceInnerWrap = styled.div`
position: relative;
display: flex;
width: calc(100% - 24px);
> .char_cnt {
position: absolute;
font-size: 8px;
color: #272727;
top: 0;
right: 0;
}
> .keyword_icon {
  height: fit-content;
  padding: 6px;
  background: #EDEDED;
  border-radius: 15px;
  font-size: 20px;
  margin-right: 12px;
}
&.photo_type_inner_wrap {
  flex-direction: column;
  text-align: center;
  align-items: center;
  > .keyword_icon {
    margin-right: unset;
    margin-bottom: 8px;
  }
.title {
    margin-bottom: 8px;
  }
  > .upload_btn {

  }
}
`
const MainContWrap = styled.div`
width: 100%;
align-items: center;
 > textarea {
  width: 100%;
  border: none;
  resize: none;
  margin-top: 7px;
  &:focus {
    outline: none;
  }
 }
`
