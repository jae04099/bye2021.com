import React, {useState} from 'react'
import Button from '../Common/Button';
import styled from 'styled-components'

export default function FormName() {
    const [name, setName] = useState('');
    const handleName = (props) => {
        setName(props)
    }
    return (
        <Container>
            <form>
                <label>이름을 입력해주세요</label>
                <input value={name} onChange={() => setName()} type="input" placeholder='김이름'></input>
            </form>
            <Button handleClick={() => handleName(name)} children={'2021 정리하기'}/>
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
        background: #EBEBF2;
        border: none;
        border-bottom: 3px solid #222;
        font-size: 18px;

        &:focus, &:active {
            outline: none;
        }
    }
}
Button {
    margin-top: 105px;
}
`