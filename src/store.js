import create from "zustand"
import produce from "immer"

const useStore = create((set) => ({
  name: "",
  setName: (state) =>
    set(() => ({
      ...useStore,
      name: state,
    })),
}))

const useQuest = create((set) => ({
  qna: [
    {
      id: 0,
      question: "",
      answer: "",
    },
    {
      id: 1,
      question: "",
      answer: "",
    },
    {
      id: 2,
      question: "",
      answer: "",
    },
    {
      id: 3,
      question: "",
      answer: "",
    },
    {
      id: 4,
      question: "",
      answer: "",
    },
  ],

  editQuestion: (q) => {
    set(
      produce((draft) => {
        const qu = draft.qna.find((el) => el.id === q.id)
        qu.question = q.question
      })
    )
  },
  editAnswer: (a) => {
    set(
      produce((draft) => {
        const an = draft.qna.find((el) => el.id === a.id)
        an.answer = a.answer
      })
    )
  },
}))
export { useStore, useQuest }
