import React from "react";
import { CgClose, CgCloseO } from "react-icons/cg";
import PrimaryButton from "../Button/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import { addImage, removeImage } from "../../redux/slices/imageSlice";

const ImageUploadModal = ({ setIsOpen }) => {
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();

  const handleImage = (imgs) => {
    let fd = new FormData();
    const imageType = /image.*/;

    for (const img of imgs) {
      if (img.type.match(imageType)) {
        fd.append("image", img);
        dispatch(addImage(img));
      }
    }
  };

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

        {images.length === 0 ? (
          <div className="rounded-lg border-dashed border-2 p-8 bg-accent flex items-center justify-center flex-col gap-2">
            <p className="text-black">Drop Files here</p>
            <p className="text-black">or</p>
            <label htmlFor="image">
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                className="hidden"
                onInput={(e) => handleImage(e.target.files)}
                multiple
              />
              <span
                name="image"
                id="image"
                className="font-medium text-primary border-2 border-primary px-4 py-1 rounded cursor-pointer"
              >
                Browse
              </span>
            </label>
          </div>
        ) : (
          <>
            <div className="rounded-lg p-6 bg-accent">
              <div className="flex items-center gap-3 flex-wrap">
                {images?.map((image, i) => (
                  <div key={i} className="relative shadow">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={image.name}
                      className="rounded-t w-28 h-20"
                    />
                    <CgCloseO
                      className="absolute top-2 right-2 text-lg cursor-pointer text-secondary"
                      onClick={() => dispatch(removeImage(i))}
                    />
                    <div className="rounded-b bg-secondary w-28 h-6 flex items-center justify-between gap-1 px-[4px] text-xs">
                      <span className="max-w-[60px] overflow-hidden">
                        {image.name}
                      </span>
                      <span>{Math.ceil(image.size / 1000000)}mb</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[1.2px] bg-secondary my-6"></div>
            <div className="flex items-center justify-end gap-3">
              <label htmlFor="image">
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  className="hidden"
                  onInput={(e) => handleImage(e.target.files)}
                  multiple
                />
                <span
                  name="image"
                  id="image"
                  className="py-2 px-6 border border-primary text-primary font-medium rounded-lg cursor-pointer"
                >
                  Add More
                </span>
              </label>
              <PrimaryButton className="px-6 py-2">Upload</PrimaryButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUploadModal;
