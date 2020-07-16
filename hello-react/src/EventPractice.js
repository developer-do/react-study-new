import React, { Component } from 'react';

class EventPractice extends Component {
  
  state = {
    message: ''
  }

  render() {
    const { message } = this.state;
    return (
      
      <div>
        <h1>이벤트 연습</h1>
        <input 
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요."
          value={message}
          onChange={
            (e) => {
              this.setState({
                message: e.target.value
              });
              console.log(message);
            }
          }
        />
        <button onClick={
          () => {
            alert(message);
            this.setState({
              message: ''
            });
          }
        }>
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;