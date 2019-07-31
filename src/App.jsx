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
        <h1 className="title"><img src="/logo3.png" class="logo"/></h1>
      </body>
      <div className="App">
      
        <Map shelters={filteredLocations} />
        

      </div>

      <footer className="menu">
        <div>
          <button onClick={() => this.filterHandler("health")}  
          className="buttons"><img src="/health.png" class="navButton"/>Health</button>
        </div>
        <div>
          <button onClick={() => this.filterHandler("food")}  
          className="buttons"><img src="/food.png" class="navButton"/>Food</button>
        </div>
        <div>
          <button onClick={() => this.filterHandler("housing")} 
          className="buttons"><img src="/shelter.png" class="navButton"/>Housing</button>
        </div>
        <div>
          <button onClick={() => this.filterHandler("clothing")} 
          className="buttons"><img src="/clothing.png" class="navButton"/>Clothing</button>
        </div>
      </footer>

    </>
    );
  }
}

export default App;
