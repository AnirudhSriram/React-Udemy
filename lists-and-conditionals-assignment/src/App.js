import React from 'react';
import './App.css';
import Validation from './components/Validation';
import Char from './components/Char';

class App extends React.Component {
  state = {
    text: [],
    length: null,
    stringText: ''
  }

  getLengthHandler = (event) => {
    let tempText = event.target.value.split('');
    let temp = event.target.value.length;
    this.setState({
      length: temp,
      stringText: event.target.value,
      text: tempText
    });
  }

  removeChar = (index) => {
    console.log(index);
    let tempText = this.state.text;
    tempText.splice(index, 1);
    console.log(tempText);
    this.setState({
      text: tempText,
      stringText : tempText.join(''),
      length : tempText.length
    })
  }

  render() {
    const renderChars = this.state.text.map((char, index) => <Char key={index} char={char} click={() => this.removeChar(index)} />)
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.getLengthHandler(event)} value={this.state.stringText} />
        {this.state.length >0 ?<p>{this.state.length}</p>:null}
        <Validation length={this.state.length} />
        {renderChars}
      </div>
    );
  }
}

export default App;
