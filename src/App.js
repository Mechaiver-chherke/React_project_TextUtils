
import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert= (message, type)=>{
    setalert({
      msg : message,
      type : type
    }) 
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Has Been Enabled","success");
      document.title = ('TextUtils - Dark Mode');
    }
     else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
     showAlert("Light Mode Has Been Enabled","success");
     document.title = ('TextUtils - Light Mode');
     }
  }

  return (
    <>
       
    <BrowserRouter>  
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
    <Alert alert={alert}/>
    <div className="container my-3 ">
    <div className="container"></div>   
      <Routes>
      <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter Your Text Below" mode={mode}/> }></Route>
      <Route path='/about' element={<About mode={mode}/>}></Route>
      </Routes>   
      </div>    
      <div>
  

     
  </div>     
  </BrowserRouter>
           
    
   
</>

  );
}

export default App;
