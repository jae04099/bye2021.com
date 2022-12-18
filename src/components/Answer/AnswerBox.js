import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { finDataListState } from "../../atom";

export default function AnswerBox({ data, index }) {
  const { content, pic_url, keyword, full_keyword } = data;
  const [finDataList, setFinDataList] = useRecoilState(finDataListState);
  const ref = useRef();

  const handleInputButton = () => {
    ref.current && ref.current.click();
  };

  const handleSaveDesc = (text) => {
    const newState = finDataList.map((obj, idx) => {
      if (text.length > 150) text = text.slice(0, 150);
      if (obj.keyword === keyword) {
        return { ...obj, content: text };
      }
      return obj;
    });
    setFinDataList(newState);
  };

  const handleSaveImg = (props) => {
    const newState = finDataList.map((obj, idx) => {
      if (obj.keyword === data.keyword) {
        return { ...obj, pic_url: props };
      }
      return obj;
    });
    setFinDataList(newState);
  };

  // alert 줘야하나 삭제해도 된다고?
  const handleCloseBox = () => {
    setFinDataList([
      ...finDataList.filter((item) => item.full_keyword !== full_keyword),
    ]);
  };

  const onFileChanged = (ev) => {
    const {
      target: { files },
    } = ev;
    if (files) {
      const { length: FileLength } = files;
      for (let i = 0; i < FileLength; i++) {
        const reader = new FileReader();
        reader.addEventListener("loadend", (event) => {
          if (!event.target) return;
          const { result } = event.target;
          if (result) {
            handleSaveImg(result);
          }
        });
        reader.readAsDataURL(files[i]);
      }
    }
    ev.target.value = "";
  };

  return (
    <>
      {data.type === "no_pic" ? (
        <AnswerPiece>
          <CloseButton type="button" onClick={handleCloseBox}>
            <img
              className="close_icon"
              src="/image/close.png"
              alt="close button"
            />
          </CloseButton>
          <PieceInnerWrap>
            <div className="keyword_icon">{data.keyword_icon}</div>
            <span className="char_cnt">{`${content.length}/150`}</span>
            <MainContWrap>
              <h2 className="title">{data.keyword}</h2>
              <textarea
                id="story"
                name="story"
                placeholder="내용을 입력해주세요"
                value={content}
                onChange={(e) => handleSaveDesc(e.target.value)}
                // onBlur={(e) => handleSaveDesc(e.target.value)}
                rows="5"
                cols="33"
              ></textarea>
            </MainContWrap>
          </PieceInnerWrap>
        </AnswerPiece>
      ) : (
        <AnswerPiece className="photo_type">
          <CloseButton type="button" onClick={handleCloseBox}>
            <img src="/image/close.png" alt="close button" />
          </CloseButton>
          {data.pic_url && (
            <img className="bg_img" src={data.pic_url} alt="background img" />
          )}
          <PieceInnerWrap className="photo_type_inner_wrap">
            <input
              type="button"
              className="replace_btn"
              onClick={handleInputButton}
            />
            <input
              type="file"
              accept="image/png, image/jpeg"
              id="file"
              name="file"
              ref={ref}
              onChange={(e) => onFileChanged(e)}
            />
            <div className="keyword_icon">{data.keyword_icon}</div>
            <PhotoWrap className="photo_type_cont_wrap">
              <h2 className="title">{data.keyword}</h2>
              {pic_url !== "" ? (
                <span>사진 다시선택</span>
              ) : (
                <span>사진업로드</span>
              )}
            </PhotoWrap>
          </PieceInnerWrap>
        </AnswerPiece>
      )}
    </>
  );
}

const AnswerPiece = styled.div`
  position: relative;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.15);
  padding: 20px 11px;
  background: #fff;
  overflow: hidden;

  &.photo_type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% / 2 - 25.5px);
    aspect-ratio: 1 / 1;
  }
  .bg_img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
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
    background: #ededed;
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
`;
const MainContWrap = styled.div`
  display: inline-block;
  padding: 3px;
  padding-left: 0;
  width: 100%;
  align-items: center;
  position: relative;
  background: none;
  border-radius: 5px;
  color: #000;
  > textarea {
    width: 100%;
    border: none;
    resize: none;
    margin-top: 7px;
    &:focus {
      outline: none;
    }
  }
`;

const PhotoWrap = styled.div`
  display: inline-block;
  padding: 3px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  color: #fff;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 1;

  & > img {
    width: 10px;
    height: 10px;
  }
`;
