import React from "react";

const NewsSection = ({ news1, news2, news3, news4, mirroredLayout }) => {
  return (
    <>
      {!mirroredLayout && (
        <div className="flex h-full w-full gap-5">
          <div className="flex h-full w-[130%] flex-col gap-5 pb-5">
            <div className="h-[60%] w-full">{news1}</div>
            <div className="h-[40%] w-full">{news3}</div>
          </div>
          <div className="flex h-full w-full flex-col gap-5">
            <div className="h-[50%] w-full">{news2}</div>
            <div className="h-[50%] w-full">{news4}</div>
          </div>
        </div>
      )}
      {mirroredLayout && (
        <div className="flex h-full w-full gap-5">
          <div className="flex h-full w-full flex-col gap-5 pb-5">
            <div className="h-[50%] w-full">{news1}</div>
            <div className="h-[50%] w-full">{news3}</div>
          </div>
          <div className="flex h-full w-[130%] flex-col gap-5 pb-5">
            <div className="h-[60%] w-full">{news2}</div>
            <div className="h-[40%] w-full">{news4}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsSection;
