import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import Refsample from './Refsample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends React.Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    )
  }
}

// class App extends Component {
//   render () {
//     return (
//       <div>
//         <ScrollBox ref={(box) => this.scrollBox = box} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//         <button onClick={() => this.scrollBox.scrollToTop()}>
//           맨 위로
//         </button>
//       </div>
//     )
//   }
// }

// const App = () => {
//   return <LifeCycleSample />
// }

export default App;
