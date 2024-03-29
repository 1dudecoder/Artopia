import React from "react";
import { downarrow, imggen } from "../../assets";
import ImageGrid from "../common/imageGrid/ImageGrid";
import { useNavigate } from "react-router-dom";
import DashboadGrid from "../common/dashbordGrid/DashboardGrid";

function ImageSearch() {
  const navigate = useNavigate();

  const handleviewAll = () => {
    navigate("/history");
  };

  return (
    <div className="overflow-scroll h-screen ">
      <div className="w-[100%]  pb-4 sm:pb-0 text-white  overflow-auto font-HindMadurai ">
        <div className="m-4">
          <p className="font-bold ">Image Generation</p>

          <div className="w-full px-7 py-10  rounded-lg mt-4 bg-[#5d5d5d26]  backdrop-filter backdrop-blur-sm flex justify-center items-center  border-[0.2px] border-[#f5f5f540]">
            <div className="max-w-lg mx-auto  shadow-md rounded-lg flex justify-center items-center flex-col font-popin">
              <img src={imggen} alt="image-genrate" className="mb-6" />
              <p className="text-[18px] sm:text-[20px]">Image Generation </p>
              <p className="text-[#F5F5F5] mt-2 text-[11px] sm:text-base">
                Transform words into captivating visuals effortlessly, unlocking
                a world of creativity and enhancing your storytelling in a
                visually compelling way.
              </p>
              <div className="py-4 w-full">
                <button className="w-full py-3 text-base sm:text-[18px] bg-gradient-to-r from-blue-700 to-teal-400 bg-slate-600 text-center rounded-[50px] mt-3 cursor-pointer ">
                  Generate Images
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4 mt-8 ">
            <p className="text-[20px]">Recent Creations</p>

            <div
              className="flex center items-center text-[#f4f4f4d1] cursor-pointer"
              onClick={handleviewAll}
            >
              <p className="pr-2 text-[12px]">View All</p>
              <img src={downarrow} alt="down-arrow" />
            </div>
          </div>

          <div className="pb-2">
            <DashboadGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSearch;
