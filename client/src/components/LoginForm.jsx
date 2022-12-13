import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../styles/authForm.module.css";

import { useField } from "../hooks/index";
import { UseUserContext } from "../context/userContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const email = useField("email", "email");
  const password = useField("password", "password");

  const login = UseUserContext().login;

  let handleLogin = async (event) => {
    event.preventDefault();

    try {
      await login(email.attributes.value, password.attributes.value);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.authForm} onSubmit={handleLogin}>
      <h1>Log in</h1>
      <div className={styles.inputWrapper}>
        <label htmlFor="email">Email: </label>
        <input {...email.attributes} />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="password">Password: </label>
        <input {...password.attributes} />
      </div>
      <button type="submit">Login</button>
      <div className={styles.extraWrapper}>
        <Link to={"/forgot-password"}>Forgot Password</Link>
        <p>
          Don't have an account? <Link to={"/signup"}>Sign up</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
