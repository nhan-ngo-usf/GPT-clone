import create from 'zustand'

// this is for typescript types
interface CounterState {
    counter: number
    increment: () => void
}

export const useCounter = create<CounterState>((set) => ({
    counter: 0,
    increment: () => {console.log('incrementing')},
})
)