import React, { useState } from "react";
import {
  artopialogo,
  metamaskicon,
  walletconnecticon,
  successIcon,
  walletMob,
  remove,
} from "../../../assets";

const ConnectModel = ({ isOpen, onClose, connectToMetaMask, walletStatus }) => {
  return (
    <>
      <div
        className={`${
          isOpen
            ? "max-[964px]:hidden  h-screen w-screen  flex justify-center items-center flex-col bg-cover bg-center bg-blur backdrop-blur-md absolute top-0 font-HindMadurai brightness-[90%]"
            : "hidden"
        } `}
      >
        <div
          className={`${
            isOpen ? "flex flex-col justify-center items-center " : "hidden"
          }`}
        >
          {/* <div className="flex flex-col justify-center items-center"> */}
          {!walletStatus ? (
            <div className="w-[35.625rem] h-[28.5625rem] bg-custom-gradient text-white flex justify-center p-4 walletmodal rounded-[20px]">
              <div className="flex flex-col text-center h-full justify-evenly">
                <div className="mb-2 w-[498px] h-[99px] mt-[-12px]">
                  <div className="flex w-20px flex-row-reverse  ">
                    <img
                      src={remove}
                      alt="remove-btn"
                      className="cursor-pointer h-7"
                      onClick={onClose}
                    />
                  </div>
                  <p className="text-4xl mt-[-27px] mb-2">Connect Wallet</p>
                  <p className="text-base font-popin ">
                    Unlock the potential of Web3 seamlessly with MetaMask –
                    simply connect in a click and elevate your digital
                    experience to new heights.
                  </p>
                </div>

                <div className="flex justify-center items-center mt-6 gap-6">
                  <div className="flex flex-col justify-evenly items-center py-4 px-3 rounded-[20px] h-[240px] bg-opacity-15 bg-[#CACACA] hover:border-2 hover: ">
                    <img
                      src={metamaskicon}
                      alt="metamask-icon"
                      className="pb-2"
                    />
                    <p className="text-3xl">MetaMask</p>
                    <p className="font-popin text-base">
                      Connect your wallet with your <br /> metamask account
                    </p>
                    <div className="">
                      <p
                        onClick={connectToMetaMask}
                        className="px-10 py-2 bg-gradient-to-r from-blue-500 to-teal-400 bg-slate-600  text-center rounded-[50px] mt-3 cursor-pointer"
                      >
                        Connect Metamask
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-evenly items-center py-4 px-3 rounded-[20px] h-[240px] bg-opacity-15 bg-[#CACACA] hover:border-2">
                    <img
                      src={walletconnecticon}
                      alt="metamask-icon"
                      className=""
                    />
                    <p className="text-3xl ">Wallet Connect</p>
                    <p className="font-popin text-base">
                      Connect your wallet with your <br /> wallet connect
                      account
                    </p>
                    <div className="">
                      <p className="px-10 py-2 bg-gradient-to-r from-blue-500 to-teal-400 bg-slate-600 text-center rounded-[50px] mt-3 cursor-pointer">
                        <p className="text-[18px] ">Connect Wallet</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[23.5625rem] h-[17.9375rem] bg-[#1E1E1E] p-4 rounded-[20px] flex flex-col text-white z-50">
              <div className="flex justify-end">
                <img
                  src={remove}
                  alt="remove-btn"
                  className="cursor-pointer h-6"
                  onClick={onClose}
                />
              </div>
              <div className="flex flex-col text-center items-center justify-evenly">
                <img src={successIcon} alt="success-logo" />
                <p className="font-HindMadurai text-3xl mb-2">
                  Wallet Connection Successful
                </p>
                <p className="text-sm text-[#9E9E9E] w-[329px] h-[40px]">
                  The wallet ending with ****637 is successfully connected with
                  the Artopia platform
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {isOpen && walletStatus ? (
        <div className="h-screen w-screen absolute bg-cover bg-center bg-blur backdrop-blur-md min-[964px]:hidden ">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white min-[964px]:hidden ">
            <div className="relative">
              <div className="w-[23.5625rem] h-[17.9375rem] bg-[#1E1E1E] p-4 rounded-[20px] flex flex-col text-center text-white justify-evenly items-center z-50 bg-cover bg-center bg-blur backdrop-blur-md">
                <div className="absolute top-4 right-4">
                  <img
                    src={remove}
                    alt="remove-btn"
                    className="cursor-pointer h-6"
                    onClick={onClose}
                  />
                </div>
                <img src={successIcon} alt="success-logo" />
                <p className="font-HindMadurai text-3xl">
                  Wallet Connection Successful
                </p>
                <p className="text-sm text-[#9E9E9E] w-[329px] h-[40px] ">
                  The wallet ending with ****637 is successfully connected with
                  the Artopia platform
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${
            isOpen
              ? "hidden max-[964px]:block absolute w-full bg-red-100"
              : "hidden"
          }`}
        >
          <div className="bg-custom-gradient flex justify-center items-center h-full w-full px-4 ">
            <div className="flex-1 h-screen py-4 flex flex-col justify-between ">
              <div className="flex flex-col justify-center min-[964px]:items-start max-[964px]">
                <div className="flex items-center px-2 lg:px-0">
                  <img src={artopialogo} alt="artopia-icon" className="pr-4" />
                  <p className=" text-white text-2xl font-HindMadurai">
                    Artopia
                  </p>
                </div>

                <div className="text-white min-[650px]:px-2 min-[650px]:px max-[550px]:text-start max-[950px]:text-center max-[950px]:w-full  w-[21.3125rem] my-4 text-start">
                  <p className="text-4xl font-HindMadurai">Connect Wallet</p>
                  <p className="text-base  text-start mt-1 font-popin ">
                    Unlock the potential of Web3 seamlessly with MetaMask –
                    simply connect in a click and elevate your digital
                    experience to new heights.
                  </p>
                </div>

                <div className=" text-white text-center flex flex-col items-center font-HindMadurai ">
                  <div className="hover:border p-3 rounded-[20px] w-[440px] max-[964px]:w-full max-[450px]:w-[96%] bg-opacity-15 bg-[#CACACA] p-3 rounded-[20px] w-[440px] max-[964px]:w-full max-[450px]:w-[96%] bg-opacity-15 bg-[#CACACA]">
                    <div className="">
                      <div className="flex flex-col items-center justify-center">
                        <img src={metamaskicon} alt="metamask-img" />
                        <p className="text-3xl py-2">MetaMask</p>
                        <div
                          className="bg-gradient-to-r from-blue-500 to-teal-400 bg-slate-600 w-full py-2 px-20 lg:px-32 text-center rounded-[50px] mt-4 "
                          onClick={connectToMetaMask}
                        >
                          Connect
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hover:border p-3 m-2 rounded-[20px] w-[440px] max-[964px]:w-full max-[450px]:w-[96%] bg-opacity-15 bg-[#CACACA]">
                    <div className="">
                      <div className="flex flex-col items-center justify-center">
                        <img src={walletMob} alt="wallet-mob-img" />
                        <p className="text-3xl py-2">Wallet Connect</p>
                        <div className="bg-gradient-to-r from-blue-500 to-teal-400 bg-slate-600 w-full py-2 px-20 lg:px-32 text-center rounded-[50px] mt-4">
                          Connect
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    className="underline text-[#9E9E9E] font-popin"
                    onClick={onClose}
                  >
                    Go back
                  </p>
                </div>
              </div>

              <div className="flex justify-start text-[#5D5D5D] text-xs px-4 lg:px-0 font-popin">
                <p className="">Privacy Policy</p>
                <p className="ml-8">Terms & Condition</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectModel;
