import React from "react";
import qs from 'qs';

const About = ({location}) => {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
  });
  console.log(query);

  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열 입니다.

  return (
    <div>
      <h1>소개</h1>
      <p>
        이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트 입니다.
        { showDetail && <span>detail 값을 true로 설정하셨군요!</span> }
      </p>
    </div>
  );
};

export default About;
