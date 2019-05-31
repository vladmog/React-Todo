import React from 'react';


function ToDo (props) {
    console.log(props.printout)
    return (
        <div class = {`todo${props.printout.completed ? 'Completed' : ''}`} >
            <p onClick = {() => props.toggleSwitch(props.printout.id)}> {props.printout.task} </p>
        </div>
    )
}

export default ToDo;

