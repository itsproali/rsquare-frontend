import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import PrimaryButton from "../../components/Button/PrimaryButton";
import home_image from "../../assets/home_image.png";
import ImageUploadModal from "../../components/Modal/ImageUploadModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addCheckedImage,
  removeCheckedImage,
} from "../../redux/slices/checkedImageSlice";
import { deleteImage } from "../../redux/slices/imageSlice";
import apiClient from "../../hooks/apiClient";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const images = useSelector((state) => state.images.value);
  const checked_image = useSelector((state) => state.checked_image.value);
  const dispatch = useDispatch();

  // Handle Checked
  const handleChecked = (id, isChecked) => {
    if (isChecked) {
      dispatch(addCheckedImage(id));
    } else {
      dispatch(removeCheckedImage(id));
    }
  };

  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure, you want to Delete?");
    if (isConfirmed) {
      apiClient.patch("/image/delete", checked_image);
      dispatch(deleteImage(checked_image));
    }
  };

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
          <div className="flex items-center gap-4">
            <PrimaryButton
              className="gap-2 px-3 md:px-5"
              onClick={() => setIsOpen(true)}
            >
              <AiOutlinePlusCircle className="text-xl" />
              <span>Upload new image</span>
            </PrimaryButton>
            {checked_image && (
              <button
                className="flex items-center justify-center gap-2 px-3 py-2 border-2 border-primary text-primary font-semibold rounded duration-300 active:scale-95"
                onClick={handleDelete}
              >
                <span>
                  <FiTrash2 />
                </span>
                <span>Delete Selected</span>
              </button>
            )}
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
            {images.map((image) => (
              <div
                key={image._id}
                className="rounded-lg shadow-lg flex flex-col justify-between relative"
              >
                <img
                  src={`https://rsquare-itsproali.herokuapp.com/images/${image.path}`}
                  alt="library"
                  className="block rounded-t-lg h-60 sm:h-48 lg:h-52 2xl:h-60 border-b"
                />
                <label htmlFor="select">
                  <input
                    type="checkbox"
                    name="select"
                    id="select"
                    className="absolute top-2 left-2"
                    onChange={(e) => handleChecked(image._id, e.target.checked)}
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
