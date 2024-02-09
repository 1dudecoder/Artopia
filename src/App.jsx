import Dasboard from "./component/dashboard/Dasboard";
import { WalletConnect } from "./component/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<WalletConnect />} />
          <Route path="/dashboard" element={<Dasboard />} />
          <Route path="/history" element={<Dasboard />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
