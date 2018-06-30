import React from 'react';
import App from './../containers/App'

var instanceApp = new App()

class Title extends React.Component {
    render() {
        return (
        	<div className="container">
	            <h1>To do App</h1>
	            <h3>Number of tasks: {instanceApp.countingLengthOfData()}</h3>
	        </div>
        );
    }
}

export default Title;