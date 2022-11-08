import React, { useState } from "react";
import { CgClose, CgCloseO } from "react-icons/cg";
import PrimaryButton from "../Button/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import {
  addSelectedImage,
  removeSelectedImage,
  clearSelectedImage,
} from "../../redux/slices/selectedImageSlice";
import { addImage } from "../../redux/slices/imageSlice";
import apiClient from "../../hooks/apiClient";

const ImageUploadModal = ({ setIsOpen }) => {
  const { selected_image } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [uploaded, setUploaded] = useState(null);

  const handleImage = (imgs) => {
    const imageType = /image.*/;

    for (const img of imgs) {
      if (img.type.match(imageType)) {
        dispatch(addSelectedImage(img));
      }
    }
  };

  // Upload Images
  const handleUploadImages = async () => {
    try {
      let fd = new FormData();
      for (const img of selected_image) {
        fd.append("images", img);
      }
      const { data } = await apiClient.patch("/image/upload", fd, {
        onUploadProgress: (data) => {
          setUploaded(Math.round(data.loaded / data.total) * 100);
        },
      });
      console.log(data);
      if (data.success) {
        dispatch(addImage(data.data));
        dispatch(clearSelectedImage());
        setIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(uploaded);

  return (
    <div className="bg-black bg-opacity-30 w-full h-full flex items-center justify-center fixed top-0 right-0 z-10">
      <div className="w-[95%] max-h-[95%] overflow-auto scrollbar md:w-[43rem] bg-white rounded p-4">
        <div className="flex items-center justify-between text-black">
          <h3 className="text-xl font-medium">Upload new images</h3>
          <button
            className="btn btn-circle btn-ghost btn-sm"
            onClick={() => setIsOpen(false)}
          >
            <CgClose className="text-2xl" />
          </button>
        </div>
        <div className="w-full h-[1.2px] bg-secondary my-6"></div>

        {selected_image.length === 0 ? (
          <div className="rounded-lg border-dashed border-2 p-8 bg-accent flex items-center justify-center flex-col gap-2">
            <p className="text-black">Drop Files here</p>
            <p className="text-black">or</p>
            <label htmlFor="images">
              <input
                type="file"
                name="images"
                id="images"
                accept="image/*"
                className="hidden"
                onInput={(e) => handleImage(e.target.files)}
                multiple
              />
              <span className="font-medium text-primary border-2 border-primary px-4 py-1 rounded cursor-pointer">
                Browse
              </span>
            </label>
          </div>
        ) : (
          <>
            <div className="rounded-lg p-6 bg-accent">
              <div className="flex items-center gap-3 flex-wrap">
                {selected_image?.map((image, i) => (
                  <div key={i} className="relative shadow" title={image.name}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt={image.name}
                      className="rounded-t w-28 h-20"
                    />
                    <CgCloseO
                      className="absolute top-2 right-2 text-lg cursor-pointer text-secondary"
                      title="clear"
                      onClick={() => dispatch(removeSelectedImage(i))}
                    />
                    <div className="rounded-b bg-secondary w-28 h-6 flex items-center justify-between gap-1 px-[4px] text-xs">
                      <span className="max-w-[60px] max-h-4 overflow-hidden">
                        {image.name}
                      </span>
                      <span>{Math.ceil(image.size / 1000000)}mb</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            {uploaded && (
              <div className="mt-4">
                <progress
                  className="progress progress-primary w-full"
                  value={uploaded}
                  max="100"
                ></progress>
                <p>{uploaded} % uploaded</p>
              </div>
            )}

            {/* Divider */}
            <div className="w-full h-[1.2px] bg-secondary my-6"></div>

            {/* Bottom Button */}
            <div className="flex items-center justify-end gap-3">
              <label htmlFor="images">
                <input
                  type="file"
                  name="images"
                  id="images"
                  accept="image/*"
                  className="hidden"
                  disabled={uploaded}
                  onInput={(e) => handleImage(e.target.files)}
                  multiple
                />
                <span
                  className={`py-2 px-6 border font-medium rounded-lg ${
                    uploaded
                      ? "cursor-not-allowed text-secondary"
                      : "cursor-pointer border-primary text-primary"
                  }`}
                >
                  Add More
                </span>
              </label>
              <PrimaryButton
                className="px-6 py-2"
                onClick={handleUploadImages}
                disabled={uploaded}
              >
                Upload
              </PrimaryButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUploadModal;
