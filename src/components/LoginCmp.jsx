import React from "react";
import { useState, useEffect } from "react";

import Input from "./InputCmp";
import Button from "./ButtonCmp";

function LoginCmp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(`Email: ${email}, password: ${password}`);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          label="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button value="Se connecter"></Button>
      </form>
    </>
  );
}

export default LoginCmp;
