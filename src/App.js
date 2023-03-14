import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import All from "./pages/All";
import Blazers from "./pages/Blazers";
import Dress from "./pages/Dress";
import Skirts from "./pages/Skirts";
import Suits from "./pages/Suits";
import Tops from "./pages/Tops";
import Trousers from "./pages/Trousers";
import Layout from "./components/Layout";
import BestsellerAll from "./pages/BestSellerAll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bestseller" element={<BestsellerAll />} />
          <Route path="all" element={<All />} />
          <Route path="blazers" element={<Blazers />} />
          <Route path="dress" element={<Dress />} />
          <Route path="skirts" element={<Skirts />} />
          <Route path="suits" element={<Suits />} />
          <Route path="tops" element={<Tops />} />
          <Route path="trousers" element={<Trousers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
