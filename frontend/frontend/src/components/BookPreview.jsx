import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_IN_FORM_OPEN } from "../store/constants/fromsConstants";
import { bookDetails } from "../store/actions/booksAction";

const BookPreview = ({
  image,
  title,
  author,
  language,
  genre,
  firstPageContent,
  closePreviewHandler,
  readMoreHandler,
  bookId,
}) => {
  // image = "https://images.unsplash.com/photo-1589998059171-988d887df646";
  // title = "Twisted love";
  // author = "Ana Huang";
  // language = "English";
  const { userToken } = useSelector((state) => state.userToken);
  const dispatch = useDispatch();

  useState(() => {
    window.scrollTo(0, 0);
  }, []);

  const { book } = useSelector((state) => state.bookDetail);
  console.log(book);

  useState(() => {
    dispatch(bookDetails(bookId));
  }, [dispatch, book]);

  console.log(bookId);

  const paragraphs = book?.text.split("\n").slice(0, 30);

  return (
    <div className="grid h-full w-full grid-cols-1 gap-5 md:grid-cols-[0.3fr,1fr]">
      <div className="relative grid md:grid-rows-[1fr,0.5fr]">
        <button
          onClick={() => closePreviewHandler()}
          className="absolute z-[1] h-min w-min text-[32px]"
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <div className="flex h-full select-none flex-col items-center gap-5 px-5 pt-12 md:min-w-[22rem]">
          <div className="relative h-full min-h-[20rem] w-full">
            <img
              src={image}
              alt=""
              className="absolute h-full w-full object-cover shadow-[0_5px_5px_#000] transition-all duration-300 will-change-transform hover:-translate-y-2 hover:shadow-[0_10px_10px_#000]"
            />
          </div>
          <button
            onClick={() => {
              if (!userToken) {
                dispatch({ type: SIGN_IN_FORM_OPEN });
                return;
              }
              closePreviewHandler();
              readMoreHandler();
            }}
            className="w-48 rounded-md bg-main-green p-2 text-soft-white outline-none hover:bg-main-dark-green"
          >
            Read more
          </button>
        </div>
      </div>
      <div className="space-y-2 pr-5 pt-5 text-lg md:overflow-y-auto">
        <div className="flex flex-wrap items-center justify-between">
          <p className="truncate text-3xl font-bold">{title}</p>
          {/* <p className="font-semibold text-[#737373]"></p> */}
        </div>
        <p>
          <span className="font-semibold">Author - </span>
          <span className="font-semibold">{author}</span>
        </p>
        <p>
          <span>Book language - </span>
          <span>{language}</span>
        </p>
        <div className="space-y-4 pt-5">
          {paragraphs?.map((paragraph, index) => (
            <p key={index} className="text-center">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookPreview;
