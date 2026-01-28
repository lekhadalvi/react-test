import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./Components/FormPage";
import Dashboard from "./Components/Dashboard";
import Thankyou from "./Components/Thankyou";
import { DataProvider } from "./Context/DataContext";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <DataProvider>
 <BrowserRouter>
   <ToastContainer />
   <Routes>
<Route path="/" element={<FormPage />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/thankyou" element={<Thankyou />} />
   </Routes>
 </BrowserRouter>
    </DataProvider>
  );
}

export default App;
