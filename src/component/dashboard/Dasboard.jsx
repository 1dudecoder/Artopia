import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  artopialogo,
  dashhide,
  disconnecticon,
  downarrow,
  girlimg,
  helpicon,
  hideBar,
  historyicon,
  homeicon,
  imgicon,
  loadingicon,
  profileicon,
  settingicon,
  textimg,
  walleticon,
} from "../../assets";
import ImageButton from "../common/image-button/ImageButton";
import ImageSearch from "../Image-search/ImageSearch";
import { useLocation, useNavigate } from "react-router-dom";
import History from "../historyCompo/History";
import TextToImage from "../TextToImage/TextToImage";
import { useSelector, useDispatch } from "react-redux";
import ImagetoImage from "../Imagetotext/ImagetoText";
import BuyMore from "../buymore/BuyMore";
import Profile from "../profile/Profile";

function Dasboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const walletdata = useSelector((state) => state.walletData.data);
  const anymodal = useSelector((state) => state.dashboarddata.data.anymodal);

  const [barHide, setBarHide] = useState(false);

  const handleNavigate = useCallback((navr) => {
    navigate(`${navr}`);
  }, []);

  function handledashboard() {
    if (location.pathname == "/dashboard") {
      return <ImageSearch />;
    }

    if (location.pathname == "/history") {
      return <History />;
    }

    if (location.pathname == "/texttoimage") {
      return <TextToImage />;
    }

    if (location.pathname == "/imagetoimage") {
      return <ImagetoImage />;
    }

    if (location.pathname == "/buymore") {
      return <BuyMore />;
    }

    if (location.pathname == "/profile") {
      return <Profile />;
    }
  }

  const handledashbar = () => {
    setBarHide(!barHide);
  };

  const SidebarItem = () => {
    return (
      <div className="flex flex-col justify-between h-full items-center py-4 px-2 ">
        <div className="flex flex-col ">
          <div className="flex justify-center ">
            <div className="flex justify-between item-center  w-full">
              <div className="flex justify-center items-center">
                <img
                  src={artopialogo}
                  alt="artopia-icon"
                  className="pr-4 h-4"
                />
                <p className=" text-white text-2xl font-HindMadurai">Artopia</p>
              </div>

              <div
                className={"flex justify-center items-center"}
                onClick={handledashbar}
              >
                <img src={hideBar} alt={"hide-bar"} className="h-3 px-2" />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-white ">
              <p className=" text-[#9E9E9E] text-base mb-3">Balance</p>
              <div className="flex justify-between">
                <div className="flex justify-start">
                  <img src={loadingicon} alt="loading-icons" className="h-6" />
                  <p className="font-[22.04px] pl-2  pr-10">3,000</p>
                </div>

                <div className="border flex justify-center items-center border-none  p-[0.70px] rounded-full whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-500 ">
                  <div
                    class="px-2 py-1 rounded-full bg-[#000000ac]"
                    onClick={() => {
                      navigate("/buymore");
                    }}
                  >
                    <p class="text-sm font-popin">Buy More</p>
                  </div>
                </div>
              </div>

              <p className="text-sm underline text-[#BDBDBD] mt-[5%]">
                Guidelines
              </p>
            </div>

            <div className="text-white mt-5 sm:mt-6  text-start">
              <p className="text-[#9E9E9E] text-base  mt-[5%]">Start Here</p>
              <div className="flex flex-col ">
                <div
                  className="flex justify-start mt-3"
                  onClick={() => {
                    handleNavigate("/dashboard");
                  }}
                >
                  <ImageButton icon={homeicon} text={"Home"} size={"base"} />
                </div>
                <div
                  className="flex justify-start mt-5"
                  onClick={() => {
                    handleNavigate("/history");
                  }}
                >
                  <ImageButton
                    icon={historyicon}
                    text={"History"}
                    size={"base"}
                  />
                </div>
              </div>
            </div>

            <div className="text-white  mt-5 sm:mt-6 text-start">
              <p className="text-[#9E9E9E] text-base mt-3">Tools</p>
              <div className="flex flex-col">
                <div
                  className="flex justify-start mt-3"
                  onClick={() => {
                    handleNavigate("/texttoimage");
                  }}
                >
                  <ImageButton
                    icon={textimg}
                    text={"Text to Image"}
                    size={"base"}
                  />
                </div>
                <div
                  className="flex justify-start mt-5"
                  onClick={() => {
                    handleNavigate("/imagetoimage");
                  }}
                >
                  <ImageButton
                    icon={imgicon}
                    text={"Image to Image"}
                    size={"base"}
                  />
                </div>
              </div>
            </div>

            <div className="text-white  mt-5 sm:mt-6  text-start">
              <p className="text-[#9E9E9E] text-base mt-3">More Option</p>
              <div className="flex flex-col">
                <div
                  className="flex justify-start mt-5"
                  onClick={() => {
                    handleNavigate("/profile");
                  }}
                >
                  <ImageButton
                    icon={profileicon}
                    text={"Profile"}
                    size={"base"}
                  />
                </div>
                <div className="flex justify-start mt-3">
                  <ImageButton icon={helpicon} text={"help"} size={"base"} />
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
            <div className="flex items-center  justify-center">
              <img src={girlimg} alt="girl-img" className="h-auto w-auto" />

              <div className="ml-4">
                <p className="text-[16px]">Justin Barboe</p>

                <div className="flex pr-4">
                  <img src={walleticon} alt="wallet-icon" />
                  <p className="pl-2 text-[12px] text-ellipsis w-full">
                    0x168v3712g...
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
    );
  };

  return (
    <>
      <div className="h-screen w-screen bg-custom-gradient flex font-HindMadurai ">
        <div className="hidden sm:flex w-[250px]  justify-end bg-[#5d5d5d26]  backdrop-filter backdrop-blur-sm pl-6 border-e-[0.2px] border-[#f4f4f447]">
          <SidebarItem />
        </div>
        <div className="flex sm:hidden backdrop-filter backdrop-blur-sm z-10 ">
          <div
            className={`flex z-10 bg-custom-gradient h-full absolute transition-transform duration-300 justify-center items-center ${
              barHide
                ? "translate-x-0  w-[250px]  border-e-[0.2px] border-[#f4f4f447]"
                : "-translate-x-full"
            }`}
          >
            <SidebarItem />
          </div>
        </div>

        <div className="w-[100%] relative h-full text-white  overflow-auto font-HindMadurai">
          {!anymodal && (
            <div className="flex sm:hidden w-full justify-between   py-3 px-2">
              <div className="flex justify-center items-center ">
                <img
                  src={artopialogo}
                  alt="artopia-icon"
                  className="pr-4 h-4"
                />
                <p className=" text-white text-2xl font-HindMadurai">Artopia</p>
              </div>
              <div className="flex items-center">
                <div className="border-2 border-[#9e9e9e5b] py-1 px-3 rounded-[20px] flex  items-center justify-between">
                  <div className="flex justify-center items-center pr-1">
                    <img src={girlimg} alt="girl-img" className="h-6" />
                  </div>
                  <div className="flex  items-center ">
                    <p className="pr-2 text-sm text-[#F4F4F4]">John Doe</p>
                    <img src={downarrow} alt="downarrow-icon" className="h-3" />
                  </div>
                </div>

                <div
                  className="text-white ml-2 p-2 py-3 rounded-full border-[#f4f4f458] border-2"
                  onClick={handledashbar}
                >
                  <img src={dashhide} alt="dash-hide" />
                </div>
              </div>
            </div>
          )}

          {handledashboard()}
        </div>
      </div>
    </>
  );
}

export default Dasboard;
