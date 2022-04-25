import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DnaTest, GeneticDisorder, Home, SearchTest } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-disorder" element={<GeneticDisorder />} />
        <Route exact path="/search" element={<SearchTest />} />
        <Route exact path="/dna-test" element={<DnaTest />} />
      </Routes>
    </Router>
  );
}

export default App;
