import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form>
                <input 
                    placeholder = "ToDo"
                    name = "task"
                    value = {props.task}
                    onChange = {props.myChangeFunction}
                    
                />
                <button type = "submit" onClick = {props.myClickFunction}>
                    Add
                </button>
            </form>
        </div>

    )
}

export default TodoForm;