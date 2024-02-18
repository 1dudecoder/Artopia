import React, { useState } from "react";
import { dropicon } from "../../../assets"; // Make sure the path is correct

function Dropdown({ text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col relative mr-2 flex-wrap py-1">
      <span
        className="cursor-pointer px-2 py-1 border border-gray-300 rounded-lg flex w-fit justify-center items-center flex-row"
        onClick={toggleDropdown}
      >
        <p className=" text-[10px] text-nowrap ">{text}</p>

        <div>
          <img
            src={dropicon}
            alt="Down Arrow"
            className="ml-2 "
            onClick={toggleDropdown}
          />
        </div>
      </span>

      {isOpen && (
        <div className="flex bottom-8 mb-1 right-0 border border-gray-300 rounded-lg shadow-md bg-red flex-col absolute w-full bg-grey z-30 text-nowrap">
          <a
            href="#"
            className="block px-4 py-1 bg-black border-2  rounded-lg "
          >
            Option 1
          </a>
          <a href="#" className="block px-4 py-1 bg-black border-2">
            Option 2
          </a>
          <a href="#" className="block px-4 py-1 bg-black border-2">
            Option 3
          </a>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
