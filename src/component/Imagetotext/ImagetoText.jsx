import React, { useState } from "react";
import { crownicon, scrollericon } from "../../assets";
import ImageGrid from "../common/imageGrid/ImageGrid";
import ImageModal from "../common/imagemodal/ImageModal";

function ImagetoImage() {
  const [imagemodal, setImageModal] = useState(false);

  const handleImageModal = () => {
    setImageModal(!imagemodal);
  };

  return (
    <div className="w-full h-screen flex flex-row min-[1000px]:flex-col relative px-2">
      <div className="h-screen  overflow-scroll">
        <div className="flex flex-col   min-[665px]:flex min-[665px]:flex-row min-[665px]:justify-between min-[665px]:items-center pt-5 sm:px-8">
          <div>
            <p className="">AI Image Generation</p>
          </div>

          <div
            className="flex justify-center mt-4 sm:mt-0 h-fit px-4  item-center bg-gradient-to-r from-blue-500 to-teal-400  rounded-3xl  py-1"
            onClick={handleImageModal}
          >
            <p className="text-xl px-2">Upload Image</p>
          </div>
        </div>

        <div className="mt-6 flex justify-start sm:px-8">
          <div className=" flex justify-start">
            <div
              className="flex flex-nowrap justify-center h-fit px-4  item-center bg-gradient-to-r from-blue-500 to-teal-400  rounded-3xl  py-2"
              onClick={handleImageModal}
            >
              <img src={crownicon} alt="loading-text" className="flex px-1" />
              <p className="text-sm text-nowrap">Generated Image</p>
            </div>
          </div>
          <div className=" flex justify-start">
            <div className="flex justify-center flex-nowrap h-fit px-4  items-center  rounded-3xl  py-2">
              <img
                src={scrollericon}
                alt="loading-text"
                className="flex px-1"
              />
              <p className="text-sm px-2 text-nowrap">Uploaded Image</p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:px-8">
          <ImageGrid />
        </div>
      </div>

      {imagemodal && (
        <div className=" w-full h-screen absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-center items-center">
          <ImageModal handleModalShow={handleImageModal} />
        </div>
      )}
    </div>
  );
}

export default ImagetoImage;
