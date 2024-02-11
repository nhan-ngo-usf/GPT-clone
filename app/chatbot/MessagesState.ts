import {create} from 'zustand'
import { MessageType } from '@/types'

// this is for typescript types

type MessagesType = {
    messages: Array<MessageType>
    addMessage: (message: MessageType) => void
    deleteMessage: () => void
}

export const useMessages = create<MessagesType>((set) => ({
    messages: [],
    addMessage: (message: MessageType) => {
        set(state => ({messages: [...state.messages, message]}))
    },
    // delete all messages
    deleteMessage: () => {
        set(state => ({messages: []}))
    }
})
)