import React, { useState, useEffect } from "react"
import useStore from "../store"
import { Link } from "react-router-dom"
import { QuestionData } from "../data"
import Checkbox from "../components/Question/Checkbox"
import styled from "styled-components"
import Button from "../components/Common/Button"
import Container from "../components/Common/Container"
import Header from "../components/Common/Header"

export default function Question() {
  let dataLength = QuestionData.length
  const { name } = useStore()
  const [checklist, setChecklist] = useState(new Array(dataLength).fill(false))

  const handleCheck = (idx) => {
    if (!checklist[idx] && [...checklist].filter((e) => e).length >= 5) {
      alert("키워드는 5개까지만 입력해주세요.")
      // 다섯번째 취소시 에러
    } else {
      checklist[idx] = !checklist[idx]
      setChecklist([...checklist])
    }
  }

  return (
    <Container>
      {/* user 훅스 사용? */}
      <Header></Header>
      <Ask>
        <Strong>{name}</Strong>님의 2021을 대표하는
        <br /> 키워드를 5개 선택해주세요
      </Ask>
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
      <Button toLink={'/answer'} children={'2021 기록하기'}/>
    </Container>
  )
}

const Ask = styled.h1`
  margin-top: 20px;
  line-height: 30px;
  font-size: 24px;
`

const Strong = styled.strong`
  font-weight: 900;
  color: #6b8df2;
`
const QuestionDataContainer = styled.article`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3vh;
`
