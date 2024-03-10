import GallaryCompo from "./component/common/gallaryCompo/GallaryCompo";
import Dasboard from "./component/dashboard/Dasboard";
import { WalletConnect } from "./component/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="select-none">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WalletConnect />} />
          <Route path="/dashboard" element={<Dasboard />} />
          <Route path="/history" element={<Dasboard />} />
          <Route path="/texttoimage" element={<Dasboard />} />
          <Route path="/imagetoimage" element={<Dasboard />} />
          <Route path="/buymore" element={<Dasboard />} />
          <Route path="/profile" element={<Dasboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

