import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calling from './Calling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Calling/>
    </>
  )
}

export default App
