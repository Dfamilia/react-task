import React, { Component } from 'react';
//forma que utilizan de llamar css, !!!recomendado!!!
//StyleSheet.create({}) propiedad del componente React para utilizar css
//container objeto que hace la funcion de selector
//style={styleClass.container} forma de invocar el estilo creado
//style={{width: 10px}} forma de crear estilo directamente
// const styleClass= StyleSheet.create({
//     container: {

//     }
// })
export default class Navigations extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark" /*style={styleClass.container} */>
                <span className="text-white">
                    Tasks &nbsp; 
                    <span className="badge badge-pill badge-light font-weigth-bold">
                        {this.props.countTask}
                    </span>
                </span>
            </nav>
        )
    }
}
