import React from 'react';

const TodoForm = props => {
    return (
        <div class = "toDoForm">
            <form>
                <input 
                    placeholder = "ToDo"
                    name = "task" //make sure this matches up with line below
                    value = {props.task}
                    onChange = {props.myChangeFunction}
                    
                />
                <button type = "submit" onClick = {props.myClickFunction}>
                    Add
                </button>
                <button onClick = {props.clearCompletedFunction}>
                    Clear completed
                </button>
            </form>
        </div>

    )
}

export default TodoForm;