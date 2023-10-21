import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { musicList } from "../store/actions/musicActions";
import MusicItem from "../components/MusicItem";

const MusicPage = () => {
  // const dispatch = useDispatch();

  // const { music } = useSelector((state) => state.musicList);
  // console.log(music);

  // useEffect(() => {
  //   dispatch(musicList());
  // }, [dispatch]);

  const testMusic = [
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1697325320142-28beaededbf3",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1696595861023-35fde5406cb2",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1692035072849-93a511f35b2c",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
    {
      language: "English",
      isLiked: false,
      image: "https://images.unsplash.com/photo-1695917642455-8ee7e1ce83db",
      title: "Lorem",
      author: "Ipsum",
      length: "4:37",
    },
  ];

  return (
    <div className="flex h-full w-full flex-wrap gap-4 overflow-y-auto">
      {testMusic.map((item) => (
        <MusicItem {...item} />
      ))}
    </div>
  );
};

export default MusicPage;
