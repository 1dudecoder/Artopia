import React, { useState } from "react";
import { remove, uploadicon, viewallicon } from "../../../assets";
import { useSelector } from "react-redux";

function ImageUpload({ handleUploadModal }) {
  const [uploadImage, setUploadImage] = useState(true);
  const [recentImage, setRecentImage] = useState(false);
  const [urlImage, setUrlImage] = useState(false);
  const anymodal = useSelector((state) => state.dashboarddata.data.anymodal);

  const handleUploadbtn = (item) => {
    setUploadImage(false);
    setRecentImage(false);
    setUrlImage(false);

    if (item == "upload") {
      setUploadImage(true);
    }
    if (item == "recent") {
      setRecentImage(true);
    }
    if (item == "url") {
      setUrlImage(true);
    }
  };

  return (
    <div className="flex justify-center  items-center w-[560px] h-[350px] bg-[#1E1E1E] place-self-center rounded-3xl flex-col relative py-2">
      <div className="w-full flex justify-end absolute top-0 p-4">
        <img
          src={remove}
          alt="hide-icon"
          className="h-6"
          onClick={handleUploadModal}
        />
      </div>
      <div className="flex flex-col  item-center text-center w-full px-4 h-full justify-evenly ">
        <div>
          <p className="text-2xl font-bold">Image Uplaod</p>
          <p className="text-sm py-2 text-[#9E9E9E]">
            upload the file to generate the AI Image with the image rederence
          </p>
        </div>

        <div className="flex justify-center items-center gap-3 font-bold text-nowrap">
          <div
            className={
              uploadImage
                ? `px-4 py-1 border-[#ffffff2b] border-[1px] bg-[#ffffff14] rounded-full text-sm`
                : "text-sm"
            }
            onClick={() => {
              handleUploadbtn("upload");
            }}
          >
            Upload Image
          </div>
          <div
            className={
              recentImage
                ? `px-4 py-1 border-[#ffffff2b] border-[1px] bg-[#ffffff14] rounded-full text-sm`
                : "text-sm"
            }
            onClick={() => {
              handleUploadbtn("recent");
            }}
          >
            Recent Image
          </div>
          <div
            className={
              urlImage
                ? `px-4 py-1 border-[#ffffff2b] border-[1px] bg-[#ffffff14] rounded-full text-sm`
                : "text-sm"
            }
            onClick={() => {
              handleUploadbtn("url");
            }}
          >
            Image URL
          </div>
        </div>

        <div className="w-[95%] mt-2  h-[0.1px] bg-[#ffffff41] flex place-self-center"></div>

        {uploadImage && (
          <div className="flex justify-center item-center h-[130px] flex-col  py-3 w-full rounded-xl border-[#ffffff2b] border-[1px] bg-[#ffffff14]">
            <div className="h-full w-full flex justify-center items-center ">
              <img src={uploadicon} alt="upload-icon" className="h-10" />
            </div>
            <div className="flex w-full justify-center items-center my-1">
              <p className="font-bold pr-2">Click to upload</p>
              <p>or drag and drop</p>
            </div>
            <p className="text-center text-base">
              SVG, PNG, JPG or GIF (max. 1024x1024px)
            </p>
          </div>
        )}

        {recentImage && (
          <div className="flex justify-between item-center flex-col  py-3 w-full rounded-xl">
            <div className="flex justify-center item-center ">
              <div className="h-[130px] w-fit rounded-2xl overflow-hidden px-1">
                <img
                  src={
                    "https://imgv3.fotor.com/images/homepage-feature-card/AI-generated-anime-boy-with-black-short-hair-and-red-eyes.jpg"
                  }
                  alt=""
                  className="h-full w-full object-cover "
                />
              </div>

              <div className="h-[130px] w-fit rounded-2xl overflow-hidden px-1">
                <img
                  src={
                    "https://imgv3.fotor.com/images/homepage-feature-card/AI-generated-anime-boy-with-black-short-hair-and-red-eyes.jpg"
                  }
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="h-[130px] w-fit rounded-2xl overflow-hidden px-1">
                <img
                  src={
                    "https://imgv3.fotor.com/images/homepage-feature-card/AI-generated-anime-boy-with-black-short-hair-and-red-eyes.jpg"
                  }
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="h-[130px] w-fit rounded-2xl overflow-hidden px-1">
                <img
                  src={
                    "https://imgv3.fotor.com/images/homepage-feature-card/AI-generated-anime-boy-with-black-short-hair-and-red-eyes.jpg"
                  }
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex justify-center item-center mt-4">
              <p className="text-sm">View All</p>
              <div className="flex justify-center item-center pl-2">
                <img src={viewallicon} alt="arrow-icon" />
              </div>
            </div>
          </div>
        )}

        {urlImage && (
          <div className="flex justify-between item-center flex-col  py-3rounded-xl w-full px-2 pb-4">
            <div className="w-full border-2 border-[#ffffff2c] p-1 rounded-lg bg-[#4a47472c]">
              <input
                className="w-full  outline-none border-none bg-transparent px-1 text-[#ffffff9e]"
                type="text"
                placeholder="Enter your image URL"
              />
            </div>

            <div className=" bg-gradient-to-r from-blue-500 to-teal-400 bg-slate-600 w-full py-1 px-20 lg:px-32 text-center rounded-[50px] mt-3 ">
              <p>Start Creating</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
