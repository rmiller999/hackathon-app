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
      <div className="App">
      
        <Map shelters={this.state.locations} />


      </div>
    );
  }
}

export default App;
