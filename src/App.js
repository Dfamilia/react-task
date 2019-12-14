import React, { Component } from 'react';
import './css/App.css';
import TasksCollection from './sample/tasksCollection.json';

//Component
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

// console.log(task);
class App extends Component {
  state = {
    TasksCollection: TasksCollection
  }

  //add new task to TaskCollection by updating his Object's array
  addTask = (task) => {
    const newTask = task;
    newTask["id"]=this.state.TasksCollection.length;
    newTask["done"]=false;

    this.setState({TasksCollection: [...this.state.TasksCollection, newTask]})
    
  }
  // delete a task from TaskCollection by filter
  deleteTask= (id) => {
    const newTask = this.state.TasksCollection.filter(task => task.id !== id)
    
    this.setState({
      TasksCollection: newTask
    });
  }

  //change a task to complete
  checkDone= (id) => {
    const newTask = this.state.TasksCollection.map(task => {
      if(task.id === id){
        task.done = !task.done;
      }
      return task
    });

    this.setState({
      TasksCollection: newTask
    })
  }

  render() {
    return (
      <div id="app_container">
        <TaskForm addTask={this.addTask} />
        <Tasks tasks={this.state.TasksCollection} 
        deleteTask={this.deleteTask} 
        checkDone={this.checkDone}/>
      </div>
    )
  }
}

export default App;

