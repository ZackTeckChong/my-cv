import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Portfolio from './Pages/Portfolio';
import Education from './Pages/Education';
import { Route, Routes } from 'react-router-dom';
import "../src/styles.css"
import GlobalStyles from '@mui/material/GlobalStyles';

function App() {
  
  return ( 
    <>
      <Navbar />
        <div className='container'>
          <GlobalStyles />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Education" element={<Education />} />
          </Routes>
        </div>
    
    </>
  )
  
}

export default App;
