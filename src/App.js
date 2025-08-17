import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import your pages
import Sinksar from "./pages/Sinksar/Sinksar";
import BahireHasab from "./pages/BahireHasab/BahireHasab";
import Gitsawe from "./pages/Gitsawe/Gitsawe";
import Bible from "./pages/Bible/Bible";
import WudasieMariam from "./pages/WudasieMariam/WudasieMariam";
import Seatat from "./pages/Seatat/Seatat";
import Home from "./pages/Home/Home";
import Hibuat from "./pages/Hibuat/Hibuat";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sinksar" element={<Sinksar />} />
          <Route path="/bahirehasab" element={<BahireHasab />} />
          <Route path="/gitsawie" element={<Gitsawe />} />
          <Route path="/bible" element={<Bible />} />
          <Route path="/wudasie" element={<WudasieMariam />} />
          <Route path="/seatat" element={<Seatat />} />
          <Route path="/hibuat" element={<Hibuat />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
