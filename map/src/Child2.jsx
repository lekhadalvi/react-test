import React from 'react';

const Child2 = ({ msg }) => {
  console.log("Message in Child2:", msg); // ✅ Correct console log

  return (
    <div>
      <h3>Child 2 says:</h3>
      <p>{msg}</p>
    </div>
  );
};

export default Child2;
