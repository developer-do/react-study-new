// import React, {useReducer} from 'react';

// const init = {
//   name: '',
//   nickname: ''
// }

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value
//   }
// }

// const Info2 = () => {
//   const [state, dispatch] = useReducer(reducer, init);
//   const {name, nickname} = state;
//   console.log(state);
//   const onChange = e => {
//     console.log(e.target);
//     dispatch(e.target);
//   }
//   return (
//     <div>
//       <div>
//         <input name="name" value={name} onChange={onChange} />
//         <input name="nickname" value={nickname} onChange={onChange} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임:</b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info2;

import React from 'react';
import useInputs from './useInputs';

const initState = {
  name: '',
  nickname: ''
};



const Info2 = () => {
  const [ state, onChange ] = useInputs(initState);
  const { name, nickname } = state;
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>닉네임 :</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info2;