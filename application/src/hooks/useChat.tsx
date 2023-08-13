import axios from "axios"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { AuthorType, addMessage, onTypeDone } from "../redux/reducers/conversationReducer"


export const useChat = () => {
    const dispatch = useAppDispatch()
    const currentConversation = useAppSelector(state => state.conversation.current)

    const URL = 'http://localhost:5000/mob/reply'
    const createId = () => {
        const timestamp = Date.now();
        const uniqueId = Math.floor(Math.random() * 10000)
        return `${timestamp}-${uniqueId}`
    }

    const reply =  async (userMessage:string) => {
        try {
            const response = await axios.post(URL, {sentence:userMessage})
            if (response.status === 200) {
                dispatch(addMessage({id: createId(), author:AuthorType.BOT, content:response.data.content.message, autoTyped:false}))
            }
        } catch (error) {
            dispatch(addMessage({id: createId(), author:AuthorType.BOT, content:"Sorry, something went wrong with my brain. Please, try again later.",  autoTyped:false}))
            console.log(error)
        }
    }

    const setUserMessage = (message:string) => {
        if (message) {
           dispatch(addMessage(
                {id: createId(), author:AuthorType.USER, content:message,  autoTyped:true}
           ))   
             reply(message)
        }
    }

    const setAutoType = () => {
        dispatch(onTypeDone({state:true}))
    }

    return { currentConversation, setUserMessage, setAutoType}
}