import React from "react";
import { downarrow, searchicon } from "../../assets";
import ImageGrid from "../common/imageGrid/ImageGrid";

function History() {
  return (
    <div className="sm:px-10 sm:py-6 px-4 text-white w-full h-full">
      <p className="text-[20px] font-bold hidden sm:flex">History</p>

      <div className="mt-10 flex justify-between w-full flex-col lg:flex-row ">
        <div className="flex justify-start  items-center w-full pb-4 lg:pb-0">
          <img src={searchicon} alt="search-icon" className="mr-4" />
          <input
            type="text"
            className="outline-none border-b-2 border-[#9e9e9e5b] w-[250px]  bg-transparent"
            placeholder="Search"
          />

          <div className="border flex justify-center border-none items-center p-[0.70px] rounded-full whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="bg-[#393434] px-[1rem] py-[0.2rem]  rounded-full ">
              <p className="text-sm whitespace-nowrap p-[0.1rem]">Search</p>
            </div>
          </div>
        </div>

        <div className="flex text-[#f4f4f492] flex-nowrap text-sm">
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
  );
}

export default History;
