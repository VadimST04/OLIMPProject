import React, { useState } from "react";
import { MdOutlineHideImage } from "react-icons/md";
const ImageLoader = ({ src, displayErrors = true }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const imageVisibility = isLoading ? "hidden" : "block";
  const sceletonVisibility = isLoading ? "block" : "hidden";
  return (
    <div className="relative h-full w-full">
      {!isError && (
        <div
          className={`h-full w-full animate-[pulse_1s_ease-in-out_infinite] bg-[#999999] ${sceletonVisibility}`}
        ></div>
      )}
      {isError && displayErrors && (
        <div className="flex h-full w-full items-center justify-center ">
          <MdOutlineHideImage className="text-4xl" />
        </div>
      )}
      <img
        src={src}
        alt=""
        className={`absolute h-full w-full object-cover ${imageVisibility}`}
        onLoad={() => setIsLoading(false)}
        onErrorCapture={(e) => {
          e.preventDefault();
          setIsError(true);
        }}
      />
    </div>
  );
};

export default ImageLoader;
