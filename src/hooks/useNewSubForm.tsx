import { Sub } from "../types"
import { useReducer } from 'react'

interface FormState {
    inputValues:Sub
}

type FormReducerAction = {
    type: 'change_value'
    payload:{
        inputName:string,
        inputValue: string
    }
} | {
    type: 'clear'
}

const initialState = {
    nick:'',
    subMonths:0,
    avatar:'',
    description:''
}

const formReducer=(state: FormState['inputValues'], action: FormReducerAction) => {
    switch(action.type){
        case "change_value":
        const {inputName, inputValue} = action.payload 
        return{
           ...state,
           [inputName] : inputValue
        }
        case 'clear':
            return initialState
            
        default:
            return state
    }
}

const useNewSubform = () => {
    return useReducer(formReducer, initialState)
}

export default useNewSubform