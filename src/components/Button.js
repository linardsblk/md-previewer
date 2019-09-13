import React from 'react';

const style = {
    fontSize: '18px',
    marginTop: '10px',
    marginRight: '5px',
    lineHeight: '24px'
}
export default class InputText extends React.Component {
    render(){
        return <button onClick={this.props.onClick} style={style} type='button' className={`btn ${this.props.type}`}><i style={{fontSize: '24px'}} className='material-icons md-18'>{this.props.icon}</i>{this.props.text}</button>
    }
}