import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import $ from 'jquery';
import  Home from './Home' ;
import  About from './About';
import  Atlanta from './Atlanta';
import  Images from './Images';
import  MayorMessage from './MayorMessage';

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]


class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <BootstrapNavBar />
            <div className="container main">
              <h1>Main App</h1>
            </div>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/one'component={About} />
            <Route exact={true} path='/two' component={Atlanta} />
            <Route exact={true} path='/three' render={()=>(
              <Images imagesArray={atlImages} />
               )} />
            <Route exact={true} path='/four' component={MayorMessage} />
          </div>
      </Router>
    );
  }
}

export default App;
