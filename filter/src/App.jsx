import { useState } from 'react'

import './App.css'
import Search from './Search'
import Search2 from './Search2'
import Name1 from './Name1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Search/>
     <Name1/>
     <Search2/>
    </>
  )
}

export default App
