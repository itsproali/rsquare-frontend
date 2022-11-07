import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../redux/slices/tokenSlice";
import PrimaryButton from "../Button/PrimaryButton";

const LoginForm = ({ setLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const info = { email, password };
    handleLogin(info);
  };

  const handleLogin = async (info) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/user/login",
        info
      );
      if (data.success) {
        dispatch(setToken(data.token));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="py-20 w-[95%] md:w-[350px] mx-auto md:mx-8 lg:mx-20">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold text-black">Welcome Back!</h2>
        <p className="text-neutral text-sm mt-1">Please Enter your details.</p>
      </div>
      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email">
            <span className="text-sm block mb-1 text-black">Email Address</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jonathan@abc.com"
              className="input_field"
              required
            />
          </label>
        </div>
        <div className="mb-2">
          <label htmlFor="password">
            <span className="text-sm block mb-1 text-black">Password</span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="input_field"
              required
            />
          </label>
        </div>
        <div className="flex items-center justify-between w-full">
          <label
            htmlFor="remember"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input type="checkbox" name="remember" id="remember" />
            <span className="text-black">Remember me</span>
          </label>
          <Link to="/">Forgot Password?</Link>
        </div>

        <div className="mt-6">
          <label htmlFor="submit">
            <PrimaryButton className="w-full">Log In</PrimaryButton>
            <input type="submit" value="" />
          </label>
        </div>
      </form>
      <p className="flex items-center gap-2">
        <span className="text-neutral">Don't have an account?</span>
        <span
          className="text-primary hover:underline cursor-pointer"
          onClick={() => setLogin(false)}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
