import QuoteHub from "./quotehub.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import Quotes from './pages/quote.jsx';
import About from './pages/about.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <QuoteHub />
    </Router>
  );
}

export default App;
