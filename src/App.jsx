import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Quotes from './pages/quote.jsx';
import About from './pages/about.jsx';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />         {/* Correct: Home page at root */}
        <Route path="/quote" element={<Quotes />} />  {/* Correct: Quotes page */}
        <Route path="/about" element={<About />} />   {/* Correct: About page */}
      </Routes>
  
  );
}

export default App;
