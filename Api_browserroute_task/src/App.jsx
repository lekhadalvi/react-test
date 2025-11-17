import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import InvestorsList from "./Investor";
import Investorform from "./Investorform";
import HOME from "./HOME";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/investors" element={<InvestorsList />} />
        <Route path="/investorform" element={<Investorform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
