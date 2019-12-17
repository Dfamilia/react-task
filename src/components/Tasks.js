import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

export default class Tasks extends Component {
    render(){
        return (this.props.tasks.map(task => {
            // <Task task={task} />
        })
        )
    }
}

//estableciendo proptypes
Tasks.propTypes={
    tasks: PropTypes.array.isRequired
}