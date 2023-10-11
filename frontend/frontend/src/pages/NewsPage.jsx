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
  // console.log(news);

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(newsList(learning_langs));
  }, [dispatch]);


  const test_news = [
    {
      language: "English",
      img: "https://images.unsplash.com/photo-1691036561573-4b76998b60de",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio incidunt, facere quasi consequatur unde pariatur. Labore sit non, est, dolores sint odio ea a assumenda cupiditate ex molestiae incidunt!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, debitis repellendus? Laudantium architecto atque consequuntur in laboriosam asperiores facilis quo temporibus, suscipit doloremque totam fuga distinctio sit accusamus, pariatur iusto. Veniam perferendis et maxime laborum a ipsa. Dolores officiis sapiente dolor? Unde provident labore similique aliquam repudiandae accusamus quibusdam quam!",
    },
    {
      language: "English",
      img: "https://images.unsplash.com/photo-1674133015234-8de60fbdbd16",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio incidunt, facere quasi consequatur unde pariatur. Labore sit non, est, dolores sint odio ea a assumenda cupiditate ex molestiae incidunt!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, debitis repellendus? Laudantium architecto atque consequuntur in laboriosam asperiores facilis quo temporibus, suscipit doloremque totam fuga distinctio sit accusamus, pariatur iusto. Veniam perferendis et maxime laborum a ipsa. Dolores officiis sapiente dolor? Unde provident labore similique aliquam repudiandae accusamus quibusdam quam!",
    },
    {
      language: "English",
      img: "https://images.unsplash.com/photo-1673563932782-28daf64ff066",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio incidunt, facere quasi consequatur unde pariatur. Labore sit non, est, dolores sint odio ea a assumenda cupiditate ex molestiae incidunt!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, debitis repellendus? Laudantium architecto atque consequuntur in laboriosam asperiores facilis quo temporibus, suscipit doloremque totam fuga distinctio sit accusamus, pariatur iusto. Veniam perferendis et maxime laborum a ipsa. Dolores officiis sapiente dolor? Unde provident labore similique aliquam repudiandae accusamus quibusdam quam!",
    },
    {
      language: "English",
      img: "https://images.unsplash.com/photo-1692125440608-4364afbf849b",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio incidunt, facere quasi consequatur unde pariatur. Labore sit non, est, dolores sint odio ea a assumenda cupiditate ex molestiae incidunt!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, debitis repellendus? Laudantium architecto atque consequuntur in laboriosam asperiores facilis quo temporibus, suscipit doloremque totam fuga distinctio sit accusamus, pariatur iusto. Veniam perferendis et maxime laborum a ipsa. Dolores officiis sapiente dolor? Unde provident labore similique aliquam repudiandae accusamus quibusdam quam!",
    },
    {
      language: "English",
      img: "https://images.unsplash.com/photo-1691036561573-4b76998b60de",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio incidunt, facere quasi consequatur unde pariatur. Labore sit non, est, dolores sint odio ea a assumenda cupiditate ex molestiae incidunt!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, debitis repellendus? Laudantium architecto atque consequuntur in laboriosam asperiores facilis quo temporibus, suscipit doloremque totam fuga distinctio sit accusamus, pariatur iusto. Veniam perferendis et maxime laborum a ipsa. Dolores officiis sapiente dolor? Unde provident labore similique aliquam repudiandae accusamus quibusdam quam!",
    },
    {
      language: "English",
      img: "https://images.unsplash.com/photo-1674133015234-8de60fbdbd16",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio incidunt, facere quasi consequatur unde pariatur. Labore sit non, est, dolores sint odio ea a assumenda cupiditate ex molestiae incidunt!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, debitis repellendus? Laudantium architecto atque consequuntur in laboriosam asperiores facilis quo temporibus, suscipit doloremque totam fuga distinctio sit accusamus, pariatur iusto. Veniam perferendis et maxime laborum a ipsa. Dolores officiis sapiente dolor? Unde provident labore similique aliquam repudiandae accusamus quibusdam quam!",
    },
    {
      language: "English",
      img: "https://images.unsplash.com/photo-1673563932782-28daf64ff066",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio incidunt, facere quasi consequatur unde pariatur. Labore sit non, est, dolores sint odio ea a assumenda cupiditate ex molestiae incidunt!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, debitis repellendus? Laudantium architecto atque consequuntur in laboriosam asperiores facilis quo temporibus, suscipit doloremque totam fuga distinctio sit accusamus, pariatur iusto. Veniam perferendis et maxime laborum a ipsa. Dolores officiis sapiente dolor? Unde provident labore similique aliquam repudiandae accusamus quibusdam quam!",
    },
    {
      language: "English",
      img: "https://images.unsplash.com/photo-1692125440608-4364afbf849b",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio incidunt, facere quasi consequatur unde pariatur. Labore sit non, est, dolores sint odio ea a assumenda cupiditate ex molestiae incidunt!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, debitis repellendus? Laudantium architecto atque consequuntur in laboriosam asperiores facilis quo temporibus, suscipit doloremque totam fuga distinctio sit accusamus, pariatur iusto. Veniam perferendis et maxime laborum a ipsa. Dolores officiis sapiente dolor? Unde provident labore similique aliquam repudiandae accusamus quibusdam quam!",
    },
    {
      language: "English",
      img: "https://images.unsplash.com/photo-1691036561573-4b76998b60de",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio incidunt, facere quasi consequatur unde pariatur. Labore sit non, est, dolores sint odio ea a assumenda cupiditate ex molestiae incidunt!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, debitis repellendus? Laudantium architecto atque consequuntur in laboriosam asperiores facilis quo temporibus, suscipit doloremque totam fuga distinctio sit accusamus, pariatur iusto. Veniam perferendis et maxime laborum a ipsa. Dolores officiis sapiente dolor? Unde provident labore similique aliquam repudiandae accusamus quibusdam quam!",
    },
    {
      language: "English",
      img: "https://images.unsplash.com/photo-1674133015234-8de60fbdbd16",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio incidunt, facere quasi consequatur unde pariatur. Labore sit non, est, dolores sint odio ea a assumenda cupiditate ex molestiae incidunt!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, debitis repellendus? Laudantium architecto atque consequuntur in laboriosam asperiores facilis quo temporibus, suscipit doloremque totam fuga distinctio sit accusamus, pariatur iusto. Veniam perferendis et maxime laborum a ipsa. Dolores officiis sapiente dolor? Unde provident labore similique aliquam repudiandae accusamus quibusdam quam!",
    },
    {
      language: "English",
      img: "https://images.unsplash.com/photo-1673563932782-28daf64ff066",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio incidunt, facere quasi consequatur unde pariatur. Labore sit non, est, dolores sint odio ea a assumenda cupiditate ex molestiae incidunt!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, debitis repellendus? Laudantium architecto atque consequuntur in laboriosam asperiores facilis quo temporibus, suscipit doloremque totam fuga distinctio sit accusamus, pariatur iusto. Veniam perferendis et maxime laborum a ipsa. Dolores officiis sapiente dolor? Unde provident labore similique aliquam repudiandae accusamus quibusdam quam!",
    },
    {
      language: "English",
      img: "https://images.unsplash.com/photo-1692125440608-4364afbf849b",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio incidunt, facere quasi consequatur unde pariatur. Labore sit non, est, dolores sint odio ea a assumenda cupiditate ex molestiae incidunt!",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, debitis repellendus? Laudantium architecto atque consequuntur in laboriosam asperiores facilis quo temporibus, suscipit doloremque totam fuga distinctio sit accusamus, pariatur iusto. Veniam perferendis et maxime laborum a ipsa. Dolores officiis sapiente dolor? Unde provident labore similique aliquam repudiandae accusamus quibusdam quam!",
    },
  ];

  const generateCards = () => {
    const cards = [];
    for (let i = 0; i < test_news.length; i += 4) {
      const news1 = test_news[i];
      const news2 = test_news[i + 1];
      const news3 = test_news[i + 2];
      const news4 = test_news[i + 3];
      console.log(news1);
      console.log(news2);
      console.log(news3);
      console.log(news4);

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
