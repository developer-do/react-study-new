import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked:false,
    validated: false
  }

  

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
    this.passwordInput.focus();
    console.log(this.passwordInput);
    
    setTimeout(() => {
      if(this.state.validated) {
        alert("정답입니다.");
      } else {
        alert("틀렸습니다.");
        this.inputInit();
      }
    }, 0);
  }

  handelKeyPress = (e) => {
    if(e.key === "Enter") {
      this.handleButtonClick();
    }
  }

  inputInit = () => {
    this.setState({
      password: ''
    });
  }

  render() {
    return (
      <div>
        <input 
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          ref={(ref) => this.passwordInput = ref}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
          onKeyPress={this.handelKeyPress}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;