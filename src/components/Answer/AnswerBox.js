import React from "react"
import { useEffect, useState } from "react";
import styled from "styled-components"

export default function AnswerBox({ data, finDataList, setFinDataList }) {
  const [desc, setDesc] = useState('');
  const handleDesc = (e) => {
    setDesc(e.slice(0, 150));
  }
  // alert 줘야하나 삭제해도 된다고?
  const handleCloseBox = (e) => {
    e.preventDefault();
    setFinDataList(finDataList.filter(item => item.full_keyword !== data.full_keyword))
  }
  return (
    <Container>
      <AnswerPiece>
        {
          data.type === 'no_pic' ? <><img className="close_icon" onClick={e => handleCloseBox(e)} src="/image/close.png" alt="close button" />
            <PieceInnerWrap>
              <div className="keyword_icon">{data.keyword_icon}</div>
              <span className="char_cnt">{`${desc.length}/150`}</span>
              <MainContWrap>
                <h2 className="title">{data.keyword}</h2>
                <textarea id="story" name="story" placeholder="내용을 입력해주세요" value={desc} onChange={e => handleDesc(e.target.value)}
                  rows="5" cols="33">
                </textarea>
              </MainContWrap>
            </PieceInnerWrap></> : <><img className="close_icon" onClick={e => handleCloseBox(e)} src="/image/close.png" alt="close button" />
            <PieceInnerWrap className="photo_type_inner_wrap">
              <div className="keyword_icon">{data.keyword_icon}</div>
              <MainContWrap>
                <h2 className="title">{data.keyword}</h2>
                <button className="upload_btn">사진업로드</button>
              </MainContWrap>
            </PieceInnerWrap></>
        }
      </AnswerPiece>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const AnswerPiece = styled.div`
position: relative;
width: 100%;
border-radius: 15px;
box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.15);
padding: 20px 11px;
margin-bottom: 7px;
background: #fff;
> .close_icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 10px;
  height: 10px;
  cursor: pointer;
}
&.photo_type {
  display: flex;
  justify-content: center;
  margin-right: 7px;
  width: calc(100% / 2 - 25.5px);
  &:last-child{
    margin-right: unset;
  }
}
`
const PieceInnerWrap = styled.div`
position: relative;
display: flex;
width: calc(100% - 24px);
> .char_cnt {
position: absolute;
font-size: 8px;
color: #272727;
top: 0;
right: 0;
}
> .keyword_icon {
  height: fit-content;
  padding: 6px;
  background: #EDEDED;
  border-radius: 15px;
  font-size: 20px;
  margin-right: 12px;
}
&.photo_type_inner_wrap {
  flex-direction: column;
  text-align: center;
  align-items: center;
  > .keyword_icon {
    margin-right: unset;
    margin-bottom: 8px;
  }
.title {
    margin-bottom: 8px;
  }
  > .upload_btn {

  }
}
`
const MainContWrap = styled.div`
width: 100%;
align-items: center;
 > textarea {
  width: 100%;
  border: none;
  resize: none;
  margin-top: 7px;
  &:focus {
    outline: none;
  }
 }
`