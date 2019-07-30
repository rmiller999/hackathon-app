import React from 'react';
import './App.css';
import Map from './Map';


function App() {
  return (
    <>
    <body>
      <h1 className="title">Welcome to our app!!! </h1>
      <Map />
    </body>
    <footer className="menu">
      <div><button className="buttons"><img src="/health.png"/>Health</button></div>
      <div><button className="buttons"><img src="/food.png"/>Food</button></div>
      <div><button className="buttons"><img src="/shelter.png"/>Shelter</button></div>
      <div><button className="buttons"><img src="/clothing.png"/>Clothing</button></div>
    </footer>
    </>
  );
}

export default App;
