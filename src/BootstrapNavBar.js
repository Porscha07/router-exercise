import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class BootstrapNavBar extends Component{
  render(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">WebSiteName</a>
		    </div>
		    <ul className="nav navbar-nav">
		    	<li><Link to="/">Home</Link></li>
		      	<li><Link to="/one">One</Link></li>
		      	<li><Link to="/two">Two</Link></li>
		      	<li><Link to="/three">Three</Link></li>
		      	<li><Link to="/four">Four</Link></li>
		    </ul>
		  </div>
		</nav>  
	)
  }
}

export default BootstrapNavBar