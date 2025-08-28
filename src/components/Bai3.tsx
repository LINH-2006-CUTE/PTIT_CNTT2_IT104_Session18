import React, { useState, useCallback } from "react";

function Bai3() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const handleChangePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log({ email, password });
    },
    [email, password]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          onChange={handleChangeEmail}
          required
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          onChange={handleChangePassword}
          required
        />
      </div>

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default Bai3;
