import React, { useState } from "react";
import login_shapes from "../../assets/login_shapes.png";
import LoginForm from "../../components/Login/LoginForm";
import SignupForm from "../../components/Login/SignupForm";
import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="min-h-screen w-full grid grid-cols-6">
      {/* Login Left Side */}
      <div className="login_bg_container col-span-3 lg:col-span-2">
        <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
          Welcome to Rsquare
        </h1>
        <p className="w-sm text-sm text-secondary">
          Lets get you all set up so start with your account and begin setting
          up your profile.
        </p>

        <img src={login_shapes} alt="login shapes" className="login_shapes" />
      </div>

      {/* Login or Signup Form */}
      <div className="w-full mx-auto justify-center col-span-6 md:col-span-3 lg:col-span-4">
        {login ? (
          <LoginForm setLogin={setLogin} />
        ) : (
          <SignupForm setLogin={setLogin} />
        )}
      </div>
    </div>
  );
};

export default Login;
