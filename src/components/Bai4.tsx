import React, { useState, useCallback } from "react";

function Bai4() {
  const [color, setColor] = useState("#000000");
  const handleChangeColor = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setColor(event.target.value);
    },
    []
  );

  return (
    <div>
      <div>
        <label>
          Màu người dùng chọn:
          <input
            type="color"
            value={color}
            onChange={handleChangeColor}
          />
        </label>
      </div>
      <div>
        <div>Màu hiển thị:</div>
        <div
          style={{
            marginTop: 10,
            width: 200,
            height: 100,
            backgroundColor: color,
            border: "1px solid #c9c9c9ff"
          }}
        />
      </div>
    </div>
  );
}

export default Bai4;
