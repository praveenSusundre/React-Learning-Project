import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="MyWebsite" mode={mode} toggleMode={toggleMode} />
        <div>
          <div className="container" >
            <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/" element={<TextForm heading="Write Text Below" mode={mode} />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
