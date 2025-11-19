import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Both_method from './Both_method'
// import Calling from './Calling'
// import Post_api from './Post_api'
// import PatchUsers from './PatchUsers'
import Useform from './Useform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Calling/>
    <Post_api/> */}
    {/* <Both_method/> */}
  {/* < PatchUsers/> */}
  <Useform/>
    </>
  )
}

export default App
