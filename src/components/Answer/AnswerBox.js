import React from "react"
import { useState, useRef } from "react";
import styled from "styled-components"
import { useRecoilState } from "recoil";
import { finDataListState } from "../../atom";

export default function AnswerBox({ data, index }) {
  const [desc, setDesc] = useState('');
  const [attach, setAttach] = useState('');
  const [finDataList, setFinDataList] = useRecoilState(finDataListState);
  const ref = useRef();
  const handleInputButton = () => {
    ref.current && ref.current.click();
  };
  const handleDesc = (e) => {
    setDesc(e.slice(0, 150));
  }
  const handleSaveDesc = () => {
    const newState = finDataList.map((obj, idx) => {
      if (obj.keyword === data.keyword) {
        return { ...obj, content: desc }
      }
      return obj;
    })
    setFinDataList(newState)
  }
  const handleSaveImg = (props) => {
    const newState = finDataList.map((obj, idx) => {
      if (obj.keyword === data.keyword) {
        return { ...obj, pic_url: props }
      }
      return obj;
    })
    setFinDataList(newState)
  }
  console.log(finDataList)
  // alert 줘야하나 삭제해도 된다고?
  const handleCloseBox = (e) => {
    e.preventDefault();
    setFinDataList(finDataList.filter(item => item.full_keyword !== data.full_keyword))
  }
  const onFileChanged = ev => {
    const {
      target: { files },
    } = ev;
    if (files) {
      const { length: FileLength } = files;
      for (let i = 0; i < FileLength; i++) {
        const reader = new FileReader();
        reader.addEventListener('loadend', event => {
          if (!event.target) return;
          const { result } = event.target;
          if (result) {
            setAttach(result);
            handleSaveImg(result)
          }
        });
        reader.readAsDataURL(files[i]);
      }
    }
    ev.target.value = '';
  };

  return (
    <>
      {
        data.type === 'no_pic' ? <AnswerPiece><img className="close_icon" onClick={e => handleCloseBox(e)} src="/image/close.png" alt="close button" />
          <PieceInnerWrap>
            <div className="keyword_icon">{data.keyword_icon}</div>
            <span className="char_cnt">{`${desc.length}/150`}</span>
            <MainContWrap>
              <h2 className="title">{data.keyword}</h2>
              <textarea id="story" name="story" placeholder="내용을 입력해주세요" value={desc} onChange={e => handleDesc(e.target.value)}
                onBlur={handleSaveDesc}
                rows="5" cols="33">
              </textarea>
            </MainContWrap>
          </PieceInnerWrap></AnswerPiece> : <AnswerPiece className="photo_type"><img className="close_icon" onClick={e => handleCloseBox(e)} src="/image/close.png" alt="close button" />
          {attach !== '' && <img className="bg_img" src={attach} alt="background img" />}
          <PieceInnerWrap className="photo_type_inner_wrap">
            <input type='button' className='replace_btn' onClick={handleInputButton} />
            <input type='file' accept='image/png, image/jpeg' id='file' name='file' ref={ref} onChange={e => onFileChanged(e)} />
            <div className="keyword_icon">{data.keyword_icon}</div>
            <MainContWrap>
              <h2 className="title">{data.keyword}</h2>
              {attach !== '' ? <span>사진 다시선택</span> : <span>사진업로드</span>}
            </MainContWrap>
          </PieceInnerWrap> </AnswerPiece>
      }
    </>
  )
}

const AnswerPiece = styled.div`
position: relative;
width: 100%;
border-radius: 15px;
box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.15);
padding: 20px 11px;
margin-bottom: 7px;
background: #fff;
overflow: hidden;
> .close_icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 10px;
  height: 10px;
  cursor: pointer;
  z-index: 1;
}
&.photo_type {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  width: calc(100% / 2 - 25.5px);
  aspect-ratio: 1 / 1;
  &:last-child{
    margin-right: unset;
  }
}
.bg_img {
  position: absolute;
  top: 0;
  height: 100%;
  object-fit: cover;
}
`
const PieceInnerWrap = styled.div`
position: relative;
display: flex;
width: calc(100% - 24px);
height: 100%;
> .char_cnt {
position: absolute;
font-size: 10px;
color: #272727;
top: 0;
right: 0;
}
> .keyword_icon {
  width: fit-content;
  height: fit-content;
  padding: 10px;
  background: #EDEDED;
  border-radius: 15px;
  font-size: 20px;
  margin-right: 12px;
}
&.photo_type_inner_wrap {
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  > .keyword_icon {
    margin-right: unset;
    margin-bottom: 8px;
  }
.title {
    margin-bottom: 8px;
  }
  > input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
  }
   .replace_btn {
    position: absolute;
    bottom: 0;
    left: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: transparent;
    border: transparent;
    visibility: unset;
    z-index: 1;
  }
}
`
const MainContWrap = styled.div`
width: 100%;
align-items: center;
position: relative;
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
