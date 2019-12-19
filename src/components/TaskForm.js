import React, { Component } from 'react'

export default class TaskForm extends Component {
    state={
        title:'',
        responsible:'',
        description:'',
        priority:'low'
    }

    submit=(event)=>{
        event.preventDefault();

        let {title, responsible, description} = this.state;
        
        if(title && responsible && description){
            this.props.handlerAddTask(this.state)
        }  
        this.reset(event);
    }

    reset=(event) =>{
        event.preventDefault();
        this.setState({
            title:'',
            responsible:'',
            description:''
        })
    }

    change= (event)=>{
        // console.log(event.target.name, event.target.value) 
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.submit}>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Title"
                            onChange={this.change}
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="responsible"
                            className="form-control"
                            placeholder="Resposible"
                            onChange={this.change}
                            value={this.state.responsible}
                        /> 
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Description"
                            onChange={this.change}
                            value={this.state.description}
                        /> 
                    </div>
                    <div className="form-group">
                        <select name="priority"
                        onChange={this.change}
                         className="form-control">
                            <option>low</option>
                            <option>medium</option>
                            <option>hight</option>
                        </select>
                    </div>
                    
                    <input type="reset" className="btn btn-danger ml-2" value="Reset" onClick={this.reset}/>

                    <button type="submit" className="btn btn-success ml-5">Submit</button>

                </form>

                
            </div>
        )
    }
}
