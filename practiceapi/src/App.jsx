import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Dashboard from "./Dashboard";
import EditPage from "./EditPage";

const Thank = () => <h1 className="p-5">Thank You</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/thank" element={<Thank />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
};

export default App;
