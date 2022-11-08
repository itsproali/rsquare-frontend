import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import PrimaryButton from "../../components/Button/PrimaryButton";
import home_image from "../../assets/home_image.png";
import ImageUploadModal from "../../components/Modal/ImageUploadModal";
import { useSelector } from "react-redux";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const images = useSelector((state) => state.images);
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

        {images.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <img src={home_image} alt="Empty Media" />
            <p className="mt-12 text-neutral">
              Click on ‘Upload’ to start adding images
            </p>
          </div>
        ) : (
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {images.map((image, i) => (
              <div
                key={i}
                className="rounded-lg shadow-lg flex flex-col justify-between relative"
              >
                <img
                  src={`http://localhost:5000/images/${image.path}`}
                  alt="library"
                  className="block rounded-t-lg h-60 sm:h-48 lg:h-52 2xl:h-60 border-b"
                />
                <label htmlFor="select">
                  <input
                    type="checkbox"
                    name="select"
                    id="select"
                    className="absolute top-2 left-2"
                  />
                </label>
                <div className="py-4 rounded-b-lg flex items-center justify-between px-2 gap-2 text-sm">
                  <span>{image.name}</span>
                  <span className="flex items-center justify-center px-3 py-1 rounded bg-secondary">
                    {image.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
