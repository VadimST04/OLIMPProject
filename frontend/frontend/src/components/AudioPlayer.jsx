import React, { useRef, useState } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import {
  BiSolidVolumeLow,
  BiSolidVolumeFull,
  BiSolidVolumeMute,
} from "react-icons/bi";
import song from "../assets/song.mp3";
const AudioPlayer = () => {
  const audio = useRef();
  const slider = useRef();
  const volumeSlider = useRef();
  const [isPaused, setPaused] = useState(true);
  const [changeSlider, setChangeSlider] = useState(true);
  const [timer, setTimer] = useState("");
  const [duration, setDuration] = useState();
  const [volume, setVolume] = useState(1);
  const [lastVolume, setLastVolume] = useState(0);

  const onTimeUpdateHandler = () => {
    if (!changeSlider) return;
    const currentTime = audio.current.currentTime;
    const duration = audio.current.duration;
    slider.current.max = duration;
    slider.current.value = currentTime;

    let formattedMinutes = String(Math.floor(duration / 60)).padStart(2, "0");
    let formattedSeconds = String(Math.floor(duration % 60)).padStart(2, "0");
    setDuration(`${formattedMinutes}:${formattedSeconds}`);

    formattedMinutes = String(Math.floor(currentTime / 60)).padStart(2, "0");
    formattedSeconds = String(Math.floor(currentTime % 60)).padStart(2, "0");
    setTimer(`${formattedMinutes}:${formattedSeconds}`);
  };

  const onSliderChange = () => {
    const newTime = parseFloat(slider.current.value);
    console.log(newTime);
    const formattedMinutes = String(Math.floor(newTime / 60)).padStart(2, "0");
    const formattedSeconds = String(Math.floor(newTime % 60)).padStart(2, "0");
    setTimer(`${formattedMinutes}:${formattedSeconds}`);
  };

  const setTime = (newTime) => {
    let time = parseFloat(newTime);

    if (time < 0) time = 0;
    if (time > duration) time = duration;

    audio.current.currentTime = time;
    audio.current.play();
    setPaused(false);
  };

  const onEndedHandler = () => {
    setPaused(true);
    setTimer("00:00");
    slider.current.value = 0;
  };

  const onVolumeChange = (e) => {
    let value = e.target.value;

    if (value < 0) value = 0;
    if (value > 100) value = 100;

    setVolume(value);

    audio.current.volume = volume / 100;
  };

  const muteVolume = () => {
    setLastVolume(audio.current.volume);
    setVolume(0);
    audio.current.volume = 0;
    volumeSlider.current.value = -2;
  };

  const unmuteVolume = () => {
    setVolume(lastVolume);
    audio.current.volume = lastVolume;
    volumeSlider.current.value = lastVolume * 100;
  };

  return (
    <div className="space-y-2">
      <audio
        ref={audio}
        src={song}
        onTimeUpdate={onTimeUpdateHandler}
        onEnded={onEndedHandler}
      ></audio>
      <div className="flex items-center gap-1 text-xs font-semibold">
        <span>{timer}</span>
        <input
          defaultValue={0}
          onChange={() => onSliderChange()}
          onMouseDown={() => setChangeSlider(false)}
          onMouseUp={() => {
            setTime(slider.current.value);
            setChangeSlider(true);
          }}
          ref={slider}
          step={0.5}
          type="range"
          className="h-1 w-full rounded-full bg-soft-white-hover accent-soft-black dark:bg-soft-black-hover dark:accent-soft-white"
        />
        <span>{duration}</span>
      </div>
      <div className="relative flex items-center justify-center gap-5">
        <button
          onClick={() => {
            setTime(parseFloat(slider.current.value) - 15);
          }}
          className="relative flex items-center justify-center rounded-full text-5xl hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
        >
          <BiSkipPrevious />
          <span className="absolute bottom-0 text-[10px] font-bold">-15</span>
        </button>
        {isPaused && (
          <button
            onClick={() => {
              setPaused(false);
              audio.current.play();
            }}
            className="rounded-full text-5xl hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
          >
            <AiFillPlayCircle />
          </button>
        )}
        {!isPaused && (
          <button
            onClick={() => {
              setPaused(true);
              audio.current.pause();
            }}
            className="rounded-full text-5xl hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
          >
            <AiFillPauseCircle />
          </button>
        )}
        <button
          onClick={() => {
            setTime(parseFloat(slider.current.value) + 15);
          }}
          className="relative flex items-center justify-center rounded-full text-5xl hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
        >
          <BiSkipNext />
          <span className="absolute bottom-0 text-[10px] font-bold">+15</span>
        </button>
      </div>
      <div className="flex w-full items-center justify-center">
        {volume <= 0 && (
          <BiSolidVolumeMute
            onClick={unmuteVolume}
            className="cursor-pointer"
          />
        )}
        {volume <= 50 && volume > 0 && (
          <BiSolidVolumeLow
            onClick={() => muteVolume()}
            className="cursor-pointer"
          />
        )}
        {volume > 50 && (
          <BiSolidVolumeFull
            onClick={() => muteVolume()}
            className="cursor-pointer"
          />
        )}
        <input
          ref={volumeSlider}
          max={101}
          onChange={onVolumeChange}
          min={-1}
          type="range"
          className=" h-1 w-[50%] rounded-full bg-soft-white-hover accent-soft-black dark:bg-soft-black-hover dark:accent-soft-white"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
