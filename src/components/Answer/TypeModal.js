import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { clickedKeywordState, isShowState, finDataListState } from "../../atom";
import styled from "styled-components";

export default function TypeModal() {
    const [answerType, setAnswerType] = useState('pic');
    const [, setShow] = useRecoilState(isShowState);
    const [clickedKeyword] = useRecoilState(clickedKeywordState);
    const [, setFinDataList] = useRecoilState(finDataListState);
    const handleRecordType = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setAnswerType(e.target.value);
    }
    const splitedKeywordList = clickedKeyword.split(" ");
    const handleSubmitType = () => {
        setFinDataList(prev => ([
            ...prev,
            {
                full_keyword: clickedKeyword,
                keyword: splitedKeywordList[0],
                keyword_icon: splitedKeywordList[1],
                type: answerType,
                content: '',
                pic_url: '',
                writable: true
            }
        ]))
        setShow(false);
    }
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
                                <div className="button_wrap">
                                    <button value="pic" onClick={(e) => handleRecordType(e)} className={(answerType === "pic") && "checked"}></button></div>
                            </PhotoTypeSection>
                            <WriteTypeSection>
                                <img src="/image/write_type.png" alt="write type icon"></img>
                                <span>글 형식</span>
                                <div className="button_wrap">
                                    <button value="no_pic" onClick={(e) => handleRecordType(e)} className={(answerType === "no_pic") && "checked"}></button></div>
                            </WriteTypeSection>
                        </ContWrap>
                        <button onClick={handleSubmitType}>확인</button>
                    </ModalInnerWrap>
                    <button onClick={() => setShow(false)}>닫기</button>
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
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
background: rgba(0, 0, 0, 0.25);
width: 100%;
height: 100vh;
z-index: 1;
`
const ModalWrap = styled.div`
position: relative;
background: #fff;
margin: 0 20px;
padding: 42px 45px 30px;
border-radius: 15px;
width: fit-content;
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
max-width: 250px;
width: 100%;
background: #4f4f4f;
border-radius: 15px;
color: #fff;
padding: 15px 0;
font-size: 12px;
}
`
const ContWrap = styled.div`
display: flex;
gap: 25px;
margin-bottom: 30px;
`
const PhotoTypeSection = styled.div`
display: flex;
width: calc(100% / 2);
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
aspect-ratio: 1 / 1;
> img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}
> span {
    margin-bottom: 10px;
}
> div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid #969696;
    border-radius: 50%;
    > button {
        display: inline-block;
        background: #fff;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        &.checked {
            background: #9091ed;
        }
    }

}
`
const WriteTypeSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
> img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}
> span {
    margin-bottom: 10px;
}
> div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid #969696;
    border-radius: 50%;
    > button {
        display: inline-block;
        background: #fff;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        &.checked {
            background: #9091ed;
        }
    }

}
`