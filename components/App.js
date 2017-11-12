import React from 'react';
import logo from '../img/dragon.jpg'; // relative path to image
import '../sass/App.scss';

class App extends React.Component{
	constructor(props) {
	    super(props);

	    this.state = { x: 0, y: 0 };
	}

	_onMouseMove(e) {
	  this.setState({ x: e.screenX, y: e.screenY });
	}

	render() {
	  const { x, y } = this.state;
	  return (
	  	<div onMouseMove={this._onMouseMove.bind(this)}>
	  		<DisplayAnImage />
	    	<h1 class='mouse-coords'>Mouse coordinates: x:{ x } | y:{ y }</h1>
	  	</div>
	  	);
	}  
}

class DisplayAnImage extends React.Component {
  render() {
    return ( 
        <img src={logo} alt={"logo"}/>
    );
  }
}

export default App