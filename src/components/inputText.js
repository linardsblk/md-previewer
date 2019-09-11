import React from 'react';

export default class InputText extends React.Component {
    render ()
    {
        return <textarea value={this.props.value} onChange={this.props.handleChange} id='editor'className='form-control' rows={3}></textarea>
    }
}