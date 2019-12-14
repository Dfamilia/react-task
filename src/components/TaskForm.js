import React, { Component } from 'react';
// import PropsTypes from 'prop-types';

export default class TaskForm extends Component{

    state = {
        title: '',
        description:''
    }

    //execute when form is submited
    onEnviar = (event)=>{
        this.props.addTask(this.state);
        event.preventDefault(); 
    }

    //execute on each elements inputs's text
    onCambio = (event) => {
        
        //change my state's value on each properties name
        this.setState({
            [event.target.name]: event.target.value
        })

        //give me the value of the atribute name of my form's element
        // console.log(event.target.name);
        //give me the value of my form element target
        // console.log(event.target.name, event.target.value);
        //give me the element of target on each onchange
        // console.log(event.target);
    }

    //paint an item on the browser
    render(){
        return (
            <form onSubmit= {this.onEnviar}>
                <input 
                    name="title" 
                    type="text" 
                    placeholder="Write a Task" 
                    onChange={this.onCambio}
                    value={this.state.title}/>
                
                <br/>
                <textarea 
                    name="description" 
                    placeholder="Write a Description" 
                    onChange={this.onCambio}
                    value={this.state.description}>   
                    </textarea>
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}
