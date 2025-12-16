import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import EditPage from "./EditPage";
import Form from "./Form";
import Thank from "./Thank"

const App = () => {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<Form/>}/>
      <Route path="/Thank" element={<Thank/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/edit/:id" element={<EditPage/>}/>
    </Routes>

    
    </>
  )
}

export default App