import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { musicList } from "../store/actions/musicActions";
import { getUserProfile } from "../store/actions/profileActions";
import MusicItem from "../components/MusicItem";
import DetailedMusic from "../components/DetailedMusic";
import HorizontalCarousel from "../components/HorizontalCarousel";
import SearchBar from "../components/SearchBar";

const MusicPage = () => {
  const dispatch = useDispatch();
  const [showDetailedMusic, setShowDetailedMusic] = useState(false);
  const { music, loading, error } = useSelector((state) => state.musicList);

  const [currentDetailedMusic, setCurrentDetailedMusic] = useState({});

  const { userProfile } = useSelector((state) => state.userProfile);

  useEffect(() => {
    if (!userProfile) dispatch(getUserProfile());
    dispatch(musicList(userProfile ? userProfile.learning_langs : [""]));
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

  return (
    <>
      {!showDetailedMusic && (
        <div className="space-y-4">
          <div className="h-10 w-full dark:text-soft-black">
            <SearchBar inputStyling="h-full w-full rounded-2xl bg-[#D9D9D9] outline-none p-2 px-6" />
          </div>
          <HorizontalCarousel items={tags.map((obj) => Object.keys(obj)[0])} />
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
