import React from 'react';

const Fn1 = (props) => {
  const { title, changeStateApp } = props;
  return (
    <>
      Props: { title}

      <button onClick={changeStateApp}>Click de doi state</button>
    </>
  )
}

export { Fn1 };
