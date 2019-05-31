import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import '../Todo.css';
//import Todo from './components/TodoComponents/Todo';


class App extends React.Component {
  state = {
    toDo: [],
    inputText: ""
  }

  
   
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      inputText: e.target.value,
    })
  }

  clearCompletedTasks = e => {
    e.preventDefault()
    this.setState(prevState => {
      return { toDo: prevState.toDo.filter(obj => {
        return obj.completed === false;
      })}
    })
  }


  completedToggleOnClick = id => {
      this.setState(prevState => {
        return {
          toDo: prevState.toDo.map(obj => {
            if (obj.id === id) {
              return {
                ...obj,
                completed: !obj.completed
              }
            }else{
              return obj
            }
          })
        }}
      )
    
  }

  addTask = e => {
    e.preventDefault()
    this.setState({
      toDo: [...this.state.toDo, 
        {task: this.state.inputText,
        id: Date.now(),
        completed: false}],
      inputText: ""
      
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <ToDoList ToDoArray = {this.state.toDo}
          toggleSwitch = {this.completedToggleOnClick}
        />

        <TodoForm 
          task = {this.state.inputText} 
          
          myChangeFunction = {this.handleChange}
          myClickFunction = {this.addTask} 
          clearCompletedFunction = {this.clearCompletedTasks}
        />

      </div>
    );
  }
}

export default App;
