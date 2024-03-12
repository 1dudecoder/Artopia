import React, { useEffect, useState } from "react";
import {
  filegeticon,
  loadingIconnew,
  startIcon,
  enhancePromptIcon,
} from "../../assets";

import Loadinggrid from "../common/loadinggrid/Loadinggrid";
import Dropdown from "../common/dropdown/Dropdown";
import { useLocation } from "react-router-dom";

function TextToImage(props) {
  const { state } = useLocation();

  const { navyes = false, selectedImage = null } = state || {};

  const [isLoading, setIsLoading] = useState(false);
  const [gridchange, setGridChange] = useState(true);
  const [inputdataflag, setInputdataFlag] = useState(false);
  const [textareaInput, settextareaInput] = useState("");

  const handleGenerateClick = () => {
    setIsLoading(true);
    setInputdataFlag(!inputdataflag);
  };

  const handlegridchange = () => {
    setGridChange(!gridchange);
  };

  useEffect(() => {
    if (selectedImage) {
      settextareaInput(selectedImage.descrition);
    }
  }, [selectedImage]);

  return (
    <div className="bg-custom-gradient p-0 h-[90%] sm:h-full w-full flex flex-col px-2 pt-2 sm:px-4 sm:pt-4">
      <div className="flex flex-col h-[100%] sm:h-screen w-full justify-between">
        <div className="flex w-full justify-between">
          <p>AI Image Generation </p>
          <p
            className="text-base max-[1149px]:hidden"
            onClick={handlegridchange}
          >
            view
          </p>
        </div>
        {inputdataflag ? (
          <Loadinggrid onClick={setGridChange} gridchange={gridchange} />
        ) : (
          <div className="w-full flex justify-center items-center flex-col">
            <img src={startIcon} alt="start-generating-Icon" />
            <p className="text-3xl text-white ">Start Generating...</p>
            <p className="text-[#9E9E9E] text-sm ">
              Explore the new realm of AI-generated images
            </p>
          </div>
        )}

        <div className="flex flex-col w-full justify-start items-center lg:mb-[0px]   ">
          <p className="text-[#FFFFFF99] place-self-start font-HindMadurai text-[18px]  text-white px-2 py-1">
            {" "}
            Prompt{" "}
          </p>
          <div className="flex-col flex lg:flex-row item-center justify-start gap-[12px] w-full px-2">
            <div className="flex lg:flex-row flex-row  flex-wrap">
              <div className="flex flex-wrap">
                <Dropdown text={"Select models"} />
                <Dropdown text={"Select styles"} />
                <Dropdown text={"Aspect Radio"} />
              </div>

              <div className="pr-4 flex items-center w-[163px] py-2 rounded-lg mr-2 relative">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-[36px] h-5 border-2 bg-custom-gradient-color bg-gray-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-4 after:transition-all"></div>
                  <span className="font-HindMadurai ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 ">
                    Negative Prompt
                  </span>
                </label>
              </div>

              <div className="flex items-center gap-[8px] ">
                <img src={enhancePromptIcon} alt="" />
                <p className="bg-gradient-to-r from-[#cdcfdc] via-[#2445EE] to-[#43dfd0] text-transparent bg-clip-text font-[500] text-[14px] font-poppins border-b border-[#2445EE] font-popin">
                  Enhance Prompt
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col p-2 pb-0 sm:p-2 justify-center items-center md:flex-row">
            <div className="flex justify-start  item-center h-full w-full border-[1px] border-[#424242] p-2 sm:pb-6 sm:pt-3 sm:px-4 rounded-lg ">
              <div className="p-2 bg-slate-700  flex h-fit item-center justify-center rounded-full w-fit">
                <img src={filegeticon} alt="file-icon" />
              </div>

              <div className="flex justify-start items-start flex-col w-full">
                {textareaInput && navyes && selectedImage && (
                  <div className="flex text-base font-popin w-full h-fit px-2 pb-1">
                    <p className="p-1 bg-[#2445EE] rounded-l-md text-sm">
                      Img Url:
                    </p>
                    <p className="p-1 bg-blur text-sm backdrop-blur-sm bg-[#ffffff20] rounded-r-md ">
                      Dragon of the seas.png
                    </p>
                  </div>
                )}

                <div className="w-full flex justify-start ml-2 ">
                  <textarea
                    placeholder="Type your promt"
                    className="w-full bg-transparent  outline-none h-full text-[#9E9E9E] font-[400] text-[15px] font-inter"
                    value={textareaInput}
                    onChange={(e) => settextareaInput(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-[80%] mt-2 md:mt-0 md:w-[250px] text-center sm:px-4 justify-center">
              <div
                className="flex justify-center  item-center bg-gradient-to-r from-blue-700 to-teal-400  rounded-3xl  py-2"
                onClick={handleGenerateClick}
                disabled={isLoading}
              >
                <p className="text-xl">Generate</p>

                <img
                  src={loadingIconnew}
                  alt="loading-text"
                  className="flex px-1"
                />
                <p className="text-lg ">3</p>
              </div>

              <p className="text-[14px] text-[#FFFFFF99] font-[400] font-popin  text-nowrap mt-2">
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
