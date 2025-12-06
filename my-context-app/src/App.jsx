import { useContext } from 'react'
import {contextMain} from './Context'
import './App.css'


function App() {
  const data = useContext (contextMain)

  return (
    <>
    hello {data} 
    </>
  )
}

export default App
