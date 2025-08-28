import React, { useReducer } from "react";
const state = 0;
function reducer(state: number,action: string) {
  switch (action) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
}

const Increase = () => {
  const [count, dispatch] =useReducer(reducer,state);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>Increase</button>
    </div>
  );
};

export default Increase;
