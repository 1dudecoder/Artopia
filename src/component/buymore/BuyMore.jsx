import React, { useState } from "react";
import {
  backdownarrow,
  backicon,
  backspinner,
  downicon,
  errormodalicon,
  lockicon,
  remove,
  successIcon,
  usdticon,
} from "../../assets";
import { useNavigate } from "react-router-dom";

function BuyMore() {
  const navigate = useNavigate();
  const [buysuccess, setBuySuccess] = useState(false);
  const [buyerror, setBuyError] = useState(false);

  const handlebuyclick = () => {
    setBuySuccess(!buysuccess);
  };

  return (
    <div className=" h-screen w-full">
      <div className="flex-col h-full overflow-hidden ">
        <div className="w-full  p-4 flex">
          <div className="flex  gap-3" onClick={() => navigate(-1)}>
            <img src={backicon} alt="back-icon" />
            <p className="text-base text-[#ffffff97]">Back</p>
          </div>
        </div>
        <div className="w-full  h-full flex justify-start md:pt-16 items-center flex-col lg:pr-72">
          <div className="bg-[#76737314] w-[90%] h-[450px] md:w-[500px] rounded-lg p-5  flex flex-col justify-evenly">
            <div className="text-start ">
              <p className="text-[24px] font-bold font-HindMadurai">
                Buy Bloom Tokens
              </p>
              <p className="text-sm mt-1 text-[#ffffffce]">
                Generate unique and personalised images and <br /> unleash your
                creativity.{" "}
              </p>
            </div>

            <div className="w-full outline-none mt-4 flex justify-between items-center px-1 rounded-md text-[#ffffff5d] border-[#ffffff26] border-2 ">
              <input
                type="text"
                placeholder="0.00"
                className="w-full bg-transparent outline-none p-2"
              />

              <div className="flex gap-2 hidden sm:flex justify-center items-center w-[25%] h-[70%] rounded-md  border-2 border-[#ffffff1c] bg-[#ffffff1a] ">
                <img src={backspinner} alt="back-spinner" className="h-4" />
                <p className="text-sm text-center text-[#ffffffbe]">Bloom</p>
              </div>
            </div>

            <div className="sm:p-4 border-[#ffffff26] flex justify-center  w-full place-self-center">
              <img
                src={downicon}
                alt="down-icon"
                className="p-3 rounded-full bg-[#ffffff1a]"
              />
            </div>

            <div className="w-full outline-none  flex justify-between items-center px-1 rounded-md text-[#ffffff5d] border-[#ffffff26] border-2 ">
              <input
                type="text"
                placeholder="0.00"
                className="w-full bg-transparent outline-none p-2"
              />

              <div className="flex gap-2 hidden sm:flex   justify-center items-center w-[25%] h-[70%] rounded-md  border-2 border-[#ffffff1c] bg-[#ffffff1a] ">
                <img src={usdticon} alt="back-spinner" className="h-4" />
                <p className="text-sm text-center text-[#ffffffbe]">USDT</p>
                <img src={backdownarrow} alt="back-spinner" className="" />
              </div>
            </div>

            <div
              className="w-full flex flex-col justify-start items-center"
              onClick={handlebuyclick}
            >
              <button className="px-10 py-2 bg-gradient-to-r w-full mt-4 from-blue-500 to-teal-400 bg-slate-600 text-center rounded-[50px]  cursor-pointer">
                Buy
              </button>
              <div className="w-full   mt-2 flex justify-center gap-2">
                <img src={lockicon} alt="lock-icon" className="" />
                <p className=" text-sm text-[#ffffff8d]">
                  Transition is secured by Artopia
                </p>
              </div>
              <p className=" text-sm text-[#ffffff8d] pt-4">Token Guidelines</p>{" "}
            </div>
          </div>
        </div>
      </div>

      {buysuccess && (
        <div className="h-full w-full  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-center items-center bg-cover bg-center bg-blur backdrop-blur-md">
          <div className="sm:w-[23.5625rem]  p-4 pb-5  w-[90%]   bg-[#1E1E1E]  rounded-[20px] flex flex-col text-white z-50 relative">
            <div className="flex justify-end absolute right-0 p-3">
              <img
                src={remove}
                alt="remove-btn"
                className="cursor-pointer h-6 "
                onClick={handlebuyclick}
              />
            </div>
            <div className="flex flex-col text-center items-center justify-evenly">
              <img src={successIcon} alt="success-logo" />
              <p className="font-HindMadurai text-3xl mb-2">
                Transition Successful
              </p>
              <p className="text-sm text-[#9E9E9E]">
                Your purchase of 3000 Bloom token is successfully completed on
                Nov 25, 2023 at 08:05 am. You can watch more details of this
                transition in your dashboard
              </p>

              <div className="border flex justify-center items-center w-full border-none mt-4  p-[0.70px] rounded-full whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-500 ">
                <div
                  class="px-2 py-2 rounded-full bg-[#1E1E1E]  w-full "
                  onClick={() => {
                    navigate("/buymore");
                  }}
                >
                  <p class="text-sm font-popin">View Explorer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {buyerror && (
        <div className="h-full w-full  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-center items-center bg-cover bg-center bg-blur backdrop-blur-md">
          <div className="sm:w-[23.5625rem]  p-4 pb-5  w-[90%]   bg-[#1E1E1E]  rounded-[20px] flex flex-col text-white z-50 relative">
            <div className="flex justify-end absolute right-0 p-3">
              <img
                src={remove}
                alt="remove-btn"
                className="cursor-pointer h-6 "
                onClick={handlebuyclick}
              />
            </div>
            <div className="flex flex-col text-center items-center justify-evenly">
              <img src={errormodalicon} alt="error-logo" />
              <p className="font-HindMadurai text-3xl mb-2">
                Transition Failed
              </p>
              <p className="text-sm text-[#9E9E9E]">
                Your purchase of 2000 Bloom token is failed on Nov 25, 2023 at
                08:05 am. You can watch more details of this transition in your
                dashboard
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuyMore;
