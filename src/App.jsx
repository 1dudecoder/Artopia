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

const slidesData = [
  {
    id: 1,
    img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
  },
  {
    id: 2,
    img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
  },
  {
    id: 3,
    img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
  },
  {
    id: 4,
    img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
  },
  {
    id: 5,
    img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
  },
  {
    id: 6,
    img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
  },
  {
    id: 7,
    img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
  },
  {
    id: 8,
    img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
  },
  {
    id: 9,
    img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
  },
  {
    id: 10,
    img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
  },
  {
    id: 11,
    img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jp",
  },
  {
    id: 12,
    img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
  },
];
