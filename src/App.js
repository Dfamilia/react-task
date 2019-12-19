import React, { Component } from 'react';
import './css/App.css';
import {todos} from './server/todos.json';
import Navigations from './components/Navigations';
import Tasks from './components/Tasks';

//pagina web para colores: www.uigradients.com/#shroomhaze
export default class App extends Component {
  state={
    //todos es igual todos: todos en ES6
    todos
  }
  
  handlerAddTask=(task)=>{
    task.id = this.state.todos.length;
    this.setState({
      todos:[...this.state.todos, task]
    })
  }

  handlerDeleteTask=(taskIndex)=>{
    console.log(taskIndex);
    const newTodos = this.state.todos.filter(task => task.id !== taskIndex)
    this.setState({
      todos: newTodos
    })
  }
  
  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        
          {/* Navigation Component */}
          <Navigations countTask={this.state.todos.length}/>
          
          {/* Tasks Component */}
          <Tasks tasks={this.state.todos} 
            handlerAddTask={this.handlerAddTask} 
            handlerDeleteTask={this.handlerDeleteTask} 
          />
      </div>
    )
  }
}
