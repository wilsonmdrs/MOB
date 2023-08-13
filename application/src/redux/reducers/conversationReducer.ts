import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//Types
export enum AuthorType {
    BOT = 'BOT',
    USER = 'USER'
}

export interface Message {
    id:string;
    author: AuthorType;
    content:string;
    autoTyped:boolean
}

export interface ConversationState {
    current:Message[]
}

//Functions
const createId = () => {
    const timestamp = Date.now();
    const uniqueId = Math.floor(Math.random() * 10000)
    return `${timestamp}-${uniqueId}`
}

//Slice
const initialState:ConversationState = {
    current:[],
}

const ConversationSlice = createSlice({
    name: 'conversation',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => {
            state.current.unshift({
                id: createId(),
                author: action.payload.author,
                content: action.payload.content,
                autoTyped:action.payload.autoTyped,
            })
        },
        onTypeDone: (state, action: PayloadAction<{state:boolean}>) => {
            state.current[0].autoTyped = action.payload.state
        }
    },
})

export const conversationReducer = ConversationSlice.reducer;
export const { addMessage, onTypeDone } =  ConversationSlice.actions
