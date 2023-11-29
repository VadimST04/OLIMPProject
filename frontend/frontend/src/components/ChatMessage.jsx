import React from "react";
import ImageLoader from "./ImageLoader";
import { BsFillChatLeftFill, BsFillChatRightFill } from "react-icons/bs";

const ChatMessage = ({
  text,
  image,
  username,
  myMessage,
  showTail = false,
  showPhoto = false,
}) => {
  const reverse = myMessage ? "flex-row-reverse" : "";
  const usernameEnd = myMessage ? "self-end" : "";
  const tailMargin = showTail ? "mb-5 sm:mb-0" : "";

  return (
    <div className={`flex w-full gap-2 ${reverse} ${tailMargin}`}>
      <div className="h-10 w-10 flex-shrink-0 self-end overflow-hidden rounded-full">
        {showPhoto && <ImageLoader src={image} />}
      </div>
      <div className="relative flex min-w-[3rem] max-w-[80%] flex-col rounded-md bg-soft-white p-2 dark:bg-soft-black sm:max-w-[50%]">
        <p
          className={`z-[1] cursor-pointer truncate font-semibold text-main-green dark:brightness-150 ${usernameEnd}`}
        >
          {username}
        </p>
        <p className="z-[1] w-full break-words">{text}</p>
        {showTail && !myMessage && (
          <BsFillChatLeftFill
            className={`absolute -bottom-5 -left-2 p-2 text-[4rem] text-soft-white dark:text-soft-black`}
          />
        )}
        {showTail && myMessage && (
          <BsFillChatRightFill
            className={`absolute -bottom-5 -right-2 p-2 text-[4rem] text-soft-white dark:text-soft-black`}
          />
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
