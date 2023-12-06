import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { musicList, musicSearch } from "../store/actions/musicActions";
import { getUserProfile } from "../store/actions/profileActions";
import MusicItem from "../components/MusicItem";
import DetailedMusic from "../components/DetailedMusic";
import HorizontalCarousel from "../components/HorizontalCarousel";
import SearchBar from "../components/SearchBar";
import { BiSearch } from "react-icons/bi";

const MusicPage = () => {
  const dispatch = useDispatch();
  const [showDetailedMusic, setShowDetailedMusic] = useState(false);
  const { music, loading, error } = useSelector((state) => state.musicList);

  const [currentDetailedMusic, setCurrentDetailedMusic] = useState({});

  const { userProfile } = useSelector((state) => state.userProfile);

  useEffect(() => {
    if (!userProfile) dispatch(getUserProfile());
    if (!music)
      dispatch(
        musicList(userProfile ? userProfile.selected_learning_langs : [""]),
      );
  }, [dispatch, userProfile]);

  const tags = [
    { "All music": "" },
    { "English music": "English" },
    { "Ukrainian music": "Ukrainian" },
    { "German music": "German" },
    { "French music": "French" },
    { "Itaian music": "Itaian" },
    { "Spanish music": "Spanish" },
    { "Polish music": "Polish" },
    { "Japanese music": "Japanese" },
    { "Hebrew music": "Hebrew" },
    { "Arabian music": "Arabian" },
    { "Armenian music": "Armenian" },
  ];

  const musicItemClick = (
    musicId,
    lyrics,
    language,
    image,
    title,
    artist,
    length,
  ) => {
    setShowDetailedMusic(true);
    setCurrentDetailedMusic({
      musicId,
      lyrics,
      language,
      image,
      title,
      artist,
      length,
    });
  };

  const inputChange = (e) => {
    if (
      e.key !== "Enter" ||
      e.target.value.length > 30 ||
      e.target.value === ""
    )
      return;

    dispatch(musicSearch(e.target.value));
  };

  const carouseItemClick = (item) => {
    const language = tags.find((obj) => obj.hasOwnProperty(item))[item];
    console.log(language);
    dispatch(musicList([language]));
  };

  return (
    <>
      {!showDetailedMusic && (
        <div className="space-y-4">
          <div className="relative flex h-10 w-full items-center dark:text-soft-black">
            <BiSearch className="absolute right-3 text-xl" />
            <input
              onKeyDown={inputChange}
              type="text"
              className="h-full w-full rounded-2xl bg-[#D9D9D9] p-2 px-8 outline-none"
            />
          </div>
          <HorizontalCarousel
            items={tags.map((obj) => Object.keys(obj)[0])}
            onItemClick={(item) => carouseItemClick(item)}
          />
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-4">
            {music?.map((item) => (
              <MusicItem
                musicId={item.id}
                artist={item.artist}
                length={item.duration}
                key={item.id}
                image={`data:image/jpeg;base64,${item.image_data}`}
                title={item.title}
                language={item.language}
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
