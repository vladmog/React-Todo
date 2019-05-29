// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

const ToDoList = props => {
    return (
        <div>
            {props.ToDoArray.map(task => (
                <ToDo number = {task} />
            ))}
        </div>
    )
}

export default ToDoList;