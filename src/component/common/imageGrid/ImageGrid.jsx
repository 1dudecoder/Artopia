import React, { useState, useEffect } from "react";
import { zoomin } from "../../../assets";
import { db_artopia_history } from "../../../db/artopiadb";

function ImageGrid({ handleImageModal }) {
  return (
    <div className="w-full  gap-5 columns-2 sm:columns-2 2xl:columns-4 lg:columns-3 md:columns-2 space-y-3 pb-20 md:pb-2">
      {db_artopia_history.map((imageUrl, index) => (
        <div key={index} className="group relative flex justify-center">
          <div className="absolute flex items-end justify-end w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
            <img
              src={zoomin}
              alt="Zoom In"
              className=" h-[24px]"
              onClick={() => {
                handleImageModal(imageUrl.id)
              }}
            />
          </div>
          <img
            className=" w-auto object-cover rounded-lg"
            src={imageUrl.upscaledUrls[0].imageUrl}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
