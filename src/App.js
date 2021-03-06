import React from 'react';
import marked from 'marked';
import InputText from './components/InputText';
import OutputText from './components/OutputText';
import Button from './components/Button';

// Set parameters for Marked.js
var renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  var link = marked.Renderer.prototype.link.apply(this, arguments);
  return link.replace('<a', '<a target="_blank"');
}

marked.setOptions({
  breaks: true,
  renderer: renderer
});
//

// Default input text
const defaultInputText = 
`# Markdown preview

Welcome to my markdown previewer. 

Check out this site's source code at my [GitHub](https://github.com/linardsblk/md-previewer).

## Here are some examples:
\`You can write code like this...\`

...or write multiline code like this:
\`\`\`
int a = 0;
a++;
cout << a;
\`\`\`

Write lists:
* One
* Two 
* Three

1. Element1
2. Element2

> Write quoted text 

**bold text example**


See more examples [here](https://www.markdownguide.org/basic-syntax/)


This page was made using [Reactjs](https://reactjs.org/)

![React](./reactlogo.png)
`
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultInputText,
      output: {
        __html: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.parseMarkdown = this.parseMarkdown.bind(this);
    this.deleteText = this.deleteText.bind(this);
    this.resetText = this.resetText.bind(this);
    this.copyToClipBoard = this.copyToClipBoard.bind(this);
  };

  componentDidMount() {
    this.parseMarkdown(this.state.input);
  }

  handleChange(element) {
    if(element) {
      this.setState({
        input: element.target.value
      });

      this.parseMarkdown(element.target.value);
    }
  }

  parseMarkdown(inputText) {

    if(inputText || inputText === '') {
      this.setState({
        output: {__html: marked(inputText)}
      });
    }
  }

  deleteText() {
    this.setState({
      input: '',
      output: {__html: ''}
    });
  }

  resetText() {
    this.setState({
      input: defaultInputText,
      output: {__html: marked(defaultInputText)}
    });
  }

  copyToClipBoard() {
    navigator.clipboard.writeText(this.state.input);
  }

  render() {
    return (
      <div className="container">
        <InputText handleChange={this.handleChange} value={this.state.input}/>
        <Button onClick={this.deleteText} text='Delete text' type='btn-danger' icon='delete'/>
        <Button onClick={this.resetText} text='Reset text' type='btn-primary' icon='refresh'/>
        <Button onClick={this.copyToClipBoard} text='Copy to clipboard' type='btn-secondary' icon='file_copy'/>
        <OutputText value={this.state.output}/>
      </div>
    );
  };
}

