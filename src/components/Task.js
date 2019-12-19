import React, { Component } from 'react';
import '../css/Task.css'

export default class Task extends Component {
    // task = this.props.task;

    render() {
        return (
             
            <article className="col-md-4 ">{/* start article */}
                
                <section className="card text-center mt-4">{/* start Boostrap-Card */}
                    <section className="card-header font-weight-bold bgColor text-white">{/* start Boostrap-Card-Header */}
                        <h3>{this.props.task.title}</h3>
                        <span className="badge badge-pill badge-danger ml-2">{this.props.task.priority}</span>
                    </section>{/* end Boostrap-Card-Header */}
                   
                    <section className="card-body ">{/* start Boostrap-Card-Body */}
                        <p>{this.props.task.description}</p>
                        <p><mark>{this.props.task.responsible}</mark></p>
                    </section>{/* end Boostrap-Card-Body */}

                    <section className="card-footer">
                        <button className="btn btn-danger" 
                            onClick={this.props.handlerDeleteTask.bind(this, this.props.task.id)}>
                                x
                        </button>
                    </section>
                </section>{/*end Boostrap-Card  */}

            </article> /* end article */

        )
    }
}