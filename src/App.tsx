import { useState } from 'react'
import { CreateInput } from './CreateInput'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateInput />
    </>
  )
}

export default App
