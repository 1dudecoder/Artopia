import React from 'react'

function ImageButton({size, text, icon}) {

  return (
    <div className={`font-${size} flex justify-center items-center text-${size}`}>
        <img src={icon} alt={`${icon}-icon`} />
        <p className='pl-3'>{text}</p>
    </div>
  )
}

export default ImageButton