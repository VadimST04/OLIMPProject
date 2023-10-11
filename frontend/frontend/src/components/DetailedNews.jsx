import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const DetailedNews = ({
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
}) => {
  const date = new Date(pub_date);
  const now = new Date();
  const hoursDifference = Math.floor((now - date) / (1000 * 60 * 60));
  const daysDifference = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  const timeSinceArticlePosted =
    daysDifference > 0 ? daysDifference + "d" : hoursDifference + "h";

  const url = new URL(link);
  const websiteName = url.hostname.replace("www.", "");
  return (
    <div className="flex h-full w-full gap-5 overflow-y-auto pr-2">
      <div
        onClick={() => setOpenDetails(false)}
        className="flex w-min cursor-pointer items-center text-[32px]"
      >
        <BsFillArrowLeftCircleFill />
      </div>
      <div className="flex-grow">
        <img
          src={image_url}
          alt=""
          className="float-left mr-3 aspect-square w-[28rem] object-cover"
        />
        <div className="w-full space-y-1">
          <p className="text-[#737373]">{websiteName}</p>
          <p className="text-[22px] font-semibold">{title}</p>
          {author && (
            <p className="text-[#737373]">
              Article by {author.join(", ")} &#x2022; {timeSinceArticlePosted}
            </p>
          )}
          {!author && (
            <p className="text-[#737373]">{timeSinceArticlePosted} ago</p>
          )}
          <p className="text-soft-black">{content}</p>
          <a href={link} className="cursor-pointer text-[14px] font-semibold">
            <p className="pt-5">Source: {link}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailedNews;