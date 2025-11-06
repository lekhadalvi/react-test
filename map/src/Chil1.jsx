import React from 'react';
import Child2 from './Child2';

const Chil1 = ({ msg }) => {
  console.log("Message in Chil1:", msg); // ✅ Correct place for console.log

  return (
    <div>
      <Child2 msg={msg} /> {/* ✅ Proper prop passing */}
    </div>
  );
};

export default Chil1;

