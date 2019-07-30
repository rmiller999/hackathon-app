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

    <>
      <body>
        <h1 className="title">Welcome to our app!!! </h1>
      </body>
      <div className="App">
      
        <Map shelters={filteredLocations} />
        <button onClick={() => this.filterHandler("clothes")}>Clothes</button>
        <button onClick={() => this.filterHandler("housing")}>Locations</button>
        <Map shelters={this.state.locations} />


        

      </div>

      <footer className="menu">
        <div><button onClick={this.state.filterValue='med'} 
        className="buttons"><img src="/health.png"/>Health</button></div>
        <div><button onClick={this.state.filterValue='food'} 
        className="buttons"><img src="/food.png"/>Food</button></div>
        <div><button onClick={this.state.filterValue='shelter'} 
        className="buttons"><img src="/shelter.png"/>Shelter</button></div>
        <div><button onClick={this.state.filterValue='clothing'} 
        className="buttons"><img src="/clothing.png"/>Clothing</button></div>
      </footer>

    </>
    );
  }
}

export default App;
