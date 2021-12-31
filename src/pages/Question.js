import React, { useState } from "react"
import { QuestionData } from "../data"
import Checkbox from "../components/Question/Checkbox"
import RemindBtn from "../components/Question/RemindBtn"
import styled from "styled-components"

export default function Question() {
  let dataLength = QuestionData.length
  const [checklist, setChecklist] = useState(new Array(dataLength).fill(false))

  const handleCheck = (idx) => {
    checklist[idx] = !checklist[idx]

    if ([...checklist].filter((e) => e).length > 5) {
      alert("키워드는 5개까지만 입력해주세요.")
      // 다섯번째 취소시 에러
    } else setChecklist([...checklist])
  }
  return (
    <QuestionContainer>
      {/* user 훅스 사용? */}
      <Header>
        <Strong>김민주</Strong>님의 2021을 대표하는
        <br /> 키워드를 5개 선택해주세요
      </Header>
      <QuestionDataContainer>
        {QuestionData.map((q, idx) => {
          return (
            <Checkbox
              key={q}
              onClick={() => handleCheck(idx)}
              num={idx}
              checked={checklist[idx]}
            >
              {q}
            </Checkbox>
          )
        })}
      </QuestionDataContainer>
      <RemindBtn>2021 정리하기</RemindBtn>
    </QuestionContainer>
  )
}

const QuestionContainer = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ebebf2;
`

const Header = styled.h1`
  margin: 20px;
  line-height: 30px;
  font-size: 24px;
`

const Strong = styled.strong`
  font-weight: 900;
  color: #6b8df2;
`
const QuestionDataContainer = styled.article`
  width: 100%;
  margin-left: 60px;
`
