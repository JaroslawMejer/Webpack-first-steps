import React from 'react';
import uuid from 'uuid'
import style from './App.css';
import Title from './../components/Title';
import TodoList from './../components/TodoList'
import TodoForm from './../components/TodoForm'
import { hot } from 'react-hot-loader';


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
        this.addTodo = this.addTodo.bind(this)
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
                <TodoForm tasks={this.state.data} add={this.addTodo} />
                <TodoList tasks={this.state.data} remove={this.removeTodo} />
            </div>

        );
    }
}

export default hot(module)(App);