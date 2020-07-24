// import React, { useReducer } from 'react';

// function reducer(state, action) {
//   // action.type에 따라 다른 작업 수행
//   switch (action.type) {
//     case 'INCREMENT':
//       return { value: state.value + 1 }; 
//     case 'DECREMENT':
//       return { value: state.value - 1 };
//     default:
//       // 아무것도 해당되지 않을 때 기존 상태 반환
//       return state;
//   }
// }

// const Counter2 = () => {
//   const [state, dispatch] = useReducer(reducer, {value: 0});

//   return (
//     <div>
//       <p>현재 카운터 값은 <b>{state.value}</b></p>    
//       <button onClick={() => dispatch({ type: 'INCREMENT'})}>+1</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT'})}>-1</button>
//     </div>
//   );
// };

// export default Counter2;


/**
 * reducer 복습
 */


// import React, { useReducer } from 'react';

// const init = {
//   value: 0
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCRE':
//       return { value: state.value + 1 };
//     case 'DECRE':
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }



// const Counter2 = () => {
//   const [state, dispatch] = useReducer(reducer, init);
//   return (
//     <div>
//       <p>변화되는 카운트 : {state.value}</p>
//       <button onClick={() => dispatch({ type: 'INCRE' })}>+1</button>
//       <button onClick={() => dispatch({ type: 'DECRE' })}>-1</button>
//     </div>
//   );
// };

// export default Counter2;


import React, {useReducer} from 'react';

const init = {
  value: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCRE':
      return { value: state.value + 1};
    case 'DECRE':
      return { value: state.value - 1};
    default:
      return state;
  }
}


const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, init);
  return (
    <div>
      <p>상태값 변화 : {state.value}</p>
      <button onClick={ () => dispatch({ type: 'INCRE'}) }>+1</button>
      <button onClick={ () => dispatch({ type: 'DECRE'}) }>-1</button>
    </div>
  );
};

export default Counter2;