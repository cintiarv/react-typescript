import React, { SetStateAction, useReducer, useState } from 'react'
import useNewSubform from '../hooks/useNewSubForm'
import {Sub} from '../types'

interface FormsProps {
    onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
}





export default function Form({ onNewSub }: FormsProps) {
    //const[inputValues, setInputValues]= useState<FormState['inputValues']>(initialState)
    const [inputValues, dispatch]= useNewSubform()
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub(subs => ([...subs, inputValues]))
        handleClear()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => {
       const {name, value} = e.target
        dispatch({
            type:'change_value',
            payload: {
                inputName:name,
                inputValue: value
            }
        })
      /*   setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        }) */
    }

const handleClear = () => {
//setInputValues(initialState)
dispatch({
    type:'clear'
})
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValues.subMonths} type="number" name='subMonths' placeholder='subMonths'/>
            <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder='nick'/>
            <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder='avatar'/>
            <input onChange={handleChange} value={inputValues.description} type="text" name='description' placeholder='description'/>
            <button type='submit'>Save new sub!</button>
            <button type ='button' onClick={handleClear}>Clear the form</button>

        </form>
    </div>
  )
}
