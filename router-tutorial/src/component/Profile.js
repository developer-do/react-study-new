import React from "react";
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';
/* 
withRouter은 현재 profile기준으로 match가 전달된다.
withRouter을 다른곳에 쓰고 적용시킨다면 match가 전달되지 않을 수 있으니 유의해야 한다.
*/

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  dohyun: {
    name: "김도현",
    description: "열심히 하지만 잘 안되는 개발자",
  },
};

const Profile = ({ match }) => {
  console.log(match);
  const { username } = match.params;
  const profile = data[username];
  if(!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
