import React, { useEffect, useState } from "react";
import GallaryCompo from "../../common/gallaryCompo/GallaryCompo.jsx";
import { remove } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { anymodal } from "../../../features/reducers/dashboardSlice.js";
import { useDispatch } from "react-redux";

function ImageModal({ handleModalShow, imagemodal }) {
  const [selectedImage, setselectedImage] = useState(0);

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

  return (
    <div className="w-full h-screen pt-4 absolute bg-blur backdrop-blur-md top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-blue flex justify-center items-center overflow-scroll">
      <div className="h-full overflow-scroll max-w-[95%] max-h-[95%] bg-[#2f2e2e] rounded-2xl  p-2 relative">
        <div
          className="flex justify-end absolute w-full  items-end pt-2 pr-6"
          onClick={handleModalShow}
        >
          <img src={remove} alt="" className="h-5" />
        </div>

        <div
          id="modalContent"
          className="w-full h-full min-[1000px]:p-4 flex font-popin justify-between max-[1000px]:items-center flex-row-reverse  max-[1000px]:flex-col overflow-scroll"
        >
          <div className="w-[80%] min-[1000px]:w-[60%] h-full  ml-3 mx-5">
            <GallaryCompo
              setselectedImage={setselectedImage}
              handleSlideChange={handleSlideChange}
            />
          </div>

          <div className="flex flex-col  min-[1000px]:w-[40%] pr-2 max-[1000px]:mt-20 min-[1000px]:mr-10 ">
            <div className="mr-4 w-full ">
              <p className="text-[18px]">Prompt</p>
              <div className="bg-blur backdrop-blur-sm bg-[#ffffff20] py-1 px-2 mt-4 rounded-md w-full">
                <div className="flex text-base font-popin py-2 w-full">
                  <p className="p-2 bg-[#2445EE] rounded-l-md text-base">
                    Img Url:
                  </p>
                  <p className="p-2 bg-blur backdrop-blur-sm bg-[#ffffff20] rounded-r-md text-base">
                    Dragon of the seas.png
                  </p>
                </div>
                <p className="text-[13px] text-ellipsis py-2">
                  A (((draconic creature))) soaring through the vast expanse of
                  space, with (((twinkling stars))), (((glowing
                  constellations)), and (the eight planets of our solar system)
                  faintly illuminated in the distant background epic cinematic
                  BG, hyper detail and hyper quality, hyper detail equipment,
                  8k, Accurate Animal...
                </p>
              </div>
            </div>
            <div className=" mr-4 w-full mt-6">
              <p className="text-[18px]">Back Story</p>
              <div className="bg-blur backdrop-blur-sm bg-[#ffffff20] py-1 px-2 mt-4 rounded-md w-full">
                <p className="text-[13px] text-ellipsis py-2">
                  A (((draconic creature))) soaring through the vast expanse of
                  space, with (((twinkling stars))), (((glowing
                  constellations)), and (the eight planets of our solar system)
                  faintly illuminated in the distant background epic cinematic
                  BG, hyper detail and hyper quality, hyper detail equipment,
                  8k, Accurate Animal...
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
