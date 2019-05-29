import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  state = {
    toDo: [],
    task: "",
    id: "",
    completed: false
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      task: e.target.value
    })
  }

  addTask = e => {
    e.preventDefault()
    this.setState({
      toDo: [...this.state.toDo, this.state.task],
      task: ""
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList ToDoArray = {this.state.toDo}/>
        <TodoForm 
        task = {this.state.task} 
        myChangeFunction = {this.handleChange}
        myClickFunction = {this.addTask} />
      </div>
    );
  }
}

export default App;
