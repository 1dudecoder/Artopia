import React, { useState, useEffect, useRef } from "react";
import "./GallaryCompo.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery({ handleSlideChange, setselectedImage, clickedImageData }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  useEffect(() => {
    if (clickedImageData) {
      setselectedImage(clickedImageData[0].upscaledUrls[0].imageUrl);
    }
  }, []);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
    infinite: true,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => {
      let data = clickedImageData[0]?.upscaledUrls[index];
      handleSlideChange(data, index);
    },
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
    infinite: true,
    autoplay: false,
    arrows: false,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="flex justify-center items-center relative min-[1000px]:top-2/4 max-[1000px]:mt-10">
      <div className="w-full block min-[1000px]:absolute  ">
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {clickedImageData &&
            clickedImageData[0]?.upscaledUrls?.map((slide) => (
              <div className="slick-slide h-[300px]  w-[250px] min-[1000px]:h-[500px] min-[1000px]:w-full  rounded-2xl overflow-hidden">
                <img
                  className="slick-slide-image py-2 px-2   h-full  scroll-mx-0  rounded-2xl overflow-hidden"
                  src={slide?.imageUrl}
                />
              </div>
            ))}
        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {clickedImageData &&
              clickedImageData[0]?.upscaledUrls?.map((slide) => (
                <div
                  id="tumb"
                  className="slick-slide slick-slide-small  h-[75px]"
                >
                  <img
                    className="slick-slide-image slick-slide-small object-cover h-full w-full px-2"
                    src={slide.imageUrl}
                  />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
