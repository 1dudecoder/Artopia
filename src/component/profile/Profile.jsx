import React, { useState } from "react";
import {
  attheratesvg,
  backspinner,
  deleteconformicon,
  depositicon,
  errormodalicon,
  exchangeicon,
  mastmaskprofile,
  remove,
  successconformicon,
  tickicon,
  uploadpofile,
} from "../../assets";
import { useNavigate } from "react-router-dom";
import DragandDrop from "../common/dragandDrop/DragandDrop";

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(true);
  const [accountManagement, setAccountManagement] = useState(false);
  const [transitionHistory, setTransitionHistory] = useState(false);

  const [deleteconform, setDeleteConform] = useState(false);
  const [successconform, setSuccessConform] = useState(false);

  function handlebarclicked(id) {
    setProfile(false);
    setAccountManagement(false);
    setTransitionHistory(false);

    if (id == 1) {
      setProfile(true);
    }
    if (id == 2) {
      setAccountManagement(true);
    }
    if (id == 3) {
      setTransitionHistory(true);
    }
  }

  function handleDeleteConform() {
    setDeleteConform(!deleteconform);
  }

  function handleDeleteSuccess() {
    setDeleteConform(false);
    setSuccessConform(!successconform);
  }

  return (
    <div className="p-3 sm:p-5 font-HindMadurai">
      <p className="from-neutral-700 font-popin py-1">Profile</p>

      <div className="flex justify-start items-center text-nowrap overflow-auto  gap-8 mt-1 sm:mt-4 text-[#ffffffaf] ">
        <div className="flex justify-center items-center gap-2">
          {profile && <div className="w-2 h-2 bg-white rounded-full"></div>}

          <p
            className={`${profile && "text-white"}`}
            onClick={() => {
              handlebarclicked(1);
            }}
          >
            Profile
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          {accountManagement && (
            <div className="w-2 h-2 bg-white rounded-full"></div>
          )}
          <p
            className={`${accountManagement && "text-white"}`}
            onClick={() => {
              handlebarclicked(2);
            }}
          >
            Account Management
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          {transitionHistory && (
            <div className="w-2 h-2 bg-white rounded-full"></div>
          )}
          <p
            className={`${transitionHistory && "text-white"}`}
            onClick={() => {
              handlebarclicked(3);
            }}
          >
            Transition History
          </p>
        </div>
      </div>

      <div className="w-full h-[0.2px] bg-[#ffffff1d] mb-2 sm:mb-4 sm:mt-2"></div>

      {profile && (
        <div className="flex justify-between items-start w-full  gap-2 flex-col-reverse lg:flex-row ">
          <div className="flex justify-start items-start w-full  lg:w-[27.4375rem] ">
            <div className="flex flex-col justify-start w-full ">
              <div className="flex flex-col justify-start">
                <p className="text-[#ffffffaf] text-xl">Avatar</p>

                <DragandDrop
                  myclass="py-10"
                  vectorstyle=""
                  text="Click to upload avatar"
                />
              </div>

              <div className="flex flex-col justify-start mt-4">
                <p className="text-[#ffffffaf] text-xl">User Name</p>
                <div className="flex justify-start items-start border-[0.2px] border-[#7470706c] text-nowrap mt-2 rounded-xl  flex-col bg-[#7470701a]">
                  <div className="flex ">
                    <img src={attheratesvg} alt="@ image" className="p-3" />
                  </div>
                </div>

                <p className="text-[#ffffffaf] text-sm px-4 pt-2">
                  validating...
                </p>
              </div>

              <div className="flex flex-col justify-start mt-4">
                <p className="text-[#ffffffaf] text-xl">Wallet Address</p>
                <div className="flex justify-start items-start border-[0.2px] border-[#7470706c] text-nowrap mt-2 rounded-xl  flex-col bg-[#7470701a]">
                  <div className="flex justify-center items-center">
                    <img
                      src={mastmaskprofile}
                      alt="mastmask image"
                      className="p-3"
                    />
                    <p className="text-[#ffffffe2]">
                      0x168v3712g912g9ui72ivdva39u083
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 px-2 mt-1 pb-8">
                <img src={tickicon} alt="tick image" />
                <p className="text-[#00C247] text-sm">Connected</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end w-full  lg:w-[27.4375rem] ">
            <div className="flex flex-col justify-start  w-full">
              <div className="flex justify-start  items-start border-[0.2px] border-[#7470706c] text-nowrap mt-2 rounded-xl  flex-col bg-[#7470701a] pr-32">
                <div className="flex justify-start flex-col items-start p-4">
                  <p className="text-sm">Current Balance: </p>
                  <div className="flex flex-row justify-center items-center ">
                    <img
                      src={backspinner}
                      alt="mastmask image"
                      className="h-6 pr-2"
                    />
                    <p className="text-[#ffffffe2] text-[48px] font-HindMadurai font-bold ">
                      30,000{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {accountManagement && (
        <>
          <div className="w-full pr-4">
            <p className="text-[20px] mt-4 font-bold">Delete your account</p>
            <p className="md:pr-32 text-[14px] mt-4 text-[#ffffffa7] font-popin md:w-[550px] ">
              By deleting your account you will lose all the created images &
              your wallet will also delink, the remaining token will be
              automatically transfer to your wallet.{" "}
            </p>

            <div
              className="bg-gradient-to-r from-blue-700 to-teal-400 bg-slate-600 w-fit py-3 px-10 lg:px-16 text-center rounded-[50px] mt-4"
              onClick={handleDeleteConform}
            >
              Delete Account
            </div>
          </div>

          {deleteconform && (
            <div className="h-full w-full  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-center items-center bg-cover bg-center bg-blur backdrop-blur-md">
              <div className="sm:w-[23.5625rem]  p-4 pb-5  w-[90%]   bg-[#1E1E1E]  rounded-[20px] flex flex-col text-white z-50 relative">
                <div className="flex justify-end absolute right-0 p-3">
                  <img
                    src={remove}
                    alt="remove-btn"
                    className="cursor-pointer h-6 "
                    onClick={handleDeleteConform}
                  />
                </div>
                <div className="flex flex-col text-center items-center justify-evenly">
                  <img src={deleteconformicon} alt="error-logo" />
                  <p className="font-HindMadurai text-[24px] mb-2">
                    Deleting account
                  </p>
                  <p className="text-sm text-[#9E9E9E]">
                    Are you sure you want to delete this account. It will not
                    recover in the future
                  </p>

                  <div
                    className="bg-gradient-to-r from-blue-700 to-teal-400 bg-slate-600 w-full py-3 px-10 lg:px-16 text-center rounded-[50px] mt-4"
                    onClick={handleDeleteSuccess}
                  >
                    Delete account
                  </div>
                </div>
              </div>
            </div>
          )}

          {successconform && (
            <div className="h-full w-full  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-center items-center bg-cover bg-center bg-blur backdrop-blur-md">
              <div className="sm:w-[23.5625rem]  p-4 pb-5  w-[90%]   bg-[#1E1E1E]  rounded-[20px] flex flex-col text-white z-50 relative">
                <div className="flex justify-end absolute right-0 p-3">
                  <img
                    src={remove}
                    alt="remove-btn"
                    className="cursor-pointer h-6 "
                    onClick={handleDeleteSuccess}
                  />
                </div>
                <div className="flex flex-col text-center items-center justify-evenly">
                  <img src={successconformicon} alt="error-logo" />
                  <p className="font-HindMadurai text-[24px] mb-2 text-nowrap">
                    Account deleted successfully
                  </p>
                  <p className="text-sm text-[#9E9E9E]">
                    Your account is successfully deleted. you can still use our
                    site by going{" "}
                    <span
                      className="underline text-sm text-white"
                      onClick={() => navigate("/dashboard")}
                    >
                      Go Home
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {transitionHistory && (
        <>
          <div className="w-full flex justify-center items-center  lg:w-4/5 text-nowrap">
            <div className="h-full w-full p-4 lg:p-10 rounded-xl border-2 border-[#95929223] bg-[#95929223] flex lg:w-5/6 justify-start items-start flex-col ">
              <div className="flex justify-start flex-col items-start py-4 sm:py-0 ">
                <p className="text-sm">Current Balance: </p>
                <div className="flex flex-row justify-start items-center  ">
                  <img
                    src={backspinner}
                    alt="mastmask image"
                    className="h-6 pr-2"
                  />
                  <p className="text-[#ffffffe2] text-[48px] font-HindMadurai font-bold ">
                    30,000{" "}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center w-full">
                <p>Transition History</p>
                <p className="text-sm text-[#ffffff7c]">View All</p>
              </div>

              <div className="w-full flex  justify-between mt-6">
                <div className="flex flex-col   w-full items-start ">
                  <div className="flex justify-between items-center w-full pb-4">
                    <p className="text-sm text-[#ffffff7c]">Event</p>
                    <p className="text-sm text-[#ffffff7c]">Date & Time</p>
                    <p className="text-sm text-[#ffffff7c]">Price</p>
                  </div>

                  <div className="mt-2 flex w-full justify-between items-center text-sm py-1">
                    <div className="flex justify-start gap-2 text-sm ">
                      <img src={depositicon} alt="deposit-icon" />
                      <p>Deposit</p>
                    </div>

                    <div className="flex justify-center items-center w-60">
                      <p>10 minutes ago</p>
                    </div>

                    <div className="flex justify-center items-center ">
                      <p className="text-[#00C247] ">+300 Bl</p>
                    </div>
                  </div>

                  <div className="mt-2 flex w-full justify-between items-center text-sm py-1">
                    <div className="flex justify-start gap-2 text-sm">
                      <img src={exchangeicon} alt="exchange-icon" />
                      <p>Exchange</p>
                    </div>

                    <div className="flex justify-center items-center">
                      <p>Oct 13, 2023 at 08:05 am</p>
                    </div>

                    <div className="flex justify-center items-center ">
                      <p className="text-[#E33629] ">-1500 Bl</p>
                    </div>
                  </div>

                  <div className="mt-2 flex w-full justify-between items-center text-sm py-1">
                    <div className="flex justify-start gap-2 text-sm ">
                      <img src={depositicon} alt="deposit-icon" />
                      <p>Deposit</p>
                    </div>

                    <div className="flex justify-center items-center w-60">
                      <p>10 minutes ago</p>
                    </div>

                    <div className="flex justify-center items-center ">
                      <p className="text-[#00C247] ">+300 Bl</p>
                    </div>
                  </div>

                  <div className="mt-2 flex w-full justify-between items-center text-sm py-1">
                    <div className="flex justify-start gap-2 text-sm">
                      <img src={exchangeicon} alt="exchange-icon" />
                      <p>Exchange</p>
                    </div>

                    <div className="flex justify-center items-center">
                      <p>Oct 13, 2023 at 08:05 am</p>
                    </div>

                    <div className="flex justify-center items-center ">
                      <p className="text-[#E33629] ">-1500 Bl</p>
                    </div>
                  </div>

                  <div className="mt-2 flex w-full justify-between items-center text-sm py-1">
                    <div className="flex justify-start gap-2 text-sm ">
                      <img src={depositicon} alt="deposit-icon" />
                      <p>Deposit</p>
                    </div>

                    <div className="flex justify-center items-center w-60">
                      <p>10 minutes ago</p>
                    </div>

                    <div className="flex justify-center items-center ">
                      <p className="text-[#00C247] ">+300 Bl</p>
                    </div>
                  </div>

                  <div className="mt-2 flex w-full justify-between items-center text-sm py-1">
                    <div className="flex justify-start gap-2 text-sm">
                      <img src={exchangeicon} alt="exchange-icon" />
                      <p>Exchange</p>
                    </div>

                    <div className="flex justify-center items-center">
                      <p>Oct 13, 2023 at 08:05 am</p>
                    </div>

                    <div className="flex justify-center items-center ">
                      <p className="text-[#E33629] ">-1500 Bl</p>
                    </div>
                  </div>

                  <div className="mt-2 flex w-full justify-between items-center text-sm py-1">
                    <div className="flex justify-start gap-2 text-sm ">
                      <img src={depositicon} alt="deposit-icon" />
                      <p>Deposit</p>
                    </div>

                    <div className="flex justify-center items-center w-60">
                      <p>10 minutes ago</p>
                    </div>

                    <div className="flex justify-center items-center ">
                      <p className="text-[#00C247] ">+300 Bl</p>
                    </div>
                  </div>

                  <div className="mt-2 flex w-full justify-between items-center text-sm py-1">
                    <div className="flex justify-start gap-2 text-sm">
                      <img src={exchangeicon} alt="exchange-icon" />
                      <p>Exchange</p>
                    </div>

                    <div className="flex justify-center items-center">
                      <p>Oct 13, 2023 at 08:05 am</p>
                    </div>

                    <div className="flex justify-center items-center ">
                      <p className="text-[#E33629] ">-1500 Bl</p>
                    </div>
                  </div>

                  <div className="mt-2 flex w-full justify-between items-center text-sm py-1">
                    <div className="flex justify-start gap-2 text-sm ">
                      <img src={depositicon} alt="deposit-icon" />
                      <p>Deposit</p>
                    </div>

                    <div className="flex justify-center items-center w-60">
                      <p>10 minutes ago</p>
                    </div>

                    <div className="flex justify-center items-center ">
                      <p className="text-[#00C247] ">+300 Bl</p>
                    </div>
                  </div>

                  <div className="mt-2 flex w-full justify-between items-center text-sm py-1">
                    <div className="flex justify-start gap-2 text-sm">
                      <img src={exchangeicon} alt="exchange-icon" />
                      <p>Exchange</p>
                    </div>

                    <div className="flex justify-center items-center">
                      <p>Oct 13, 2023 at 08:05 am</p>
                    </div>

                    <div className="flex justify-center items-center ">
                      <p className="text-[#E33629] ">-1500 Bl</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
