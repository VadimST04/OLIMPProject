import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import ImageLoader from "./ImageLoader";

const DetailedMusic = ({
  lyrics,
  language,
  image,
  title,
  author,
  hideDetailedMusic,
}) => {
  const [isPaused, setPaused] = useState(true);

  return (
    <div className="relative h-full gap-5 px-10 sm:grid sm:grid-cols-2">
      <button
        onClick={() => hideDetailedMusic()}
        className="absolute left-0 top-0 z-[1] text-3xl hover:text-soft-black-hover dark:hover:text-soft-white-hover"
      >
        <BsFillArrowLeftCircleFill />
      </button>
      <div className="grid h-full grid-rows-[1fr,0.5fr] items-center">
        <div className="h-full w-full max-w-[28rem] justify-self-center">
          <ImageLoader src={image} />
        </div>
        <div className="w-full max-w-[28rem] space-y-4 justify-self-center text-center">
          <span>Song language - </span>
          <span className="font-semibold">{language}</span>
          <div className="">
            <p className="text-3xl font-bold">{title}</p>
            <p className="font-semibold">{author}</p>
          </div>
          <div className="space-y-2">
            <input
              type="range"
              className="h-1 w-full rounded-full bg-soft-white-hover accent-soft-black dark:bg-soft-black-hover dark:accent-soft-white"
            />
            <div className="flex justify-center gap-5">
              <button className="rounded-full text-5xl hover:bg-soft-white-hover dark:hover:bg-soft-black-hover">
                <BiSkipPrevious />
              </button>
              {isPaused && (
                <button
                  onClick={() => setPaused(false)}
                  className="rounded-full text-5xl hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
                >
                  <AiFillPlayCircle />
                </button>
              )}
              {!isPaused && (
                <button
                  onClick={() => setPaused(true)}
                  className="rounded-full text-5xl hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
                >
                  <AiFillPauseCircle />
                </button>
              )}
              <button className="rounded-full text-5xl hover:bg-soft-white-hover dark:hover:bg-soft-black-hover">
                <BiSkipNext />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto px-[min(8rem,10%)]">
        <p className="p-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quo in
          eaque quaerat ad provident nemo ipsam quasi libero asperiores non,
          quas veritatis, ea, officia consequatur velit earum laborum
          perspiciatis?
        </p>
        <p className="p-3">
          Libero suscipit fugiat, deserunt ea repudiandae vero accusamus nihil
          nisi error assumenda vitae autem. Ipsum ipsam impedit laudantium
          minima repudiandae. Rerum, modi aperiam eligendi nesciunt corrupti
          reprehenderit odio aliquid natus.
        </p>
        <p className="p-3">
          Atque assumenda dolores cumque nemo adipisci nulla, placeat repellat
          libero possimus officiis at harum modi totam error quae quas. Animi
          dolores repudiandae repellendus saepe maiores veniam fugit cum magnam
          et!
        </p>
        <p className="p-3">
          Facilis saepe commodi magni laudantium. Natus eos placeat sint quo
          neque molestias eius! Fugit nemo iure placeat eius reprehenderit,
          porro sed adipisci ex quasi eum ab temporibus, suscipit quibusdam
          odio.
        </p>
        <p className="p-3">
          Nemo, vitae! Officiis natus nihil architecto. Enim voluptate dolore
          quos cupiditate officiis magnam tempora esse! Harum, necessitatibus
          eligendi dolore culpa eveniet illum fugit sequi qui omnis consequatur,
          nisi, officia molestias.
        </p>
        <p className="p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus
          perspiciatis molestias inventore fugiat labore quasi veniam blanditiis
          explicabo possimus ipsum dolore quod fuga, hic vero esse dolorem
          officia ratione.
        </p>
        <p className="p-3">
          Voluptas ad sint eligendi perspiciatis eius repudiandae voluptatum
          fuga voluptatibus cum maxime quam molestiae, nihil veniam voluptate
          dicta. Fuga, porro sint? Explicabo, aspernatur rerum quaerat dicta
          pariatur quam veniam facilis?
        </p>
        <p className="p-3">
          Culpa nemo, ut obcaecati cupiditate voluptatibus aliquam dolores
          assumenda reprehenderit tempora eos sunt velit quod facilis doloribus
          facere eveniet illum officia repellendus qui unde rerum architecto
          alias libero rem. Quod.
        </p>
      </div>
    </div>
  );
};

export default DetailedMusic;
