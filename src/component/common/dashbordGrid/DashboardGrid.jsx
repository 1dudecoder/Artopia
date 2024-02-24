import React from "react";
import { brownicon, downloadicon, zoomin } from "../../../assets";
import {
  db_artopia_history,
  db_old_images_dashboard,
} from "../../../db/artopiadb.js";
import "./DashboardGrid.css";

function DashboadGrid() {
  return (
    <div className="w-full h-full z-0 flex flex-row justify-between overflow-x-auto gap-5">
      {db_old_images_dashboard.map((myimg, index) => (
        <div
          key={index}
          className="group relative flex-shrink-0 w-[300px] h-[286px]  overflow-hidden rounded-lg"
        >
          <div className="absolute pt-2 pr-2  right-0 top-0 z-10 flex items-end justify-end l opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img src={zoomin} alt="Zoom In" className="h-6" />
          </div>

          <div className="absolute p-2 bottom-1  text-ellipsis  pr-12  z-10 flex items-end justify-end  opacity-0 group-hover:opacity-100 transition-opacity duration-300  overflow-hidden">
            <p className="px-1 text-sm text-ellipsis_new">{myimg.prompt}</p>
          </div>

          <div className="absolute p-2 bottom-0 right-0  z-10  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            <img
              src={brownicon}
              alt="brown icon"
              className="h-8 bg-[#424242] rounded-full mb-1"
            />
            <img
              src={downloadicon}
              alt="brown icon"
              className="h-8 bg-[#424242] rounded-full"
            />
          </div>

          <img
            className="h-full w-full rounded-lg transition object-cover duration-200 ease-in-out transform  blur-on-hover"
            src={myimg.upscaledUrls[0].imageUrl}
            alt={`Image ${index}`}
          />
        </div>
      ))}
    </div>
  );
}

export default DashboadGrid;
