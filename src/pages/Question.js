import React, { useState, useRef } from "react"
import { useStore, useQuest } from "../store"
import { QuestionData } from "../data"
import Checkbox from "../components/Question/Checkbox"
import styled from "styled-components"
import Button from "../components/Common/Button"
import Container from "../components/Common/Container"
import Header from "../components/Common/Header"

export default function Question() {
  let dataLength = QuestionData.length
  const { name } = useStore()
  const { editQuestion } = useQuest()
  const [isActive, setIsActive] = useState(false)
  const [checklist, setChecklist] = useState(new Array(dataLength).fill(false))

  const handleCheck = (idx) => {
    if (!checklist[idx] && [...checklist].filter((e) => e).length >= 5) {
      alert("키워드는 5개까지만 입력해주세요.")
    } else {
      checklist[idx] = !checklist[idx]
      setChecklist([...checklist])
    }
  }

  const handleClick = () => {
    if ([...checklist].filter((e) => e).length !== 5) {
      alert("키워드를 5개 선택해주세요.")
    } else {
      setIsActive(true)
      let selected = []
      checklist.forEach((e, idx) => e && selected.push(QuestionData[idx]))
      selected.forEach((e, idx) => editQuestion({ id: idx, question: e }))
    }
  }

  return (
    <Container>
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
      <Button
        toLink={isActive ? "/answer" : "#"}
        onClick={handleClick}
        children={"2021 기록하기"}
      />
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
