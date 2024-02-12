import React from "react";

function ImageButton({ size, text, icon }) {
  return (
    <div
      className={`font-${size} flex justify-center items-center text-${size}`}
    >
      <img src={icon} alt={`${icon}-icon`} />
      <p className="pl-3 text-[#f5f5f5d8]">{text}</p>
    </div>
  );
}

export default ImageButton;
