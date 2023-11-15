import React, { useEffect, useRef, useState } from "react";
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from "react-icons/bi";

const ImageCarousel = ({ images }) => {
  const [activeImageIndex, setActiveImage] = useState(0);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [isLeftVisible, setIsLeftVisible] = useState(false);

  const onRightClick = () => {
    if (activeImageIndex === images.length - 1) return;
    setActiveImage(activeImageIndex + 1);
  };

  const onLeftClick = () => {
    if (activeImageIndex === 0) return;
    setActiveImage(activeImageIndex - 1);
  };

  useEffect(() => {
    if (activeImageIndex > images.length - 1) setActiveImage(0);
    setIsLeftVisible(activeImageIndex > 0);
    setIsRightVisible(activeImageIndex < images.length - 1);
  }, [activeImageIndex, images]);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div
        style={{ transform: `translateX(-${100 * activeImageIndex}%)` }}
        className="flex h-full w-full transition-transform duration-300 will-change-transform"
      >
        {images.map((image, index) => (
          <div className="relative h-full w-full flex-shrink-0" key={index}>
            <img
              src={image}
              alt=""
              className="absolute h-full w-full select-none object-cover"
            />
          </div>
        ))}
      </div>
      {isLeftVisible && (
        <>
          <button
            onClick={onLeftClick}
            className="absolute left-0 text-4xl text-white/40 outline-none hover:text-white/90"
          >
            <BiSolidChevronLeftCircle />
          </button>
        </>
      )}

      {isRightVisible && (
        <button
          onClick={onRightClick}
          className="absolute right-0 text-4xl text-white/40 outline-none hover:text-white/90"
        >
          <BiSolidChevronRightCircle />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-3 flex flex-wrap items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              onClick={() => setActiveImage(index)}
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 hover:bg-white/80 ${
                index === activeImageIndex
                  ? "scale-125 bg-white/80"
                  : "bg-white/30"
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
