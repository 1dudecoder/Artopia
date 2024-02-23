import React, { useState, useEffect } from "react";
import { zoomin } from "../../../assets";

function ImageGrid() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const numImages = 50;
      const response = await fetch(
        `https://pixabay.com/api/?key=41766090-be8a885a44c7857557522ec5b&q=nature&image_type=photo&per_page=${numImages}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      const urls = data.hits.map((image) => image.previewURL);
      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="w-full mb-10 gap-5 columns-2 sm:columns-2 2xl:columns-4 lg:columns-3 md:columns-2 space-y-3">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="group relative flex justify-center">
          <div className="absolute flex items-end justify-end w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
            <img src={zoomin} alt="Zoom In" className=" h-[24px]" />
          </div>
          <img
            className="h-auto w-full rounded-lg"
            src={imageUrl}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
