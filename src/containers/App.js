import React from 'react';
import style from './App.css';
import Title from './../components/Title';
import TodoList from './../components/TodoList'

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }]
        };
        this.removeTodo = this.removeTodo.bind(this)
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        console.log('trying to remove')
        this.setState({
            data: remainder
        });
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title counter={this.state.data.length} />
                <TodoList tasks={this.state.data} remove={this.removeTodo} />
            </div>

        );
    }
}

export default App;