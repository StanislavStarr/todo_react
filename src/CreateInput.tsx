import { useState } from 'react'
import { createTodo } from './lib/todoRest'
import Todo from './interfaces/todoInterface'


export function CreateInput() {

  const [text, setText] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const data: Todo = {
    id: 1,
    title: text,
    completed: false,
    status: 'not yet'
  } 

  const handleSubmit = () => {
    createTodo(data)
  }

  return (
    <>
    <input type="text" onChange={handleInput} />
    <button type="submit" onClick={handleSubmit}></button>
    </>
  )
}
