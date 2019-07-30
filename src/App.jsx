import React from 'react';
import './App.css';
import Map from './Map';
import LOCATIONS from './LOCATIONS';
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    locations: LOCATIONS.locations,
    selectedLocation: LOCATIONS.locations[0]
  }
}
render() {
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
      <div className="App">
      
        <Map shelters={this.state.locations} />


      </div>
    );
  }
}

export default App;
