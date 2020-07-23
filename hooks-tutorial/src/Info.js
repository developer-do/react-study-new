import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickName] = useState('');

  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({
      name,
      nickname
    });
  }, []);

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setNickName(e.target.value);
  }

  const inputInitButton = () => {
    alert(`${name}님의 닉네임은 ${nickname}입니다.`);
    setName('');
    setNickName('');
  }

  return (
    <div>
      <div>
        <input 
          value={name} 
          onChange={onChangeName}
        />
        <input 
          value={nickname}
          onChange={onChangeNickname}
        />
        <button onClick={inputInitButton}>초기화</button>
      </div>

      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;