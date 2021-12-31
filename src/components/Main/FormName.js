import React from 'react'
import useStore from '../../store';
import styled from 'styled-components'

export default function FormName() {
    const {name, setName} = useStore();
    console.log(name)
    return (
        <Container>
            <form onClick={e => e.preventDefault(e)}>
                <label>이름을 입력해주세요</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='김이름'></input>
            </form>
        </Container>
    )
}

const Container = styled.div`
form {
    label, input {
        display: block;
    }
    label {
        font-size: 14px;
        margin-bottom: 20px;
    }
    input {
        width: 100%;
        padding: 10px 0;
        border: none;
        border-bottom: 3px solid #222;
        font-size: 18px;

        &:focus, &:active {
            outline: none;
        }
    }
}
`