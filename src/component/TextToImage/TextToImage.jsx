import React from "react";
import { dropicon, filegeticon, loadingIconnew, startIcon } from "../../assets";
import ImageButton from "../common/image-button/ImageButton";

function TextToImage() {
  return (
    <div className="bg-custom-gradient p-0 h-full  w-full flex flex-col  px-4 py-4">
      <div className="flex flex-col  h-full  w-full justify-between">
        <p>AI Image Generation </p>

        <div className="w-full flex justify-center items-center flex-col">
          <img src={startIcon} alt="start-genenrating-Icon" />

          <p className="text-3xl text-white ">Start Generating...</p>
          <p className="text-[#9E9E9E] text-sm ">
            Explore the new realm of Ai generated images
          </p>
        </div>

        <div className="flex flex-col w-full justify-start items-center">
          <p className="place-self-start text-[18px] text-white px-2">promt</p>
          <div className="flex item-center justify-start w-full px-2">
            <div className="pr-4 flex flex-row-reverse border-2 p-2 rounded-lg mr-2">
              <ImageButton icon={dropicon} text={"Select style"} size={"sm"} />
            </div>
            <div className="pr-4 flex flex-row-reverse border-2 p-2 rounded-lg mr-2">
              <ImageButton icon={dropicon} text={"Select style"} size={"sm"} />{" "}
            </div>
            <div className="pr-4 flex flex-row-reverse border-2 p-2 rounded-lg mr-2">
              <ImageButton icon={dropicon} text={"Select style"} size={"sm"} />{" "}
            </div>
            <div className="pr-4 flex flex-row-reverse border-2 p-2 rounded-lg mr-2">
              <ImageButton icon={dropicon} text={"Select style"} size={"sm"} />{" "}
            </div>
          </div>

          <div className="w-full flex flex-row p-2 justify-center items-center">
            <div className="flex justify-start  item-center h-full w-full border-[1px] border-[#424242] pb-6 pt-3 px-4 rounded-lg ">
              <div className="p-2 bg-slate-700  flex h-fit item-center justify-center rounded-full w-fit">
                <img src={filegeticon} alt="file-icon" />
              </div>

              <div className="w-full flex justify-start ml-2">
                <textarea
                  placeholder="Type your promt"
                  className="w-full bg-transparent  outline-none h-full"
                />
              </div>
            </div>

            <div className="w-[250px] text-center px-4 justify-center">
              <div className="flex justify-center w-full item-center bg-gradient-to-r from-blue-500 to-teal-400  rounded-3xl  py-2">
                <p className="text-xl">Generate</p>
                <img
                  src={loadingIconnew}
                  alt="loading-text"
                  className="flex px-1"
                />
                <p className="text-lg ">3</p>
              </div>

              <p className="text-[14px] text-[#FFFFFF] text-nowrap mt-2">
                You have 6 prompt remaning
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextToImage;
