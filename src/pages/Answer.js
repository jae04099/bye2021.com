import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Button from "../components/Common/Button"
import Container from "../components/Common/Container"
import Header from "../components/Common/Header"
import { useStore, useQuest } from "../store"

export default function Answer() {
  const { name } = useStore()
  const { qna, editAnswer } = useQuest()

  const [selQuest, setSelQuest] = useState([])
  const [selAnswer, setSelAnswer] = useState([])

  useEffect(() => {
    let qs = qna.map((e) => e.question)
    setSelQuest(qs)
  }, [])

  const handleInput = (e, idx) => {
    if (e.target.value.length > 150) {
      alert("150자 내로 입력해주세요.")
    } else {
      selAnswer[idx] = e.target.value
      setSelAnswer([...selAnswer])
    }
  }

  const handleSubmit = () => {
    selAnswer.forEach((e, i) => {
      editAnswer({ id: i, answer: e })
    })
  }
  return (
    <Container>
      <Header />
      {selQuest.map((uq, idx) => {
        return (
          <p>
            <h3>
              {name}의 {uq}
            </h3>
            <AnswerBox
              value={selAnswer[idx]}
              placeholder="150자 이내로 입력해주세요."
              onChange={(e) => handleInput(e, idx)}
              rows={5}
              cols={30}
            ></AnswerBox>
          </p>
        )
      })}
      <Button
        toLink={"/result"}
        onClick={handleSubmit}
        children={"2021 정리하기"}
      />
    </Container>
  )
}

const AnswerBox = styled.textarea`
  border: none;
  resize: none;
  margin-top: 15px;
  &:focus {
    outline: none;
  }
`
