import { useContext, useState } from 'react'

import './App.css'
import { ContextMain } from './Context'

function App() {

const data = useContext(ContextMain)
  return (
    
   <>
    <h1>Hello World {data}</h1>
   </>
  )
}

export default App
