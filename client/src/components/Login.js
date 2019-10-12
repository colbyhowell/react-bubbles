import React from "react";
import useForm from "react-hook-form";
import axiosWithAuth from "../utils/axiosWithAuth.js";
import { useHistory } from "react-router-dom";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();

  const onSubmit = values => {
    axiosWithAuth()
      .post("/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        history.push("/bubbles");
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="username"
          name="username"
          ref={register}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          ref={register}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
