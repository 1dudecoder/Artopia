import React, { useState, useEffect, useRef } from "react";
import "./GallaryCompo.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery({ handleSlideChange, setselectedImage }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  let disc = `A (((draconic creature))) soaring through the vast expanse of space, with (((twinkling stars))), (((glowingconstellations)), and (the eight planets of our solar system) faintly illuminated in the distant background epic cinematic BG, hyper detail and hyper quality, hyper detail equipment, 8k, Accurate Animal...`;
  let title = `Dragon of the seas.png`;

  const slidesData = [
    {
      id: 1,
      img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
      descrition: disc,
      title: title,
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
      descrition: disc,
      title: title,
    },
    {
      id: 3,
      img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
      descrition: disc,
      title: title,
    },
    {
      id: 4,
      img: "https://pixlr.com/images/index/ai-image-generator-one.webp",
      descrition: disc,
      title: title,
    },
    {
      id: 5,
      img: "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
      descrition: disc,
      title: title,
    },
    {
      id: 6,
      img: "https://imgupscaler.com/images/samples/Imgupscaler_2_2x.webp",
      descrition: disc,
      title: title,
    },
    {
      id: 7,
      img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
      descrition: disc,
      title: title,
    },
    {
      id: 8,
      img: "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
      descrition: disc,
      title: title,
    },
    {
      id: 9,
      img: "https://m.media-amazon.com/images/I/51iEVfyIidL._AC_UF1000,1000_QL80_.jpg",
      descrition: disc,
      title: title,
    },
    {
      id: 10,
      img: "https://wallpapers.com/images/hd/the-punisher-logo-cool-picture-o5yc3v4pr5m5d5vx.jpg",
      descrition: disc,
      title: title,
    },
    {
      id: 11,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGutwmHLyrL_Av7TzMUF9D7WyXEYkzi4BJyfoG8WFjpBRZDqe59ycTWiLIAB30oy-J6SA&usqp=CAU",
      descrition: disc,
      title: title,
    },
    {
      id: 12,
      img: "https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960",
      descrition: disc,
      title: title,
    },
  ];

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  useEffect(() => {
    setselectedImage(slidesData[0]);
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
      let data = slidesData[index];
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
          {slidesData.map((slide) => (
            <div className="slick-slide h-[300px]  w-[250px] min-[1000px]:h-[500px] min-[1000px]:w-full  rounded-2xl overflow-hidden">
              <img
                className="slick-slide-image py-2 px-2  object-cover h-full w-full scroll-mx-0  rounded-2xl overflow-hidden"
                src={slide.img}
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
            {slidesData.map((slide) => (
              <div
                id="tumb"
                className="slick-slide slick-slide-small  h-[75px]"
              >
                <img
                  className="slick-slide-image slick-slide-small object-cover h-full w-full px-2"
                  src={slide.img}
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
