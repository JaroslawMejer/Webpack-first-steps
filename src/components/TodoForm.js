import React from 'react';

class TodoForm extends React.Component {
	handleSubmit(event){
		console.log(document.getElementById('addTask').value + ' has been added');
		event.preventDefault();
	}
    render() {
        return (
        	<div className="formContainer">
	            <form onSubmit={this.handleSubmit}>
	            	<label>Add a task</label>
	            	<input
	            		type="text"
	            		id="addTask"
	            		/>
	            	<input
	            		type="submit"
	            		value="Submit"
	            		onClick={e => {this.props.add(document.getElementById('addTask').value)}}/>
	            </form>
	        </div>
        );
    }
}


export default TodoForm