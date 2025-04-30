import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './component/createtodo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateTodo > </CreateTodo>
      <todos> </todos>
    </div>
  )
}

export default App
