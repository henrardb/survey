import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import authService from "../appwrite/auth";
import { reduxLogin } from "../store/authSlice";

import Input from "./InputCmp";
import Button from "./ButtonCmp";

function LoginCmp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const session = await authService.login({ email, password });
      if (session) {
        const user = await authService.getCurrentUser();
        if (user) dispatch(reduxLogin({ user }));
        navigate("/");
      }
    } catch (error) {
      console.log("LoginCmp :: handleLogin :: ", error);
    }
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
