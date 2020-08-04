import React from 'react';
import logo from './logo.svg';
import './App.css';

/*
function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if(callback) {
      callback(result);
    }
  }, 1000);
}

console.log("작업 시작");
increase(0, result => {
  console.log(result);
  increase(result, result => {
    console.log(result);
    increase(result, result => {
      console.log(result);
      increase(result, result => {
        console.log(result);
        increase(result, result => {
          console.log(result);
          console.log("작업 완료");
        });
      });
    });
  });
});
*/

function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve 는 성공, reject 는 싪패
    setTimeout(() => {
      const result = number + 10;
      if(result > 50) {
        // 50보다 높으면 에러 발생시키기
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result); // number값에 +10 후 성공 처리
    }, 1000);
  });
  return promise;
}
/* 
increase(0)
  .then(number => {
    // Promise에서 resolve된 값은 .then으로 받아 올 수 있음
    console.log(number);
    return increase(number); // Promise를 리턴하면
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .catch(e => {
    // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음
    console.log(e);
  });
 */

async function runTasks() {
  try {
    // try/catch 구문을 사용하여 에러를 처리합니다.
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
runTasks();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
