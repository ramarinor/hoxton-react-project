import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Paints from "./pages/Paints";
import Samples from "./pages/Samples";
import PaintDetails from "./pages/PaintDetails";
import NotFound from "./pages/NotFound";
import SampleDetails from "./pages/SampleDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="paints" element={<Paints />} />
        <Route path="samples" element={<Samples />} />
        <Route path="paints/:id" element={<PaintDetails />} />
        <Route path="samples/:id" element={<SampleDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
