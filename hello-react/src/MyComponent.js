import React from 'react';

// 비구조화 할당 방법 2
const MyComponent = ({ name, children }) => {
  // 비구조화 할당 방법 1
  // const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children}
      입니다.
    </div>
  );
};

// props값이 넘어 오지 않을 때 기본이름 지정
MyComponent.defaultProps = {
  name: 'default name',
};

export default MyComponent;
