import React from "react";
import { useParams } from "react-router";
import { VscSend } from "react-icons/vsc";
import ChatMessage from "../components/ChatMessage";
const ChatsPage = () => {
  let { id } = useParams();
  const chatInfo = {
    username: "Yuliia Tretynychenko",
  };

  const messages = [
    {
      text: "Hey there! It's been ages since we last met. How have you been?",
      image: "https://images.unsplash.com/photo-1701244450186-cf76378d4c65",
      myMessage: false,
      username: "Yuliia Tretynychenko",
    },
    {
      text: "I know, right? Time flies",
      image: "https://images.unsplash.com/photo-1700585560129-2c03e2a3f511",
      myMessage: true,
      username: "Me",
    },
    {
      text: "I've been good, busy with work mostly. How about you?",
      image: "https://images.unsplash.com/photo-1700585560129-2c03e2a3f511",
      myMessage: true,
      username: "Me",
    },
    {
      text: "Same here, hehe",
      image: "https://images.unsplash.com/photo-1701244450186-cf76378d4c65",
      myMessage: false,
      username: "Yuliia Tretynychenko",
    },
    {
      text: "Work has been hectic. But I can't complain",
      image: "https://images.unsplash.com/photo-1701244450186-cf76378d4c65",
      myMessage: false,
      username: "Yuliia Tretynychenko",
    },
    {
      text: "What have you been up to outside of work?",
      image: "https://images.unsplash.com/photo-1701244450186-cf76378d4c65",
      myMessage: false,
      username: "Yuliia Tretynychenko",
    },
    {
      text: "Well, I picked up a new hobby - photography. It's been a refreshing change",
      image: "https://images.unsplash.com/photo-1700585560129-2c03e2a3f511",
      myMessage: true,
      username: "Me",
    },
    {
      text: "And I adopted a dog, too!",
      image: "https://images.unsplash.com/photo-1700585560129-2c03e2a3f511",
      myMessage: true,
      username: "Me",
    },
    {
      text: "That's awesome!",
      image: "https://images.unsplash.com/photo-1701244450186-cf76378d4c65",
      myMessage: false,
      username: "Yuliia Tretynychenko",
    },
    {
      text: "I've been meaning to try something new too. Any recommendations for a hobby?",
      image: "https://images.unsplash.com/photo-1701244450186-cf76378d4c65",
      myMessage: false,
      username: "Yuliia Tretynychenko",
    },
    {
      text: "Maybe try hiking or painting? Both are great for unwinding. So, have you traveled anywhere interesting lately?",
      image: "https://images.unsplash.com/photo-1700585560129-2c03e2a3f511",
      myMessage: true,
      username: "Me",
    },
    {
      text: "Not really, been tied up with deadlines. But I'm planning a trip soon. Any travel tips?",
      image: "https://images.unsplash.com/photo-1701244450186-cf76378d4c65",
      myMessage: false,
      username: "Yuliia Tretynychenko",
    },
    {
      text: "Definitely plan in advance, and don't overpack. Also, try local cuisine wherever you go. It adds to the experience",
      image: "https://images.unsplash.com/photo-1700585560129-2c03e2a3f511",
      myMessage: true,
      username: "Me",
    },
    {
      text: "Solid advice!",
      image: "https://images.unsplash.com/photo-1701244450186-cf76378d4c65",
      myMessage: false,
      username: "Yuliia Tretynychenko",
    },
    {
      text: "By the way, did you hear about our old school reunion?",
      image: "https://images.unsplash.com/photo-1701244450186-cf76378d4c65",
      myMessage: false,
      username: "Yuliia Tretynychenko",
    },
    {
      text: "It's coming up next month",
      image: "https://images.unsplash.com/photo-1701244450186-cf76378d4c65",
      myMessage: false,
      username: "Yuliia Tretynychenko",
    },
    {
      text: "Oh, I didn't know! Count me in",
      image: "https://images.unsplash.com/photo-1700585560129-2c03e2a3f511",
      myMessage: true,
      username: "Me",
    },
    {
      text: "It'll be fantastic to catch up with everyone. Time really does fly, doesn't it?",
      image: "https://images.unsplash.com/photo-1700585560129-2c03e2a3f511",
      myMessage: true,
      username: "Me",
    },
  ];

  const isSameSender = (index) => {
    if (index + 1 === messages.length) return true;
    return (
      messages[index].myMessage !== messages[index + 1].myMessage ||
      messages[index].username !== messages[index + 1].username
    );
  };

  return (
    <div className="grid h-full w-full grid-rows-[3.5rem,auto,1fr,auto] rounded-md bg-[#E5E5E5] p-2.5 pt-0 dark:bg-[#595959]">
      <p className="flex items-center justify-center text-2xl font-semibold">
        {chatInfo.username}
      </p>
      <hr className="w-full border-soft-black dark:border-soft-white" />

      <div className="flex flex-col gap-1 overflow-y-auto pt-2.5">
        {messages.map((message, index) => (
          <ChatMessage
            image={message.image}
            text={message.text}
            username={message.username}
            key={index}
            showTail={isSameSender(index)}
            showPhoto={isSameSender(index)}
            myMessage={message.myMessage}
          />
        ))}
      </div>

      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Write a message..."
          className="min-h-[3rem] w-full rounded-md bg-[#D9D9D9] px-5 pr-10 text-soft-black outline-none dark:bg-[#737373] dark:text-soft-white"
        />
        <button className="group absolute right-0 flex h-full w-10 items-center justify-center rounded-md">
          <VscSend className="text-2xl transition-all duration-150 group-hover:scale-[115%]" />
        </button>
      </div>
    </div>
  );
};

export default ChatsPage;
