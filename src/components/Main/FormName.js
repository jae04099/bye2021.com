import React from "react"
import { useStore } from "../../store"
import styled from "styled-components"

export default function FormName() {
  const { name, setName } = useStore()
  return (
    <>
      <NameForm onClick={(e) => e.preventDefault(e)}>
        <label>이름을 입력해주세요</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
      </NameForm>
    </>
  )
}

const NameForm = styled.form`
  margin: 20px 0 52px;
  label,
  input {
    display: block;
  }
  label {
    text-align: left;
    font-size: 14px;
    margin-bottom: 4px;
  }
  input {
    width: 100%;
    padding: 10px 0;
    background: transparent;
    border: none;
    border-bottom: 0.7px solid #505050;
    font-size: 18px;

    &:focus,
    &:active {
      outline: none;
    }

    &::placeholder {
      font-size: 14px;
    }
  }
`
