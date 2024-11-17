import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="MyWebsite" />
      <div className="container">
        <TextForm heading="Write Text Below"/>
      </div>
    </>
  );
}

export default App;
