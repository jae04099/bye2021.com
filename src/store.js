import create from "zustand"

const useStore = create((set) => ({
  name: "",
  question: [
    {
      no: 0,
      question: "",
      answer: "",
    },
    {
      no: 1,
      question: "",
      answer: "",
    },
    {
      no: 2,
      question: "",
      answer: "",
    },
    {
      no: 3,
      question: "",
      answer: "",
    },
    {
      no: 4,
      question: "",
      answer: "",
    },
  ],
  setName: (state) =>
    set(() => ({
      ...useStore,
      name: state,
    })),
  setQuest: (idx, state) => (this.question[idx].question = state),
}))

export default useStore
