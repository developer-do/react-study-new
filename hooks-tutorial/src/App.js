import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import Counter2 from './Counter2';
import Info2 from './Info2';
import Average from './Average';
import UseRefExample from './UseRefExample';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {/* <Counter />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />} */}
      {/* <Counter2 /> */}
      <Info2 />
      {/* <Average /> */}
      {/* <UseRefExample /> */}
    </div>
  );
};

export default App;