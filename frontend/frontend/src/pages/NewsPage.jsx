import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../store/actions/profileActions";
import { newsList } from "../store/actions/newsActions";

const NewsPage = () => {
  const dispatch = useDispatch();

  const { userProfile } = useSelector((state) => state.userProfile);
  console.log(userProfile);

  const learning_langs = userProfile
    ? userProfile[0].learning_langs
    : ["English"];

  const { news } = useSelector((state) => state.newsList);
  console.log(news);

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(newsList(learning_langs));
  }, [dispatch]);

  return <div>NewsPage</div>;
};

export default NewsPage;
