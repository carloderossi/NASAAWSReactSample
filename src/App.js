import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


const App = () => {
   const [nasaimgs, setNasaimgs] = useState([]);
   useEffect(() => {
      fetch('https://api.nasa.gov/planetary/apod?api_key=qHRNOGuPFkO0alZ1AfyaVx2Y5ypOhjFHp5weq8ol&count=1&hd=true')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setNasaimgs(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
    <div className="nasaimgs-container">
       {nasaimgs.map((nasaimg) => {
          return (
             <div className="nasaimg-id" key={nasaimg.url}>
                <h2 className="nasaimg-title">{nasaimg.title}</h2>
                <img src={nasaimg.hdurl} className="imgcenter" alt='NASA' width='50%' />
                <p className="nasaimg-explanation">{nasaimg.explanation}</p>
                <p className="nasaimg-hdurl">{nasaimg.hdurl}</p>
             </div>
          );
       })}
    </div>
    );
 };
 
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
