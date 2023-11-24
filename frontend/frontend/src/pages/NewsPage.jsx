import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsList } from "../store/actions/newsActions";
import NewsItem from "../components/NewsItem";
import NewsSection from "../components/NewsSection";
import DetailedNews from "../components/DetailedNews";

const NewsPage = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [newsDetails, setNewsDetails] = useState({});

  const newsVisibility = openDetails ? "hidden" : "";
  const dispatch = useDispatch();

  const { userProfile } = useSelector((state) => state.userProfile);
  const { news } = useSelector((state) => state.newsList);

  useEffect(() => {
    if (userProfile) {
      dispatch(newsList(userProfile.learning_langs));
    } else dispatch(newsList(["English"]));
  }, [userProfile]);

  const generateSections = () => {
    const sections = [];
    for (let i = 0; i < news?.length; i += 4) {
      const news1 = news[i];
      const news2 = news[i + 1];
      const news3 = news[i + 2];
      const news4 = news[i + 3];

      sections.push(
        <NewsSection
          news1={
            news1 && (
              <NewsItem
                {...news1}
                setNewsDetails={setNewsDetails}
                setOpenDetails={setOpenDetails}
              />
            )
          }
          news2={
            news2 && (
              <NewsItem
                {...news2}
                setNewsDetails={setNewsDetails}
                setOpenDetails={setOpenDetails}
              />
            )
          }
          news4={
            news4 && (
              <NewsItem
                {...news4}
                setNewsDetails={setNewsDetails}
                setOpenDetails={setOpenDetails}
              />
            )
          }
          news3={
            news3 && (
              <NewsItem
                {...news3}
                setNewsDetails={setNewsDetails}
                setOpenDetails={setOpenDetails}
              />
            )
          }
          mirroredLayout={i % 8 !== 0}
        />,
      );
    }
    return sections;
  };
  return (
    // <>
    //   <div
    //     className={`h-full w-full space-y-5 overflow-y-auto pr-2 ${newsVisibility}`}
    //   >
    //     {generateSections().map((item, index) => (
    //       <div key={index} className="flex h-full w-full gap-5">
    //         {item}
    //       </div>
    //     ))}
    //   </div>
    //
    // </>
    <>
      <div className={`h-full w-full overflow-y-auto ${newsVisibility}`}>
        <div className="h-full w-full space-y-5 md:hidden">
          {news?.map((item, index) => (
            <NewsItem
              {...item}
              key={index}
              setNewsDetails={setNewsDetails}
              setOpenDetails={setOpenDetails}
            />
          ))}
        </div>
        <div className="hidden h-full w-full space-y-5 md:block">
          {generateSections().map((item, index) => (
            <div key={index} className="h-full w-full">
              {item}
            </div>
          ))}
        </div>
      </div>
      {openDetails && <DetailedNews {...newsDetails} />}
    </>
  );
};

export default NewsPage;
