import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsList } from "../store/actions/postsActions";

import PostItem from "../components/PostItem";

import { MdCreate } from "react-icons/md";
import { PiGridFour } from "react-icons/pi";
import { BiImage } from "react-icons/bi";
import PostCreation from "../components/PostCreation";

function PostsPage() {
  const dispatch = useDispatch();
  const [postCreation, setPostCreation] = useState(false);
  const { posts } = useSelector((state) => state.postsList);
  useEffect(() => {
    dispatch(postsList());
  }, [dispatch]);

  return (
    <div className="flex h-full flex-col items-center gap-5 overflow-y-auto p-5">
      <div className="flex w-full flex-wrap items-center justify-evenly gap-2 font-semibold text-soft-black">
        <button
          onClick={() => setPostCreation(true)}
          className="flex w-[5rem] items-center justify-center gap-1 rounded-xl bg-[#D9D9D9] px-4 py-2 hover:bg-[#BEBEBE] md:w-[12rem]"
        >
          <MdCreate />
          <span className="hidden md:inline">Create post</span>
        </button>
        <button className="flex w-[5rem] items-center justify-center gap-1 rounded-xl bg-[#D9D9D9] px-4 py-2 hover:bg-[#BEBEBE] md:w-[12rem]">
          <BiImage className="text-[20px]" />
          <span className="hidden md:inline">My posts</span>
        </button>
        <button className="flex w-[5rem] items-center justify-center gap-1 rounded-xl bg-[#D9D9D9] px-4 py-2 hover:bg-[#BEBEBE] md:w-[12rem]">
          <PiGridFour className="text-[20px]" />
          <span className="hidden md:inline">All posts</span>
        </button>
      </div>
      {posts &&
        posts.map((item) => (
          <PostItem
            liked={false}
            images={[...item.image_post]}
            key={item.id}
            username={item.user}
            content={item.content}
            likes={item.likes}
            comments={item.comments}
            commentDate={item.created_at}
          />
        ))}
      {postCreation && (
        <PostCreation closeForm={() => setPostCreation(false)} />
      )}
    </div>
  );
}

export default PostsPage;
