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
    selectedLocation: LOCATIONS.locations[0],
    filterValue: "housing"
  } 
  this.filterHandler = this.filterHandler.bind(this)
}

filterHandler(filterValue) {
  this.setState({filterValue})
} 


render() {
  const filteredLocations = this.state.locations.filter (
    location => (location.filterValue === this.state.filterValue)
  )


  return (
      <div className="App">
      
        <Map shelters={filteredLocations} />
        <button onClick={() => this.filterHandler("clothes")}>Clothes</button>
        <button onClick={() => this.filterHandler("housing")}>Housing</button>
        <button onClick={() => this.filterHandler("food")}>Food</button>
        <button onClick={() => this.filterHandler("healthcare")}>Healthcare</button>

      </div>
    );
  }
}

export default App;
