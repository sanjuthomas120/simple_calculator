'use client';
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center">
        <h3 className="text-center text-3xl">{count}</h3>
        <div className="flex">
        <button className="m-2 border-2 p-2 text-sm rounded border-white" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="m-2 border-2 p-2 text-sm rounded border-white" disabled={count === 0} onClick={() => setCount(0)}>Reset</button>
        <button className="m-2 border-2 p-2 text-sm rounded border-white" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    </div>
  )
};
export default Counter;