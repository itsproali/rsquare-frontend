import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import PrimaryButton from "../../components/Button/PrimaryButton";
import home_image from "../../assets/home_image.png";
import ImageUploadModal from "../../components/Modal/ImageUploadModal";
import { useSelector } from "react-redux";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { images } = useSelector((state) => state);
  return (
    <>
      {isOpen && <ImageUploadModal setIsOpen={setIsOpen} />}
      <div className="min-h-screen px-2 sm:px-6 md:px-20 py-12">
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-black font-semibold text-2xl md:text-3xl">
              Media Library
            </h1>
            <p className="text-neutral">{images.length} images</p>
          </div>
          <div className="">
            <PrimaryButton
              className="gap-2 px-3 md:px-5"
              onClick={() => setIsOpen(true)}
            >
              <AiOutlinePlusCircle className="text-xl" />
              <span>Upload new image</span>
            </PrimaryButton>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <img src={home_image} alt="Empty Media" />
          <p className="mt-12 text-neutral">
            Click on ‘Upload’ to start adding images
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
