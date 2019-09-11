import React from 'react';

export default class OutputText extends React.Component {
    render ()
    {
        return <div readOnly dangerouslySetInnerHTML={this.props.value} className='form-control' id='preview' rows={3}></div>
    }
}