
import './App.css';
import Home from './pages/Home';
import Otra from './pages/Otra';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>

      <Routes>

        <Route path='/' exact element={<Home/>}  />
        <Route path='/otra' exact element={<Otra/>}  />

      </Routes>

    </Router>
  );
}

export default App;
