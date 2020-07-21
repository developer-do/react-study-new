import React from 'react';

const IterationSample = (props) => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return (
    <div>
      <h2>{props.name}님의 리스트</h2>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;