import React from 'react';
import PropTypes from 'prop-types';

// 비구조화 할당 방법 2
class MyComponent extends React.Component {
  // 비구조화 할당 방법 1
  // const { name, children } = props;

  // class 내부에서 defaultProps와 propTypes를 지정하는 방법
  static defaultProps = {
    name: '기본 이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  }

  render () {

    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
};

// props값이 넘어 오지 않을 때 기본이름 지정
// MyComponent.defaultProps = {
//   name: 'default name',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// };

/**
 * 더 많은 PropTypes 종류
 * array : 배열
 * arrayOf(다른 PropTyp): 특정 PropType으로 이루어진 배열을 의미합니다. 예를 들어 arrayOf(PropTypes.number) 는 숫자로 이루어진 배열입니다.  (진짜 배열의 의미)
 * bool : true 혹은 false 값
 * func : 함수
 * number : 숫자
 * object : 객체
 * string : 문자열
 * symbol : ES6의 Symbol
 * node : 렌더링할 수 이쓴 모든 것(숫자, 문자열, 혹은 JSX 코드, children도 node PropType 입니다.)
 * instanceOf(클래스) : 특정 클래스의 인스턴스 (예 : instanceOf(MyClass))
 * oneOf(['dog', 'cat']): 주어진 배열 요수 중 값 하나
 * oneOfType([React.PropTypes.string, PropTypes.number]) : 주어진 배열 안의 종류 중 하나
 * objectOf(React.PropTypes.number) : 객체의 모든 키 값이 인자로 주어진 PropType인 객체
 * chape({ name: PropTypes.string, num: PropTypes.number }) : 주어진 스키마를 가진 객체
 * any : 아무 종류
 */

export default MyComponent;
