import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickName] = useState('');
  
  /**
   * useEffect를 사용할 때 특정 값이 변경될 때만 호출하고 싶을 경우에 클래스형 컴포넌트에서의 사용법
   * componentDidUpdate(prevProps, prevState) {
   *    if(prevProps.value !== this.props.value) {
   *        doSomething();
   *    }
   * }
   * 
   * 함수형 컴포넌트에서는 useEffect의 두번째 파라미터 배열에 업데이트되면 호출하고싶은 특정 값을 배열에 추가
   */
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({
      name,
      nickname
    });
  }, [name]);


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