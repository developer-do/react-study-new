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

const App = () => {
  return <LifeCycleSample />
}

export default App;
