import React from "react";
import ImageLoader from "./ImageLoader";

const NewsItem = ({
  title,
  link,
  author,
  description,
  content,
  pub_date,
  image_url,
  source_id,
  country,
  language,
  setNewsDetails,
  setOpenDetails,
}) => {
  return (
    <div
      onClick={() => {
        setNewsDetails({
          title,
          link,
          author,
          description,
          content,
          pub_date,
          image_url,
          source_id,
          country,
          language,
          setOpenDetails,
        });
        setOpenDetails(true);
      }}
      className="relative h-[calc(50%-0.75rem)] w-full md:h-full"
    >
      <div className="h-full w-full select-none">
        <ImageLoader src={image_url} />
      </div>

      <div className="group absolute bottom-0 left-0 flex h-full w-full cursor-pointer flex-col justify-end bg-gradient-to-t from-black to-[50%] px-5 pb-5 font-semibold">
        <p className="line-clamp-1 w-full text-[18px] text-soft-white">
          {title}
        </p>
        <div className="h-0 w-full text-[14px] text-gray-200 transition-all duration-500 group-hover:h-16">
          <p className="line-clamp-3 h-full w-full">{content}</p>
        </div>
      </div>
      <div className="absolute right-2 top-2 rounded-md bg-main-green bg-opacity-75 px-2 py-1 capitalize text-soft-white">
        {language}
      </div>
    </div>
  );
};

export default NewsItem;
