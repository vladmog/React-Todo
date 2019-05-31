// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';


const ToDoList = props => {
    //console.log('Todolist', props.ToDoArray)
    return (
        <div class = "list">
            {props.ToDoArray.map(Todo =>  (
                <ToDo 
                    printout = {Todo}
                    toggleSwitch = {props.toggleSwitch}
                    key = {Todo.id}
                />
                
            ))}
        </div>
    )
}

export default ToDoList;