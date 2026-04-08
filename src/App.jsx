import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Search from "./pages/Search/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Home setQuery={setSearchTerm} query={searchTerm} />}
          ></Route>
          <Route
            path="/home"
            element={<Home setQuery={setSearchTerm} query={searchTerm} />}
          ></Route>
          <Route
            path="/search"
            element={<Search apiData={searchTerm} />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
