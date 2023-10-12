import React, { useState } from "react";

const CommentItem = ({ profileImg, username, commentDate, commentContent }) => {
  const [expandComment, setExpandComment] = useState(false);
  const commentLineClamp = expandComment ? "" : "line-clamp-1";
  const maxSymbols = 43;
  const cursorStyle =
    commentContent.length > maxSymbols ? "cursor-pointer" : "";
  return (
    <div className="flex w-full gap-2 p-2">
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
        <img src={profileImg} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <p className="font-semibold">{username}</p>
          &#x2022;
          <p>{commentDate}</p>
        </div>
        <p className={`${commentLineClamp}`}>{commentContent}</p>
        {commentContent.length > maxSymbols && (
          <div
            onClick={() => setExpandComment(!expandComment)}
            className="w-full cursor-pointer hover:text-[#666666]"
          >
            {expandComment ? "Hide" : "Expand"}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
