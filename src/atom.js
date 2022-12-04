import { atom } from "recoil";

/** user name */
const nameState = atom({
    key: 'nameState',
    default: ''
});

/** final input data */
const finDataListState = atom({
    key: 'finDataListState',
    default: []
});

/** answer page clicked keyword badge */
const clickedKeywordState = atom({
    key: 'clickedKeywordState',
    default: ''
});

/** handle modal */
const isShowState = atom({
    key: 'isShowState',
    default: false
})

/** handle save final data */
const isSaveState = atom({
    key: 'isSaveState',
    default: false
})

export {nameState, finDataListState, clickedKeywordState, isShowState, isSaveState};