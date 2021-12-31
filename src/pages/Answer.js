import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Button from "../components/Common/Button"
import Container from "../components/Common/Container"
import Header from "../components/Common/Header"

const mock_q = ["영화 🎬", "음악 🎧", "물건 🛍", "사건 📆", "책 📚"]
const mock_u = [
  "userName",
  {
    no: 0,
    question: "",
    answer: "",
  },
  {
    no: 1,
    question: "",
    answer: "",
  },
  {
    no: 2,
    question: "",
    answer: "",
  },
  {
    no: 3,
    question: "",
    answer: "",
  },
  {
    no: 4,
    question: "",
    answer: "",
  },
]

export default function Answer() {
  const [mockdata, setMockdata] = useState(mock_u)

  useEffect(() => {
    mock_q.forEach((q, idx) => {
      mock_u[idx + 1].question = q
    })
    setMockdata([...mock_u])
  }, [])

  const handleInput = (e, idx) => {
    if (e.target.value.length > 30) {
      alert("30자 내로 입력해주세요.")
    } else {
      mock_u[idx + 1].answer = e.target.value
      setMockdata([...mock_u])
    }
  }
  return (
    <Container>
      <Header />
      {mock_u.map((uq, idx) => {
        if (idx == 0) return <h2 key={uq}>Goodbye 2021</h2>
        else {
          return (
            <p>
              <h3>
                {mock_u[0]}의 {uq.question}
              </h3>
              <AnswerBox
                value={uq.answer}
                onChange={(e) => handleInput(e, uq.no)}
                rows={2}
                cols={30}
              ></AnswerBox>
            </p>
          )
        }
      })}
      <Button toLink={'/result'} children={'2021 정리하기'}/>
    </Container>
  )
}

const AnswerBox = styled.textarea`
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`
