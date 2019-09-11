import React from 'react';
import marked from 'marked';
import InputText from './components/inputText';
import OutputText from './components/outputText';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'test',
      output: {
        __html: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.parseMarkdown = this.parseMarkdown.bind(this);
  };

  handleChange(element) {
    if(element) {
      this.setState({
        input: element.target.value
      });

      this.parseMarkdown();
    }
  }

  parseMarkdown() {

    if(this.state.input) {
      this.setState({
        output: {__html: marked(this.state.input)}
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-md'>
            <InputText handleChange={this.handleChange} value={this.state.input}/>
          </div>
          <div className='col-md'>
            <OutputText value={this.state.output}/>
          </div>
        </div>
      </div>
    );
  };
}

