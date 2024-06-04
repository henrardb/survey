import React, { useState } from "react";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { reduxLogin } from "../store/authSlice";

import Input from "./InputCmp";
import Button from "./ButtonCmp";

function RegisterCmp() {
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.createAccount({
        lastName,
        email,
        password,
      });
      if (user) {
        const user = await authService.getCurrentUser();
        if (user) dispatch(reduxLogin({ user }));
        navigate("/");
      }
    } catch (error) {
      console.log("RegisterCmp :: handleRegister :: ", error);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <Input
          type="text"
          label="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
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
        <Button value="Créer un compte"></Button>
      </form>
    </>
  );
}

export default RegisterCmp;
