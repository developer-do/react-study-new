import React from 'react';

const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다.
      <br />
      children 값은 {props.children}
      입니다.
    </div>
  );
};

// props값이 넘어 오지 않을 때 기본이름 지정
MyComponent.defaultProps = {
  name: 'default name',
};

export default MyComponent;
