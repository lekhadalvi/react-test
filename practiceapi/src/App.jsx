import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Dashboard from "./Dashboard";
import Edit from "./EditPage";
import Thank from "./Thank";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/thank" element={<Thank />} />
    </Routes>
  );
};

export default App;
