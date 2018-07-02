import React from 'react';


class Title extends React.Component {
    render() {
        return (
        	<div className="container">
	            <h1>To do App</h1>
	            <h3>Number of tasks: {this.props.counter}</h3>
	        </div>
        );
    }
}

export default Title;