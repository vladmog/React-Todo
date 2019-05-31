import React from 'react';
import './Todo.css';

function ToDo (props) {
    console.log(props.printout)
    return (
        <div className = {`todo${props.printout.completed ? 'Completed' : ''}`} >
            <p onClick = {() => props.toggleSwitch(props.printout.id)}> {props.printout.task} </p>
        </div>
    )
}

export default ToDo;

