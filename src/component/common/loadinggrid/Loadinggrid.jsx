import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loadinggrid = ({ setGridChange, gridchange }) => {
  const [loadingFinish, setLoadingFinish] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadingFinish(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={
        gridchange
          ? `w-full h-full  flex items-center`
          : `w-full h-full pt-5 flex items-start justify-start max-[1149px]:flex-wrap`
      }
    >
      {loadingFinish ? (
        <>
          <div
            className={
              gridchange
                ? `grid grid-cols-2 w-fit justify-center`
                : "flex flex-wrap justify-start items-start max-[1149px]:grid max-[1149px] grid-cols-2"
            }
          >
            <div className="m-1 md:h-auto md:w-auto ">
              <img
                src="https://static.freeimages.com/images/home/filetypes/photo.webp"
                className="h-auto w-auto"
                alt=""
              />
            </div>
            <div className="m-1 md:h-auto md:w-auto  ">
              <img
                src="https://static.freeimages.com/images/home/filetypes/photo.webp"
                className="h-auto w-auto"
                alt=""
              />
            </div>
            <div className="m-1 md:h-auto md:w-auto  ">
              <img
                src="https://static.freeimages.com/images/home/filetypes/photo.webp"
                className="h-auto w-auto"
                alt=""
              />
            </div>
            <div className="m-1 md:h-auto md:w-auto  ">
              <img
                src="https://static.freeimages.com/images/home/filetypes/photo.webp"
                className="h-auto w-auto"
                alt=""
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={
              gridchange
                ? `grid grid-cols-2 w-fit`
                : "flex flex-wrap justify-start items-start "
            }
          >
            <SkeletonTheme color="#e0e0e0" highlightColor="#f5f5f5">
              <Skeleton className="m-1 h-[140px] w-[140px]" />
              <Skeleton className="m-1 h-[140px] w-[140px]" />
              <Skeleton className="m-1 h-[140px] w-[140px]" />
              <Skeleton className="m-1 h-[140px] w-[140px]" />
            </SkeletonTheme>
          </div>
        </>
      )}
    </div>
  );
};

export default Loadinggrid;
