import React, { useState } from "react";
import { catimg, walletimg, artopialogo } from "../../assets";
import ConnectModel from "../common/connectModel/ConnectModel";

function WalletConnect() {
  const [openWalletModal, setOpenWalletModal] = useState(false);

  const handlewalletModal = () => {
    setOpenWalletModal(!openWalletModal);
  };

  return (
    <div className="bg-custom-gradient">
      <div className="h-screen flex justify-center items-center md:px-4 md:py-4">
        <div className="flex flex-col justify-between h-screen md:w-1/2 py-6 pr-2">
          <div>
            <div className="flex items-center px-2 lg:px-0">
              <img src={artopialogo} alt="artopia-icon" className="pr-4" />
              <p className="text-xl text-white ">Artopia</p>
            </div>

            <div className="mt-14 flex flex-col justify-center items-center sm:justify-start lg:items-start">
              <div className="md:w-[20.6875rem] text-center px-4 md:text-start ">
                <p className="text-[40px] text-white font-bold">
                  Connect Wallet
                </p>
                <p className="text-sm text-white">
                  Unlock the potential of Web3 seamlessly with MetaMask – simply
                  connect in a click and elevate your digital experience to new
                  heights.
                </p>
              </div>

              <div className="w-fit text-center">
                <div className="flex lg:justify-center flex-col items-start ">
                  <div className="p-4 md:p-6 border w-fit mt-8 rounded-[20px] bg-[#5D5D5D] bg-opacity-20">
                    <div className="text-white  flex flex-col items-center text-center ">
                      <img src={walletimg} alt="wallet-img" />
                      <p className="text-2xl mt-4 font-bold">Connect wallet</p>
                      <p className="text-sm ">
                        By clicking the connect you will add the <br /> wallet
                        to the artopia system.{" "}
                      </p>

                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-400 bg-slate-600 w-full py-4 px-20 lg:px-32 text-center rounded-[50px] mt-6"
                        onClick={handlewalletModal}
                      >
                        Connect Wallet
                      </div>
                    </div>
                  </div>
                </div>

                <p className="underline text-[#9E9E9E] pt-3">Go back</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start text-[#5D5D5D] text-xs px-4 lg:px-0">
            <p className="">Privacy Policy</p>
            <p className="ml-8">Terms & Condition</p>
          </div>
        </div>

        <div className="h-full justify-center ml-2 items-center bg-red-200 w-fit rounded-[20px] overflow-hidden hidden md:flex">
          <img
            src={catimg}
            alt="cat-img"
            className="w-full h-full object-cover scale-100"
          />
        </div>
      </div>

      <ConnectModel isOpen={openWalletModal} onClose={handlewalletModal} />
    </div>
  );
}

export default WalletConnect;
