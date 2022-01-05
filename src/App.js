
import './App.css';
import './index.css';
import Home from './pages/Home';
import Otra from './pages/Otra';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import firebase, { FirebaseContext } from './firebase/index'; 



function App() {
  return (

    <FirebaseContext.Provider
    value={{firebase}}
    >
    
    <Router>

      <Routes>

        <Route path='/' exact element={<Home/>}  />
        <Route path='/otra' exact element={<Otra/>}  />

      </Routes>

    </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
