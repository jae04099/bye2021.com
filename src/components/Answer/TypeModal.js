import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { clickedKeywordState, isShowState, finDataListState } from "../../atom";
import styled, { css } from "styled-components";

export default function TypeModal() {
  const [answerType, setAnswerType] = useState("pic");
  const [, setShow] = useRecoilState(isShowState);
  const [clickedKeyword] = useRecoilState(clickedKeywordState);
  const [, setFinDataList] = useRecoilState(finDataListState);
  const handleRecordType = (value) => {
    setAnswerType(value);
  };
  const splitedKeywordList = clickedKeyword.split(" ");
  const handleSubmitType = () => {
    setFinDataList((prev) => [
      {
        full_keyword: clickedKeyword,
        keyword: splitedKeywordList[0],
        keyword_icon: splitedKeywordList[1],
        type: answerType,
        content: "",
        pic_url: "",
        writable: true,
      },
      ...prev,
    ]);
    setShow(false);
  };
  return (
    <Container>
      {/* <Dimmed /> */}
      <ModalWrap>
        <button onClick={() => setShow(false)}>닫기</button>
        <ModalInnerWrap>
          <Title>어떤 형식으로 기록하시겠어요?</Title>
          <ContWrap>
            <li>
              <Label htmlFor="photo_type">
                <TypeImage src="/image/photo_type.png" alt="type icon" />
                <span>사진 형식</span>
                <InputChecker checked={answerType === "pic"} />
                <Input
                  type={"radio"}
                  id="photo_type"
                  onClick={() => handleRecordType("pic")}
                  name="type"
                  value={"pic"}
                />
              </Label>
            </li>
            <li>
              <Label htmlFor="write_type">
                <TypeImage src="/image/write_type.png" alt="write type icon" />
                <span>글 형식</span>
                <InputChecker checked={answerType === "no_pic"} />
                <Input
                  type={"radio"}
                  id="write_type"
                  onClick={() => handleRecordType("no_pic")}
                  name="type"
                  value={"no_pic"}
                />
              </Label>
            </li>
          </ContWrap>
          <button onClick={handleSubmitType}>확인</button>
        </ModalInnerWrap>
      </ModalWrap>
    </Container>
  );
}

const Container = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
`;

const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 15px 15px 30px;
  border-radius: 15px;
  width: max-content;
  z-index: 1;
  > button {
    float: right;
    background: transparent;
  }
`;
const ModalInnerWrap = styled.div`
  text-align: center;
  > button {
    max-width: 160px;
    width: 100%;
    background: #4f4f4f;
    border-radius: 15px;
    color: #fff;
    padding: 10px 0;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 48px 30px 30px;
`;

const ContWrap = styled.ul`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TypeImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  display: none;
`;

const InputChecker = styled.span`
  display: inline-block;
  position: relative;
  margin-top: 10px;
  width: 20px;
  height: 20px;
  border: 1px solid #969696;
  border-radius: 50%;

  ${({ checked }) =>
    checked &&
    css`
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 3px;
        left: 3px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #9091ed;
      }
    `}
`;
