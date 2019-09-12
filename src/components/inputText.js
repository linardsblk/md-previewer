import React from 'react';

const style = {
    marginTop: '40px'
};

export default class InputText extends React.Component {
    render ()
    {
        return <textarea style={style} value={this.props.value} onChange={this.props.handleChange} id='editor'className='form-control' rows={3}></textarea>
    }
}