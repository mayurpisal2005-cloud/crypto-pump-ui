import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scan from "./pages/Scan";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import About from "./pages/About";
import MarketTicker from "./components/MarketTicker";

function App() {

  return (

    <BrowserRouter>

      <div className="min-h-screen bg-zinc-950 text-white">

        <Navbar />
        <MarketTicker />

        <Routes>
          

          <Route path="/" element={<Home />} />

          <Route path="/predict" element={<Predict />} />

          <Route path="/scan" element={<Scan />} />

          <Route path="/about" element={<About />} />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;