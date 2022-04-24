import { useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DnaTest, GeneticDisorder, Home, SearchTest } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-disorder" element={<GeneticDisorder />} />
        <Route path="/search" element={<SearchTest />} />
        <Route path="/dna-test" element={<DnaTest />} />
      </Routes>
    </Router>
  );
}

export default App;
