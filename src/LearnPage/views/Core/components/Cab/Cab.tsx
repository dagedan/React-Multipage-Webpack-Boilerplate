import React from 'react';
import HighLight from 'react-highlight';
import { Divider } from 'antd';
function Cab() {
  return (

    <div style={{ margin: 20 }}>
      <h3>call/apply/bind</h3>
      <Divider plain style={{ marginTop: 0 }}></Divider>
      <HighLight className='javascript'>
        {`
          function.call(thisArg, arg1, arg2, ...)
          function.apply(thisArg, [arg1, arg2, ...])
          function.bind(thisArg[, arg1[, arg2[, ...]]])
        `}
      </HighLight>
    </div>
  );
}

export default Cab;
