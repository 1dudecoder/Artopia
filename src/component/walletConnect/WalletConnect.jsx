import React, { useEffect, useState } from "react";
import { catimg, walletimg, artopialogo } from "../../assets";
import ConnectModel from "../common/connectModel/ConnectModel";
import { ethers } from "ethers";

function WalletConnect() {
  const [openWalletModal, setOpenWalletModal] = useState(false);

  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  async function connectToMetaMask() {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const connectedAddress = await signer.getAddress();
      setAddress(connectedAddress);
      setConnected(true);
      setError(null);
      console.log("MetaMask connected");
    } catch (error) {
      setError("Failed to connect to MetaMask.");
      setConnected(false);
    }
  }

  const handlewalletModal = () => {
    setOpenWalletModal(!openWalletModal);
  };

  useEffect(() => {
    console.log(connected, connected, error, address, "connected---");
  }, [connected, error, address, openWalletModal]);

  return (
    <>
      <div className="bg-custom-gradient flex justify-center items-center h-full w-full px-5 ">
        <div className="flex-1 h-screen py-4 flex flex-col justify-between ">
          <div className="flex flex-col justify-center min-[964px]:items-start max-[964px]">
            <div className="flex items-center px-2 lg:px-0">
              <img src={artopialogo} alt="artopia-icon" className="pr-4" />
              <p className=" text-white text-2xl font-HindMadurai">Artopia</p>
            </div>

            <div className="text-white max-[550px]:text-start max-[950px]:text-center max-[950px]:w-full w-[21.3125rem] my-10 text-start">
              <p className="text-4xl font-HindMadurai">Connect Wallet</p>
              <p className="text-base  text-start mt-1 font-popin">
                Unlock the potential of Web3 seamlessly with MetaMask – simply
                connect in a click and elevate your digital experience to new
                heights.
              </p>
            </div>

            <div className="  text-white text-center flex flex-col items-center font-HindMadurai ">
              <div className="hover:border p-8 rounded-[20px] w-[440px] max-[964px]:w-full max-[450px]:w-[95%] bg-opacity-15 bg-[#CACACA] ">
                <div className="">
                  <div className="flex flex-col items-center justify-center">
                    <img src={walletimg} alt="wallet-img" />
                    <p className="text-3xl">Connect wallet</p>
                    <p className="text-base font-popin">
                      By clicking the connect you will add the <br /> wallet to
                      the artopia system.{" "}
                    </p>

                    <div
                      className=" cursor-pointer bg-gradient-to-r from-blue-500 to-teal-400 bg-slate-600 w-full py-4 px-20 lg:px-32 text-center rounded-[50px] mt-6"
                      onClick={handlewalletModal}
                    >
                      <p className="text-nowrap">Connect Wallet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start text-[#5D5D5D] text-xs px-4 lg:px-0 font-popin">
            <p className="">Privacy Policy</p>
            <p className="ml-8">Terms & Condition</p>
          </div>
        </div>

        <div className="h-screen flex-1 p-4 lg:pr-2 hidden min-[964px]:block ">
          <img
            src={catimg}
            alt="cat-img"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        <ConnectModel
          isOpen={openWalletModal}
          onClose={handlewalletModal}
          connectToMetaMask={connectToMetaMask}
          walletStatus={connected}
        />
      </div>
    </>
  );
}

export default WalletConnect;
