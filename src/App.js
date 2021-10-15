// import logo from './logo.svg';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
// import TextForm from './Component/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtiles" AboutText="ABOUT-TextUtliles" />
      <div className="container my-3">
        {/* <TextForm heading="Enter the Text to Analyze"/> */}
        <About />
      </div>

  </>
  );
}

export default App;


