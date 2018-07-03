import React from 'react';
import style from './TodoList.css'


const TodoList = props => <ul className={style.TodoList}> {props.tasks.map(todo => <li className={style.Todo} key={todo.id} onClick={e => {props.remove(todo.id)}}>{todo.text}</li>)}</ul>

export default TodoList