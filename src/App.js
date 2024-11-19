import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
      <Navbar title="MyWebsite" mode={mode} toggleMode={toggleMode} />
      <div>
        <div className="container" >
          <TextForm heading="Write Text Below" mode={mode} />
          {/* <About/> */}
        </div>
      </div>
    </>
  );
}

export default App;
