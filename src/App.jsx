import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LetsTalk from './pages/LetsTalk';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letstalk" element={<LetsTalk />} />
      </Routes>
    </Router>
  );
}

export default App;

