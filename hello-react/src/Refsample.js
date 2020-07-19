import React, { Component } from 'react';

class Refsample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          ref={this.input} 
        />
        <input 
          type="button"
          value="Focus the text input"
          onClick={this.handleFocus}
        />
      </div>
    );
  }
}

export default Refsample;