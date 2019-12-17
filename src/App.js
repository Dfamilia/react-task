import React, { Component } from 'react';
import './css/App.css';
import {todos} from './todos.json';
import Navigations from './components/Navigations';
import Tasks from './components/Tasks';

//pagina web para colores: www.uigradients.com/#shroomhaze
export default class App extends Component {
  state={
    //todos es igual todos: todos en ES6
    todos
  }
  
  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
          <Navigations />
          <Tasks tasks={this.state.todos} />
      </div>
    )
  }
}
