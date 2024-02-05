import React from "react";
import { artopialogo, metamaskicon, walletconnecticon } from "../../../assets";

const ConnectModel = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${
        isOpen
          ? "h-screen w-screen bg-cover bg-center bg-blur backdrop-blur-md absolute top-0"
          : "hidden"
      }`}
    >
      <div
        className={`${
          isOpen
            ? "z-10 flex h-full  justify-center flex-col items-center  "
            : "hidden "
        } `}
      >
        <div className="text-start justify-between lg:justify-start w-full h-full md:w-fit md:h-fit  md:text-center flex flex-col md:justify-center md:items-center full p-4 rounded-xl bg-custom-gradient ">
          {" "}
          <div>
            <div className="flex items-center justify-start px-2 lg:px-0 md:hidden">
              <img src={artopialogo} alt="artopia-icon" className="pr-4" />
              <p className="text-xl text-white">Artopia</p>
            </div>

            <div className="">
              <div className="modal-content text-white mt-10">
                <p className="text-4xl">Connect Wallet</p>
                <p className="text-sm px-2 py-2 mt-2">
                  Unlock the potential of Web3 seamlessly with MetaMask – simply{" "}
                  <br />
                  connect in a click and elevate your digital experience to new
                  heights.
                </p>
              </div>

              <div className="flex flex-col md:flex-row mt-5 md:justify-center md:items-center">
                <div className="flex flex-col justify-center items-center border-2 p-2 rounded-lg text-white bg-[#CACACA] bg-opacity-35 m-2 w-4/5">
                  <img
                    src={metamaskicon}
                    alt="metamask-icon"
                    className="pb-2"
                  />
                  <p className="text-base">MetaMask</p>
                  <p className="text-xs p-2 text-center hidden md:block">
                    Connect your wallet with your <br /> metamask account
                  </p>
                  <div className="bg-gradient-to-r w-full from-blue-500 to-teal-400 bg-slate-600 py-2 my-2 text-center rounded-[50px] mt-3">
                    <p className="hidden md:block">Connect Metamask</p>
                    <p className="block md:hidden">Connect</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center border-2 p-2 rounded-lg text-white bg-[#CACACA] bg-opacity-35 m-2 w-4/5">
                  <img
                    src={walletconnecticon}
                    alt="metamask-icon"
                    className="pb-2"
                  />
                  <p className="text-base">MetaMask</p>
                  <p className="text-xs p-2 hidden md:block">
                    Connect your wallet with your <br /> wallet connect account
                  </p>
                  <div className="bg-gradient-to-r from-blue-500 to-teal-400 bg-slate-600 w-full py-2 my-2 text-center rounded-[50px] mt-3">
                    <p className="hidden md:block">Connect Wallet</p>
                    <p className="block md:hidden">Connect</p>
                  </div>
                </div>

                <p
                  className="text-center  block md:hidden underline text-[#9E9E9E] mt-2"
                  onClick={onClose}
                >
                  go back
                </p>
              </div>
            </div>
          </div>
          <div className="flex  md:hidden justify-start text-[#5D5D5D] text-xs px-4 lg:px-0 place-items-end">
            <p className="">Privacy Policy</p>
            <p className="ml-8">Terms & Condition</p>
          </div>
        </div>

        <p
          className="underline text-[#9E9E9E] mt-2 hidden md:block "
          onClick={onClose}
        >
          go back
        </p>
      </div>
    </div>
  );
};

export default ConnectModel;
