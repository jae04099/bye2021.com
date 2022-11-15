import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function TypeModal() {
    return (
        <Container>
            <Dimmed>
                <ModalWrap>
                    <ModalInnerWrap>
                        <h1>어떤 형식으로 기록하시겠어요?</h1>
                        <ContWrap>
                            <PhotoTypeSection>
                                <img src="/image/photo_type.png" alt="type icon"></img>
                                <span>사진 형식</span>
                                <button><span className="checked"></span></button>
                            </PhotoTypeSection>
                            <WriteTypeSection>
                                <img src="/image/write_type.png" alt="write type icon"></img>
                                <span>글 형식</span>
                                <button><span></span></button>
                            </WriteTypeSection>
                        </ContWrap>
                        <button>확인</button>
                    </ModalInnerWrap>
                    <button>닫기</button>
                </ModalWrap>
            </Dimmed>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Dimmed = styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
background: rgba(0, 0, 0, 0.25);
width: 100%;
height: 100vh;
`
const ModalWrap = styled.div`
position: relative;
background: #fff;
margin: 0 20px;
padding: 42px 45px 30px;
border-radius: 15px;
height: fit-content;
> button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
}
`
const ModalInnerWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
> h1 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 48px;
}
> button {
max-width: 160px;
width: 100%;
background: #4f4f4f;
border-radius: 15px;
color: #fff;
padding: 10px 0;
}
`
const ContWrap = styled.div`
display: flex;
gap: 25px;
margin-bottom: 30px;
`
const PhotoTypeSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
> img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}
> span {
    margin-bottom: 10px;
}
> button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid #969696;
    border-radius: 50%;
    > span {
        background: #9091ed;
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }
}
`
const WriteTypeSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
> img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}
> span {
    margin-bottom: 10px;
}
> button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid #969696;
    border-radius: 50%;
    > span {
        background: #9091ed;
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }
}
`