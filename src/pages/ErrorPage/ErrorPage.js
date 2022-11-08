import React from "react";
import { Link } from "react-router-dom";
import circle_image from "../../assets/circle_image.png";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { BiLeftArrowCircle } from "react-icons/bi";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8">
      <div className="flex items-center gap-4 md:gap-8">
        <h1 className="error_heading">4</h1>
        <img src={circle_image} alt="O" className="block w-32 md:w-60" />
        <h1 className="error_heading">4</h1>
      </div>
      <div className="text-center">
        <p>oops! looks like you are lost.</p>
        <p>The page you are looking for could not be found.</p>
      </div>
      <div>
        <Link to="/">
          <PrimaryButton className="px-6 gap-2">
            <span>
              <BiLeftArrowCircle className="text-xl" />
            </span>
            <span>Back to home</span>
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
