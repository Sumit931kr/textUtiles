// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';



function App() {
  const [value, setvalue] = useState({
                    color: 'white',
                    backgroundColor: '#140038',
                    border: '1px solid white',
                    borderRadius : '10px'
  })
  const [mode, setmode] = useState('light') // Wheather dark mode is enabled or not
  const [moode, setmoode] = useState('dark') // Wheather dark mode is enabled or not
  const [textcolor, settextcolor] = useState(
    {
      color : 'black'
    }
  )
  const togglemode = () => {
    
    if (mode === 'light') {
      setmode('dark')
      settextcolor({
        color: 'white'
      })
      setmoode('light')
      document.body.style.backgroundColor = '#140038';
    }
    else {
      setmode('light')
      settextcolor({
        color: 'black'
      })
      setmoode('dark')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtiles" moode={moode} mode={mode} togglemode={togglemode} textcolor={textcolor} value={value} />
    <Alert Alert="This is Alert"/>
      <div className="container my-3">
        <TextForm mode={mode}/>
        <About mode={mode}/>
      </div>

    </>
  );
}

export default App;


