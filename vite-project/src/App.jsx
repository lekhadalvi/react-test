import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getdata } from './Api_calling'

function App() {
  const [data, setdata] = useState("")

  useEffect(() => {
   getdata();
  }, [])


  return (
    <>
    hello
    </>
  )
}

export default App
