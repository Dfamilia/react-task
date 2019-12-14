import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Components.css';

export default class Task extends Component {


    render() {
        //destructuring para task tenga el valor del key task dentro del objeto props{task:|{...}|}
        const { task } = this.props;

        //si done =true contatena la clase complete al className del div con if-ternario
        return <article className={"task_article" + ((task.done) ? " complete":"") }>
            <div className="task_header">
                <header>{task.title}</header>
                <section className="task_options">
                    <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
                    <button id="button" onClick={this.props.deleteTask.bind(this, task.id)}> x </button>
                </section>
            </div>
            <section className="task_content">
                {task.description}
            </section>
        </article>

    }
} 

Task.propTypes = {
    task: PropTypes.object.isRequired
}