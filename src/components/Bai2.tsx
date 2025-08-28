import React, { useMemo } from "react";

function Bai2() {
  const users = [
    { id: 1, name: "Linh", age: 17 },
    { id: 2, name: "Trang", age: 22 },
    { id: 3, name: "Phanh", age: 19 },
    { id: 4, name: "Ly", age: 16 },
    { id: 5, name: "Thanh", age: 25 }
  ];

  const adults = useMemo(() => {
    return users.filter(user => user.age > 18);
  }, [users]);

  return (
    <div>
      <h2>Danh sách người dùng trên 18 tuổi:</h2>
      <ul>
        {adults.map(user => (
          <li key={user.id}>
            {user.name}:{user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bai2;
