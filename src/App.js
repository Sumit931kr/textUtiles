// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



function App() {
const [alert, setalert] = useState(null)
  const [mode, setmode] = useState('light') // Wheather dark mode is enabled or not
  const [moode, setmoode] = useState('dark') 
  const [textcolor, settextcolor] = useState(
    {
      color : 'black'
    }
  )
  const togglemode = () => {
    
    if (mode === 'light') {
      setmode('dark')
      settextcolor({  color: 'white' })
      showalert("Dark Mode has been Enabled","success")
      setmoode('light')
      document.body.style.backgroundColor = '#412e64';
  
    }
    else {
      setmode('light')
      settextcolor({color: 'black' })
      showalert("Light Mode has been Enabled","success")
      setmoode('dark')
      document.body.style.backgroundColor = 'white';
  
    }
  }

const showalert = (message, type)=> {
  setalert({
msg : message,
type : type,
  }
 )
 setTimeout(() => {
   setalert(null)
 }, 1500);
}



  return (
    <>
        <Router>
      <Navbar title="TextUtiles" moode={moode} mode={mode} togglemode={togglemode} textcolor={textcolor} />
    <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
        
          <Route exact path="/">
          <TextForm mode={mode} showalert={showalert}/>
         
          </Route>
        </Switch>
       
        {/* <About mode={mode}/> */}
      </div>
      </Router>

    </>
  );
}

export default App;


