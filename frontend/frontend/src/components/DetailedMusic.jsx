import React, { useRef, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import ImageLoader from "./ImageLoader";
import AudioPlayer from "./AudioPlayer";
import { musicDetails } from "../store/actions/musicActions";
import { useDispatch, useSelector } from "react-redux";

const DetailedMusic = ({
  musicId,
  language,
  image,
  title,
  author,
  hideDetailedMusic,
  length,
}) => {
  const dispatch = useDispatch();
  const { musicDetail } = useSelector((state) => state.musicDetails);
  console.log(musicDetail);

  const lyrics = musicDetail?.lyrics;

  useState(() => {
    dispatch(musicDetails(musicId));
  }, [dispatch, musicDetail]);

  return (
    <div className="relative mx-auto h-full max-w-[64rem] gap-5 px-10 sm:grid sm:grid-cols-2">
      <button
        onClick={() => hideDetailedMusic()}
        className="absolute left-0 top-0 z-[1] text-3xl hover:text-soft-black-hover dark:hover:text-soft-white-hover"
      >
        <BsFillArrowLeftCircleFill />
      </button>
      <div className="grid h-full max-w-[28rem] grid-rows-[1fr,0.5fr] items-center">
        <div className="h-full w-full justify-self-center">
          <ImageLoader src={image} />
        </div>
        <div className="w-full space-y-4 justify-self-center text-center">
          <span>Song language - </span>
          <span className="font-semibold">{language}</span>
          <div>
            <p className="text-3xl font-bold">{title}</p>
            <p className="font-semibold">{author}</p>
          </div>
          <AudioPlayer
            file={`data:audio/mp3;base64,${musicDetail?.audio_data}`}
            defaultDuration={length}
          />
        </div>
      </div>

      <div className="justify-center space-y-5 overflow-y-auto">
        {lyrics?.split("\r\n\r\n").map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default DetailedMusic;
