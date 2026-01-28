import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Edit from "./EditPage";
import Thank from "./Thank";
import ProtectedDashboard from "./ProtectedDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/edit/:id" element={<Edit />} />
   <Route path="/dashboard" element={<ProtectedDashboard />} />
<Route path="/thank" element={<Thank />} />
<Route path="/thanks" element={<Thank />} />
            <Route path="*" element={<Form />} />
    </Routes>
  );
};

export default App;
