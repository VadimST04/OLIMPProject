import React from "react";

const CollapseIcon = ({ arrowDirectionRight = true }) => {
  const topStrokeRotation = arrowDirectionRight
    ? "group-hover:rotate-[32deg]"
    : "group-hover:rotate-[-32deg]";
  const bottomStrokeRotation = arrowDirectionRight
    ? "group-hover:rotate-[-32deg]"
    : "group-hover:rotate-[32deg]";
  return (
    <div className="group flex h-32 w-10 flex-col items-center justify-center">
      <div
        className={`h-4 w-1 translate-y-[2.5px] rounded-full bg-main-green transition-all duration-200 ${topStrokeRotation}`}
      ></div>
      <div
        className={`h-4 w-1 -translate-y-[2.5px] rounded-full bg-main-green transition-all duration-200 ${bottomStrokeRotation}`}
      ></div>
    </div>
  );
};

export default CollapseIcon;
