"use client";
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createUserLogin } from "@/services/Store/Login/actions";
import { useRouter } from "next/navigation";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.login);

  useEffect(() => {
    if (user && user.status === 200) {
      router.push("/");
    }
  }, [user]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
      dispatch(
        createUserLogin({
          username: credentials.username,
          password: credentials.password,
        })
      );
    }

  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={credentials.username}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
