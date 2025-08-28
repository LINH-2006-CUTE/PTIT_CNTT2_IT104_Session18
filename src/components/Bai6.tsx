import React, { useReducer } from "react";

const user = {
  gender: "Nam"
};

function reducer(state, action) {
  if (action.type === "changeGender") {
    return {
      ...state,
      gender: action.payload
    };
  }
  return state;
}

function InputRadio() {
  const [state, dispatch] = useReducer(reducer, user);

  const handleChange = (e) => {
    dispatch({
      type: "changeGender",
      payload: e.target.value
    });
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="Nam"
          checked={state.gender === "Nam"}
          onChange={handleChange}
        />
        Nam
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Nữ"
          checked={state.gender === "Nữ"}
          onChange={handleChange}
        />
        Nữ
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Khác"
          checked={state.gender === "Khác"}
          onChange={handleChange}
        />
        Khác
      </label>

      <p>Selected gender: {state.gender}</p>
    </div>
  );
}

export default InputRadio;
