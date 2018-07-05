import React from 'react';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			value: ''
		}
		this.onChangeHandle = this.onChangeHandle.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	onChangeHandle(event){
		this.setState({value: event.target.value})
	}
	onSubmit(event){
		event.preventDefault();
		this.props.add(this.state.value)
	}
    render() {
        return (
        	<div className="formContainer">
	            <form onSubmit={event => this.onSubmit(event)}>
	            	<label>Add a task</label>
	            	<input
	            		type="text"
	            		id="value"
	            		onChange={event => this.onChangeHandle(event)}
	            		/>
	            	<input
	            		type="submit"
	            		value="Submit" />
	            </form>
	        </div>
        );
    }
}


export default TodoForm