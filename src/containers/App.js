import React from 'react';
import style from './App.css';
import Title from './../components/Title'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            numberOfTasks: 0
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({
            data: data,
            numberOfTasks: this.state.numberOfTasks + 1
        });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({
        data: remainder,
        numberOfTasks: this.state.numberOfTasks - 1
        });
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title counter={this.state.numberOfTasks} />
            </div>

        );
    }
}

export default App;