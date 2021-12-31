import React from "react"
import useStore from "../../store"
import styled from "styled-components"
import Container from "../Common/Container"

export default function FormName() {
  const { name, setName } = useStore()
  return (
    <Container>
      <NameForm onClick={(e) => e.preventDefault(e)}>
        <label>이름을 입력해주세요</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="김이름"
        ></input>
      </NameForm>
    </Container>
  )
}

const NameForm = styled.form`
  width: 80%;
  label,
  input {
    display: block;
  }
  label {
    font-size: 14px;
    margin-bottom: 20px;
  }
  input {
    width: 100%;
    padding: 10px 0;
    background: #ebebf2;
    border: none;
    border-bottom: 3px solid #222;
    font-size: 18px;

    &:focus,
    &:active {
      outline: none;
    }
  }
`
