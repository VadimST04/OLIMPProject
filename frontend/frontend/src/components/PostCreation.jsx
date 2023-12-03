import React, { useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import ImageCarousel from "./ImageCarousel";
import PostsNavbar from "./PostsNavbar";
import { useNavigate } from "react-router";
import ImageLoader from "./ImageLoader";
import { useDispatch } from "react-redux";
import { createPost } from "../store/actions/postsActions";

const PostCreation = () => {
  const dispatch = useDispatch();

  const imageInput = useRef();
  const contentTextRef = useRef();
  const navigate = useNavigate();
  const [drag, setDrag] = useState(false);
  const dragBorderStyle = drag ? "border-soft-black" : "border-transparent";
  const profileImage =
    "https://images.unsplash.com/photo-1682687220161-e3e7388e4fad";
  const username = "Sophia Taylor";
  const [images, setImages] = useState([]);

  const rowSpan = images.length > 0 ? "" : "row-span-2";
  const imagesGap = images.length > 0 ? "gap-5" : "";

  const onImageSelect = (e) => {
    if (!e.target.files || !e.target.files[0]) return;
    let newImages = [];
    const files = [...e.target.files];

    for (let i = 0; i < files.length; i++) {
      newImages[i] = files[i];
    }

    setImages(newImages);
  };

  const onDragHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const onDragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e) => {
    e.preventDefault();
    let newImages = [];
    const files = [...e.dataTransfer.files];

    for (let i = 0; i < files.length; i++) {
      newImages[i] = files[i];
    }

    setImages(newImages);
    setDrag(false);
  };

  const shareButtonCLick = () => {
    console.log(images);
    console.log(contentTextRef.current.value);
    dispatch(createPost(contentTextRef.current.value, images));
  };

  return (
    <div className="flex h-full w-full flex-col items-center">
      <PostsNavbar />
      <div
        onDragStart={onDragHandler}
        onDragOver={onDragHandler}
        onDragLeave={onDragLeaveHandler}
        onDrop={onDropHandler}
        className="flex w-full max-w-[72rem] grow grid-cols-2 flex-col overflow-hidden rounded-xl bg-soft-white dark:bg-soft-black"
      >
        <p className="p-2 text-center text-2xl font-semibold text-soft-black dark:text-soft-white">
          Create a post
        </p>
        <hr className="w-full self-center rounded-full border-soft-black dark:border-[#ABABAB]" />
        <div className="grid h-full flex-grow grid-cols-1 grid-rows-2 gap-5 overflow-y-auto py-5 text-soft-black dark:text-soft-white sm:grid-cols-2 sm:grid-rows-1 sm:overflow-y-hidden">
          <div
            className={`grid grid-rows-[auto,1fr] sm:grid-rows-[4.75rem,1fr] ${imagesGap}`}
          >
            <div
              onClick={() => imageInput.current.click()}
              className={`flex cursor-pointer select-none flex-col items-center justify-center rounded-xl border-2 border-dashed bg-[#E1E1E1] text-soft-black dark:bg-[#C0BCBB]  ${dragBorderStyle} ${rowSpan}`}
            >
              <BiImageAdd className="text-4xl" />
              <p className="hidden font-bold sm:block">
                Drag and drop photos here
              </p>
              <input
                onChange={onImageSelect}
                ref={imageInput}
                type="file"
                className="hidden"
                accept="image/*"
                multiple
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <ImageCarousel
                images={images.map((item) => URL.createObjectURL(item))}
              />
            </div>
          </div>
          <div className="grid grid-rows-[3rem,1fr,3rem] gap-5">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <ImageLoader src={profileImage} />
              </div>
              <span className="font-semibold">{username}</span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="select-none text-[#C0C0C0]">Content</p>
              <textarea
                ref={contentTextRef}
                className="flex-grow resize-none rounded-xl border-2 border-[#E1E1E1] bg-soft-white p-2 text-soft-black outline-none dark:border-[#ABABAB] dark:bg-soft-black dark:text-soft-white"
              ></textarea>
            </div>
            <div className="flex gap-5 ">
              <button
                onClick={() => navigate("/posts")}
                className="grow rounded-xl bg-[#D96060] font-semibold text-soft-white hover:bg-[#B04E4E]"
              >
                Cancel
              </button>
              <button
                onClick={shareButtonCLick}
                className="grow rounded-xl bg-soft-black font-semibold text-soft-white hover:bg-soft-black-hover dark:bg-[#D9D9D9] dark:text-soft-black dark:hover:bg-[#939393]"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreation;
