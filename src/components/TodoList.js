import React from 'react';


const TodoList = props => <ul> {props.tasks.map(li => <li key={li.id}>{li.text}</li>)}</ul>

export default TodoList