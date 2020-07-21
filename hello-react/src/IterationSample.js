import React, { useState } from 'react';

const IterationSample = (props) => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' }
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(names.length + 1); // 새로운 항목을 추가할 대 사용할 id
  const namesList = names.map(names => <li key={names.id}>{names.text}</li>);

  const onChange = e => setInputText(e.target.value);
  const onKeyPress = e => {
    if(e.key === "Enter") {
      onClick();
    }
  }
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  }

  return (
    <>
      <input value={inputText} onChange={onChange} onKeyPress={onKeyPress}/>
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  )
};

export default IterationSample;