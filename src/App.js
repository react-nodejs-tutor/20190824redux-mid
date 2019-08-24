import React, { Component } from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import ColorSquareContainer from './containers/ColorSquareContainer';
import ColorList from './components/ColorList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CounterContainer />
				<ColorSquareContainer />
				<ColorList />
			</div>
		);
	}
}

export default App;
