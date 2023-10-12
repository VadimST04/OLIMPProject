import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { musicList } from "../store/actions/musicActions";

const MusicPage = () => {
  const dispatch = useDispatch();

  const { music } = useSelector((state) => state.musicList);
  console.log(music);

  useEffect(() => {
    dispatch(musicList());
  }, [dispatch]);

  return <div>MusicPage</div>;
};

export default MusicPage;
