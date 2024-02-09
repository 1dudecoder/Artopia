import React from "react";
import {
  artopialogo,
  disconnecticon,
  girlimg,
  helpicon,
  hideBar,
  historyicon,
  homeicon,
  imggen,
  imgicon,
  loadingicon,
  profileicon,
  settingicon,
  textimg,
  walleticon,
} from "../../assets";
import ImageButton from "../common/image-button/ImageButton";
import History from "../history/History";
import ImageSearch from "../Image-search/ImageSearch";
import { useLocation, useRoutes } from "react-router-dom";

function Dasboard() {
  const loction = useLocation();

  console.log(loction.pathname, "loction---");

  function handledashboard() {
    console.log(loction.pathname, "path-----");
    if (loction.pathname == "/dashboard") {
      return (
        <>
          <div className="w-[100%] text-white  overflow-auto font-HindMadurai">
            <ImageSearch />
          </div>
        </>
      );
    }

    if (loction.pathname == "/history") {
      return (
        <>
          <div className="w-[100%]  text-white  overflow-auto font-HindMadurai">
            <History />
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className="h-screen w-screen bg-custom-gradient flex font-HindMadurai ">
        <div className="w-[300px] h-[screen] flex flex-col justify-between  items-center bg-[#5d5d5d26]  backdrop-filter backdrop-blur-lg">
          <div className="flex flex-col justify-between h-full items-center p-4">
            <div className="flex flex-col ">
              <div className="flex justify-center ">
                <div className="flex justify-between item-center  w-full">
                  <div className="flex justify-center items-center">
                    <img
                      src={artopialogo}
                      alt="artopia-icon"
                      className="pr-4 h-4"
                    />
                    <p className=" text-white text-2xl font-HindMadurai">
                      Artopia
                    </p>
                  </div>

                  <div className={"flex justify-center items-center"}>
                    <img src={hideBar} alt={"hide-bar"} className="h-3" />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-white ">
                  <p className=" text-[#9E9E9E] text-base mb-3">Balance</p>
                  <div className="flex justify-between">
                    <div className="flex justify-start">
                      <img
                        src={loadingicon}
                        alt="loading-icons"
                        className="h-6"
                      />
                      <p className="font-[22.04px] pl-2  pr-10">3,000</p>
                    </div>

                    <div className="border px-2 py-[0.10rem] rounded-full whitespace-nowrap">
                      <p className="text-sm padding whitespace-nowrap">
                        Buy More
                      </p>
                    </div>
                  </div>

                  <p className="text-sm underline text-[#BDBDBD] mt-[5%]">
                    Guidelines
                  </p>
                </div>

                <div className="text-white mt-4  text-start">
                  <p className="text-[#9E9E9E] text-base  mt-[5%]">
                    Start Here
                  </p>
                  <div className="flex flex-col">
                    <div className="flex justify-start mt-3">
                      <ImageButton
                        icon={homeicon}
                        text={"Home"}
                        size={"base"}
                      />
                    </div>
                    <div className="flex justify-start mt-5">
                      <ImageButton
                        icon={historyicon}
                        text={"History"}
                        size={"base"}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-white mt-4 text-start">
                  <p className="text-[#9E9E9E] text-base mt-3">Tools</p>
                  <div className="flex flex-col">
                    <div className="flex justify-start mt-3">
                      <ImageButton
                        icon={textimg}
                        text={"Text to Image"}
                        size={"base"}
                      />
                    </div>
                    <div className="flex justify-start mt-5">
                      <ImageButton
                        icon={imgicon}
                        text={"Image to Image"}
                        size={"base"}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-white mt-4  text-start">
                  <p className="text-[#9E9E9E] text-base mt-3">More Option</p>
                  <div className="flex flex-col">
                    <div className="flex justify-start mt-5">
                      <ImageButton
                        icon={profileicon}
                        text={"Profile"}
                        size={"base"}
                      />
                    </div>
                    <div className="flex justify-start mt-3">
                      <ImageButton
                        icon={helpicon}
                        text={"help"}
                        size={"base"}
                      />
                    </div>
                    <div className="flex justify-start mt-5">
                      <ImageButton
                        icon={settingicon}
                        text={"Setting"}
                        size={"base"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white flex  justify-start items-center w-full text-ellipsis">
              <div className="flex flex-col w-fit justify-center">
                <div className="flex  justify-center">
                  <img src={girlimg} alt="girl-img" />

                  <div className="ml-4">
                    <p className="text-[16px]">Justin Barboe</p>

                    <div className="flex pr-4">
                      <img src={walleticon} alt="wallet-icon" />
                      <p className="pl-2 text-[12px] text-ellipsis w-full">
                        0x168v37...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start w-full mt-2">
                  <p className="text-[#E33629] mr-2 text-sm">Disconnect</p>
                  <div>
                    <img
                      src={disconnecticon}
                      alt="disconnect-icon"
                      className="h-fit w-fit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {handledashboard()}
      </div>
    </>
  );
}

export default Dasboard;
