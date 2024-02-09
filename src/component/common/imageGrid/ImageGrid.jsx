import React, { useState, useEffect } from "react";
import { zoomin } from "../../../assets";

function ImageGrid() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const numImages = 20;
      const responses = await Promise.all(
        Array.from({ length: numImages }, () =>
          fetch("https://api.thecatapi.com/v1/images/search")
        )
      );
      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      const urls = data.map((cat) => cat[0].url);
      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="w-full  mb-10 gap-5 columns-1 sm:columns-2 2xl:columns-4 lg:columns-4 md:columns-2 space-y-3">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="group relative">
          <div className="absolute flex items-end justify-end w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
            <img src={zoomin} alt="Zoom In" className=" h-[24px]" />
          </div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageUrl}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
