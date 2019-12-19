import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import TaskForm from './TaskForm';

export default class Tasks extends Component {
    render(){
        // return a Task's component list
        const taskGroup = this.props.tasks.map(task => <Task task={task} key={task.id} handlerDeleteTask={this.props.handlerDeleteTask} />);
        return (
            <div className="container">
                <div className="row">
                     <TaskForm handlerAddTask={this.props.handlerAddTask}/>
                    {taskGroup}
                </div>
            </div>
        )
    }
}

//estableciendo proptypes
Tasks.propTypes={
    tasks: PropTypes.array.isRequired
}