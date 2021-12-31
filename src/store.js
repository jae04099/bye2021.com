import create from 'zustand'

const useStore = create(set => ({
    name: '',
    setName: (state) => set(() => ({
        name: state
    }))
}))

export default useStore;