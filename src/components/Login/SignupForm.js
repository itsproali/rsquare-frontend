import React from "react";
import PrimaryButton from "../Button/PrimaryButton";

const SignupForm = ({ setLogin }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { first_name, last_name, email, phone, password };
    console.log(data);
  };
  return (
    <div className="py-10 w-[95%]  md:w-[350px] xl:w-[750px] mx-auto sm:mx-4 xl:mx-20">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold text-black">
          Begin your journey!
        </h2>
        <p className="text-neutral text-sm mt-1">
          Get started with the best platform for design.
        </p>
      </div>
      <form className="mt-10" onSubmit={handleLogin}>
        <div className="mb-6 flex flex-col sm:flex-row md:flex-col xl:flex-row items-center gap-3">
          <label htmlFor="first_name" className="w-full">
            <span className="text-sm block mb-1 text-black">First Name*</span>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Jonathan"
              className="input_field"
              required
            />
          </label>
          <label htmlFor="last_name" className="w-full">
            <span className="text-sm block mb-1 text-black">Last Name*</span>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Banks"
              className="input_field"
              required
            />
          </label>
        </div>
        <div className="mb-6 flex flex-col sm:flex-row md:flex-col xl:flex-row items-center gap-3">
          <label htmlFor="email" className="w-full">
            <span className="text-sm block mb-1 text-black">
              Email Address*
            </span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jonathan@abc.com"
              className="input_field"
              required
            />
          </label>
          <label htmlFor="phone" className="w-full">
            <span className="text-sm block mb-1 text-black">Phone Number*</span>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="+880 18****"
              className="input_field"
              required
            />
          </label>
        </div>

        <div className="mb-2">
          <label htmlFor="password">
            <span className="text-sm block mb-1 text-black">Password*</span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password123#"
              className="input_field"
              required
            />
          </label>
        </div>
        <div className="flex items-center flex-wrap gap-2 w-full text-black">
          <label htmlFor="remember" className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="cursor-pointer"
              required
            />
            <span>By signing up, you agree to our</span>
          </label>
          <span className="text-primary hover:underline cursor-pointer">
            User Agreement,
          </span>
          <span className="text-primary hover:underline cursor-pointer">
            Terms of Service,
          </span>
          &
          <span className="text-primary hover:underline cursor-pointer">
            Privacy Policy
          </span>
        </div>

        <div className="mt-10">
          <label htmlFor="submit">
            <PrimaryButton className="w-full xl:w-1/2">Sign Up</PrimaryButton>
            <input type="submit" value="" />
          </label>
        </div>
      </form>
      <p className="flex items-center gap-2">
        <span className="text-neutral">Already have an account?</span>
        <span
          className="text-primary hover:underline cursor-pointer"
          onClick={() => setLogin(true)}
        >
          Log In
        </span>
      </p>
    </div>
  );
};

export default SignupForm;
