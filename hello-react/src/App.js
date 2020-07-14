import React, { Fragment } from 'react';
import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      {name === '리액트' ? (
        <h1>리액트입니다.</h1>  
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )};
      
      <div>{ name === '리액트' && <h1>리액트 입니다.</h1>}</div>
    </>
  );
}

export default App;
