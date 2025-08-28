import React, { useReducer } from "react";
const state = "";
function reducer(state, action) {
  return action.payload;
}

function InputText() {
  const [text, dispatch] = useReducer(reducer, state);
  const handleChange = (e) => {
    dispatch({ payload: e.target.value });
  };

  return (
    <div>
      <h1>Input change</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập chữ vào đây"
      />
      <p>{text}</p>
    </div>
  );
}

export default InputText;
