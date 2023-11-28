import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { musicList } from "../store/actions/musicActions";
import { getUserProfile } from "../store/actions/profileActions";
import MusicItem from "../components/MusicItem";
import DetailedMusic from "../components/DetailedMusic";
import HorizontalCarousel from "../components/HorizontalCarousel";
import SearchBar from "../components/SearchBar";

const MusicPage = () => {
  const [showDetailedMusic, setShowDetailedMusic] = useState(false);
  const dispatch = useDispatch();
  const { music } = useSelector((state) => state.musicList);
  // const music = [
  //   {
  //     artist: "Lorem",
  //     length: "3:31",
  //     image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  //     title: "Test song title",
  //     language: ["English"],
  //   },
  //   {
  //     artist: "Lorem",
  //     length: "3:31",
  //     image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  //     title: "Test song title",
  //     language: ["English"],
  //   },
  //   {
  //     artist: "Lorem",
  //     length: "3:31",
  //     image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  //     title: "Test song title",
  //     language: ["English"],
  //   },
  //   {
  //     artist: "Lorem",
  //     length: "3:31",
  //     image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  //     title: "Test song title",
  //     language: ["English"],
  //   },
  //   {
  //     artist: "Lorem",
  //     length: "3:31",
  //     image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  //     title: "Test song title",
  //     language: ["English"],
  //   },
  //   {
  //     artist: "Lorem",
  //     length: "3:31",
  //     image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  //     title: "Test song title",
  //     language: ["English"],
  //   },
  //   {
  //     artist: "Lorem",
  //     length: "3:31",
  //     image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  //     title: "Test song title",
  //     language: ["English"],
  //   },
  //   {
  //     artist: "Lorem",
  //     length: "3:31",
  //     image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  //     title: "Test song title",
  //     language: ["English"],
  //   },
  //   {
  //     artist: "Lorem",
  //     length: "3:31",
  //     image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  //     title: "Test song title",
  //     language: ["English"],
  //   },
  //   {
  //     artist: "Lorem",
  //     length: "3:31",
  //     image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  //     title: "Test song title",
  //     language: ["English"],
  //   },
  //   {
  //     artist: "Lorem",
  //     length: "3:31",
  //     image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  //     title: "Test song title",
  //     language: ["English"],
  //   },
  //   {
  //     artist: "Lorem",
  //     length: "3:31",
  //     image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
  //     title: "Test song title",
  //     language: ["English"],
  //   },
  // ];

  const [currentDetailedMusic, setCurrentDetailedMusic] = useState({
    lyrics: "",
    language: "",
    image: "",
    title: "",
    artist: "",
  });

  const { userProfile } = useSelector((state) => state.userProfile);

  useEffect(() => {
    if (!userProfile) dispatch(getUserProfile());
    dispatch(musicList(userProfile ? userProfile.learning_langs : ["English"]));
  }, [dispatch, userProfile]);

  const tags = [
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

  const musicItemClick = (lyrics, language, image, title, artist) => {
    setShowDetailedMusic(true);
    setCurrentDetailedMusic({ lyrics, language, image, title, artist });
  };

  return (
    <>
      {!showDetailedMusic && (
        <div className="space-y-4">
          <div className="h-10 w-full dark:text-soft-black">
            <SearchBar inputStyling="h-full w-full rounded-2xl bg-[#D9D9D9] outline-none p-2 px-6" />
          </div>
          <HorizontalCarousel items={tags} />
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-4">
            {music?.map((item, index) => (
              <MusicItem
                artist={item.artist}
                length={item.duration}
                // key={item.id}
                key={index}
                image={item.image}
                title={item.title}
                language={item.language[0]}
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
