import React from "react";
import { downarrow, searchicon } from "../../assets";
import ImageGrid from "../common/imageGrid/ImageGrid";

function History() {
  return (
    <div className="px-10 py-6 text-white w-full h-full">
      <p className="text-[20px] font-bold ">History</p>

      <div className="mt-10 flex justify-between w-full max-[1212px]:flex-col">
        <div className="flex justify-start  items-center w-full">
          <img src={searchicon} alt="search-icon" className="mr-4" />
          <input
            type="text"
            className="outline-none border-b-2 border-[#9e9e9e5b] w-[250px]  bg-transparent"
            placeholder="Search"
          />

          <button className="px-4 py-1 border-2 rounded-[20px] ml-4 border-[#9e9e9e52] text-[#f4f4f492]">
            Search
          </button>
        </div>

        <div className="flex  max-[1212px]:mt-8 text-[#f4f4f492]">
          <div className="flex  justify-center items-center pr-4">
            <div className="border-2 border-[#9e9e9e5b] py-1 px-4 rounded-[20px] flex justify-center items-center">
              <img src={downarrow} alt="downarrow-icon" className="h-3" />
              <p className="pl-2">Ascending</p>
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
  );
}

export default History;
