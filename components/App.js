import React from 'react';
import logo from '../img/dragon.jpg'; // relative path to image
import '../sass/App.scss';

class App extends React.Component{
	render() {
	  return (
	  		<DisplayAnImage />
	  	);
	}  
}

class DisplayAnImage extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = { x: 0, y: 0 };
	}

	_onMouseMove(e) {
	  this.setState({ x: e.screenX, y: e.screenY });
	}	
	
	render() {
	  	const { x, y } = this.state;
	    return ([ 
	    	<picture class='p-img-wrapper' onMouseMove={this._onMouseMove.bind(this)}> 
	        	<img src={logo} alt={"logo"}/>
	        </picture>,
	        <div class='mouse-coords'> Mouse coordinates: x:{ x } | y:{ y } </div>
	    ]);
	}
}

export default App