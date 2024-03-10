import React, { useState } from "react";
import { downarrow, searchicon } from "../../assets";
import ImageGrid from "../common/imageGrid/ImageGrid";
import ImageModal from "../common/imagemodal/ImageModal";

function History() {
  const [imagemodal, setImageModal] = useState(false);
  const handleImageModal = () => {
    setImageModal(!imagemodal);
  };

  return (
    <>
      <div className="sm:px-10 sm:py-6 px-4 text-white w-full h-full">
        <p className="text-[20px] font-bold hidden sm:flex">History</p>

        <div className="mt-4 md:mt-10 flex justify-between w-full flex-col lg:flex-row ">
          <div className="flex justify-start  items-center w-full pb-4 lg:pb-0">
            <img src={searchicon} alt="search-icon" className="mr-4" />
            <input
              type="text"
              className="outline-none border-b-2 border-[#9e9e9e5b]  w-[250px]  bg-transparent"
              placeholder="Search"
            />

            <div class="border flex justify-center items-center p-[2px] border-none ml-1 rounded-full whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-500">
              <div class="bg-[#000000ac] px-3 rounded-full">
                <p class="text-sm p-1 font-popin">Search</p>
              </div>
            </div>
          </div>

          <div className="flex text-[#f4f4f4c4] flex-nowrap text-sm">
            <div className="flex  justify-center items-center pr-4 ">
              <div className="border-2 border-[#9e9e9e5b] py-1 px-4 rounded-[20px] flex justify-center items-center">
                <img src={downarrow} alt="downarrow-icon" className="h-3" />
                <p className="pl-2 ">Ascending</p>
              </div>
            </div>

            <div className="flex  justify-center items-center pr-4">
              <div className="border-2 border-[#9e9e9e5b] py-1 px-4 rounded-[20px] flex justify-center items-center">
                <img src={downarrow} alt="downarrow-icon" className="h-3" />
                <p className="pl-2">Categories</p>
              </div>
            </div>

            <div className="flex  justify-center items-center pr-4">
              <div className="border-2 border-[#9e9e9e5b] py-1 px-4 rounded-[20px] flex justify-center items-center">
                <img src={downarrow} alt="downarrow-icon" className="h-3" />
                <p className="pl-2">Dates</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-full mt-10  w-full">
          <ImageGrid />
        </div>
      </div>

      {imagemodal && (
        <div className=" w-full h-screen absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-center items-center">
          <ImageModal
            handleModalShow={handleImageModal}
            imagemodal={imagemodal}
          />
        </div>
      )}
    </>
  );
}

export default History;
