import React from 'react';

const style = {
    marginTop: '20px'
};
export default class OutputText extends React.Component {
    render ()
    {
        return <div style={style} readOnly dangerouslySetInnerHTML={this.props.value}  id='preview' className="jumbotron p-3 lighten-5"></div>
    }
}