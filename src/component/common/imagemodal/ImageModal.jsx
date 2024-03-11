import React, { useEffect, useState } from "react";
import GallaryCompo from "../../common/gallaryCompo/GallaryCompo.jsx";
import { remove } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { anymodal } from "../../../features/reducers/dashboardSlice.js";
import { useDispatch, useSelector } from "react-redux";

function ImageModal({ handleModalShow, imagemodal, clickedby }) {
  const [selectedImage, setselectedImage] = useState(0);
  const [clickedImageData, setclickedImageData] = useState();

  let itidata = useSelector((state) => state.ITIdata.ITIclickdata);
  let historydata = useSelector(
    (state) => state.historyimageclicked.historyimagedata
  );

  console.log(historydata, itidata, "itidata--->");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSlideChange = (data, index) => {
    setselectedImage(data);
  };

  const SelectedgalleryImage = () => {
    dispatch(anymodal(!imagemodal));
    navigate("/texttoimage", { state: { navyes: true, selectedImage } });
  };

  useEffect(() => {
    const modalContent = document.getElementById("modalContent");
    modalContent.scrollTop = 0;
  });

  useEffect(() => {
    if (clickedby == "imagetoimage") {
      if (itidata) {
        setclickedImageData(itidata);
      }
    }

    if (clickedby == "historyimage") {
      if (historydata) {
        setclickedImageData(historydata);
      }
    }
  }, []);

  return (
    <div className="w-full h-screen pt-4 absolute bg-blur backdrop-blur-md top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-blue flex justify-center items-center overflow-scroll">
      <div className="h-full w-full overflow-scroll max-w-[95%] max-h-[95%] bg-[#2f2e2e] rounded-2xl  p-2 relative">
        <div
          className="flex justify-end absolute w-full  items-end pt-2 pr-6"
          onClick={() => {
            handleModalShow();
          }}
        >
          <img src={remove} alt="" className="h-5 px-4" />
        </div>

        <div
          id="modalContent"
          className="w-full h-full min-[1000px]:p-4 flex font-popin justify-between max-[1000px]:items-center flex-row-reverse  max-[1000px]:flex-col overflow-scroll"
        >
          <div className="w-[80%] min-[1000px]:w-[60%] h-full  ml-3 mx-5">
            <GallaryCompo
              setselectedImage={setselectedImage}
              handleSlideChange={handleSlideChange}
              clickedImageData={clickedImageData}
            />
          </div>

          <div className="flex flex-col  min-[1000px]:w-[40%] pr-2 max-[1000px]:mt-20 min-[1000px]:mr-10 ">
            <div className="mr-4 w-full ">
              <p className="text-[18px]">Prompt</p>
              <div className="bg-blur backdrop-blur-sm bg-[#ffffff20] py-1 px-2 mt-4 rounded-md w-full">
                <div className="flex text-base font-popin py-2 w-full ">
                  <p className="px-2 bg-[#2445EE] rounded-l-md text-base text-nowrap flex justify-center items-center">
                    Img Url:
                  </p>
                  <p className="w-full px-2 bg-blur backdrop-blur-sm bg-[#ffffff20] rounded-r-md  text-[13px] text-ellipsis-url  ">
                    {/* {`
                      ${clickedImageData && clickedImageData[0]?.url}
                   `} */}

                    {/* https://images.unsplash.com/photo-1708623460319
                    -3f1d8865778a?w=500&auto=format&fit=crop&q=60&ixlib=
                    rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8 */}

                    https://imagineapi/4a2da0ba-3726-4e6e-a8cf-04d6f5ce5bb4/4a2da0ba-3726-4e6e-a8cf-04d6f5ce5bb4.png
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    beatae atque minus in, dolores culpa repudiandae optio
                    ducimus. Explicabo, quibusdam! Nostrum deserunt corporis
                    pariatur odit provident adipisci, molestias fugit quasi
                    doloribus similique cupiditate reprehenderit reiciendis ex,
                    consectetur distinctio doloremque velit. Quis cupiditate
                    nulla laudantium. Voluptatem et architecto consequuntur
                    praesentium est. */}
                  </p>
                </div>

                <p className="text-[13px] text-ellipsis-test min-h-20">
                  {clickedImageData && clickedImageData[0]?.prompt}{" "}
                </p>
              </div>
            </div>
            <div className=" mr-4 w-full mt-6">
              <p className="text-[18px]">Back Story</p>
              <div className="bg-blur backdrop-blur-sm bg-[#ffffff20] py-1 px-2 mt-4 rounded-md w-full">
                <p className="text-[13px] text-ellipsis-test min-h-20">
                  {clickedImageData && clickedImageData[0]?.backstory_prompt}
                </p>
              </div>
            </div>

            <div className="w-full px-2 mt-4 text-center">
              <div
                className="flex w-full h-fit px-4  item-center bg-gradient-to-r from-blue-700 to-teal-400  rounded-3xl  py-1  text-center"
                onClick={SelectedgalleryImage}
              >
                <p className="  text-center w-full text-base py-1">
                  Select Image
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
