import './App.css';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import Form from './components/Form';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => setAlert(null),1500);
  }

  const [mode, setMode] = useState("light");

  const handleMode = (data) =>{
    console.log(data);
    setMode(data);
    switch(data){
      case 'success':
        document.body.style.backgroundColor = "green";
        showAlert(" Green enabled","success");
        document.title = "TextUtils-GreenMode"
        break;
      case 'danger':
        document.body.style.backgroundColor = "red";
        showAlert(" Red enabled","success");
        document.title = "TextUtils-RedMode"
        break;
      case 'primary':
        document.body.style.backgroundColor = "blue";
        showAlert(" Blue enabled","success");
        document.title = "TextUtils-BlueMode"
        break;
      case 'dark':
        document.body.style.backgroundColor = "black";
        showAlert(" Black enabled","success");
        document.title = "TextUtils-DarkMode"
        break;
      default:
        document.body.style.backgroundColor = "white";
        showAlert(" Light enabled","success");
        document.title = "TextUtils-LightMode"
        break;
    }
  }
  
  return (
    
    <>
      <Navbar textUtils='textUtils' aboutTextUtils='aboutTextUtils' 
      mode={mode} handleMode={handleMode}></Navbar>
      <Alert alert = {alert}></Alert>  
      <div className="container">
        <Form showAlert = {showAlert} heading ="This is the heading" mode={mode}></Form>
        <AboutUs></AboutUs>
      </div>
    </>
    
  );
}

export default App;
