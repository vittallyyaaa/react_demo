import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Support from "./pages/Support/Support";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter basename="/react_demo">
      <div className="app">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;