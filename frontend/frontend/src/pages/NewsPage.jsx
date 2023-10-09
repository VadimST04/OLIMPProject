import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../store/actions/profileActions";
import { newsList } from "../store/actions/newsActions";
import NewsItem from "../components/NewsItem";
import NewsSection from "../components/NewsSection";

const NewsPage = () => {
  const dispatch = useDispatch();

  const { userProfile } = useSelector((state) => state.userProfile);
  // console.log(userProfile);

  const learning_langs = userProfile
    ? userProfile[0].learning_langs
    : ["English"];

  const { news } = useSelector((state) => state.newsList);
  console.log(news);

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(newsList(learning_langs));
  }, [dispatch]);

  const generateCards = () => {
    const cards = [];
    for (let i = 0; i < news?.length; i += 4) {
      const news1 = news[i];
      const news2 = news[i + 1];
      const news3 = news[i + 2];
      const news4 = news[i + 3];

      cards.push(
        <NewsSection
          news1={news1 && <NewsItem {...news1} />}
          news2={news2 && <NewsItem {...news2} />}
          news3={news3 && <NewsItem {...news3} />}
          news4={news4 && <NewsItem {...news4} />}
          mirroredLayout={i % 8 !== 0}
        />,
      );
    }
    return cards;
  };

  return (
    <div className="h-full w-full space-y-5 overflow-y-auto">
      {generateCards().map((item, index) => (
        <div key={index} className="flex h-full w-full gap-5">
          {item}
        </div>
      ))}
    </div>
  );
};

export default NewsPage;
