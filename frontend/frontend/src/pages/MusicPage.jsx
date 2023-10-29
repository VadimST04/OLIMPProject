import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { musicList } from "../store/actions/musicActions";
import MusicItem from "../components/MusicItem";
import DetailedMusic from "../components/DetailedMusic";
import HorizontalCarousel from "../components/HorizontalCarousel";

const MusicPage = () => {
  const [showDetailedMusic, setShowDetailedMusic] = useState(false);
  const [currentDetailedMusic, setCurrentDetailedMusic] = useState({
    lyrics: "",
    language: "",
    image: "",
    title: "",
    author: "",
  });

  // const dispatch = useDispatch();

  // const { music } = useSelector((state) => state.musicList);
  // console.log(music);

  // useEffect(() => {
  //   dispatch(musicList());
  // }, [dispatch]);

  const leftItems = [
    "Historical songs",
    "Tik tok songs",
    "New hit 2023",
    "Pop",
    "Japanese songs",
    "Sport",
    "Popular songs",
    "Rock",
    "Playlist",
    "Study",
    "Sport",
    "Meditation",
    "English",
    "Ukrainian",
    "Japanese",
    "Arabic",
    "Turkish",
  ];

  const testMusic = [
    {
      id: 1,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 2,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 3,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 4,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 5,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 6,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 7,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 8,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 9,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 10,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 11,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 12,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 13,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 14,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 15,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 16,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 17,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 18,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 19,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 20,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 21,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 22,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 23,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 24,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 25,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 26,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 27,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 28,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 29,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 30,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 31,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      id: 32,
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugiat quo, eaque soluta pariatur quas iure ducimus, nemo, voluptatum animi mollitia? Ad similique unde doloribus, iure laborum hic aliquam nisi?",
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
  ];

  const musicItemClick = (lyrics, language, image, title, author) => {
    setShowDetailedMusic(true);
    setCurrentDetailedMusic({ lyrics, language, image, title, author });
  };

  return (
    <>
      {/* {!showDetailedMusic && (
        <div className="space-y-4">
          <HorizontalCarousel items={leftItems} />
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-4">
            {testMusic.map((item) => (
              <MusicItem {...item} key={item.id} />
            ))}
          </div>
        </div>
      )} */}

      {!showDetailedMusic && (
        <div className="flex gap-4">
          <div className="h-full w-max shrink-0 overflow-y-auto">
            {leftItems.map((item) => (
              <div className="cursor-pointer rounded-md p-1 px-3 hover:bg-soft-white-hover dark:hover:bg-soft-black-hover">
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-4">
            {testMusic.map((item) => (
              <MusicItem
                {...item}
                key={item.id}
                onClickHandler={musicItemClick}
              />
            ))}
          </div>
        </div>
      )}

      {showDetailedMusic && (
        <DetailedMusic
          {...currentDetailedMusic}
          hideDetailedMusic={() => setShowDetailedMusic(false)}
        />
      )}
    </>
  );
};

export default MusicPage;
