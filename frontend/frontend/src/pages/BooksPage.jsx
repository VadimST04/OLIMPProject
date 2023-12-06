import React, { useEffect, useState } from "react";
import BookItem, { BookItemSkeleton } from "../components/BookItem";
import SearchBar from "../components/SearchBar";
import HorizontalCarousel from "../components/HorizontalCarousel";
import { useSelector, useDispatch } from "react-redux";
import { booksList, booksSearch } from "../store/actions/booksAction";
import BookPreview from "../components/BookPreview";
import DetailedBook from "../components/DetailedBook";
import { PiBooksDuotone } from "react-icons/pi";
import { MAIN_BUTTON_CHANGE_NAME } from "../store/constants/buttonsConstants";
import { BiSearch } from "react-icons/bi";

const BooksPage = () => {
  const dispatch = useDispatch();
  const [bookPreview, setBookPreview] = useState(false);
  const [bookDetails, setBookDetails] = useState(false);
  const [currentBook, setCurrentBook] = useState({
    bookId: 0,
    image: "",
    title: "",
    author: "",
    language: "",
    bookId: 0,
  });

  const { userProfile } = useSelector((state) => state.userProfile);

  const { books, loading, error } = useSelector((state) => state.booksList);

  useEffect(() => {
    if (books && books.length > 0) return;

    console.log("test useEffect");
    dispatch(
      booksList(userProfile ? userProfile.selected_learning_langs : [""]),
    );
  }, []);

  const tags = [
    { "All books": "" },
    { "English books": "English" },
    { "Ukrainian books": "Ukrainian" },
    { "German books": "German" },
    { "French books": "French" },
    { "Italian books": "Itaian" },
    { "Spanish books": "Spanish" },
    { "Polish books": "Polish" },
    { "Japanese books": "Japanese" },
    { "Hebrew books": "Hebrew" },
    { "Arabian books": "Arabian" },
    { "Armenian books": "Armenian" },
  ];

  const inputChange = (e) => {
    if (
      e.key !== "Enter" ||
      e.target.value.length > 30 ||
      e.target.value === ""
    )
      return;

    dispatch(booksSearch(e.target.value));
  };

  const carouseItemClick = (item) => {
    const language = tags.find((obj) => obj.hasOwnProperty(item))[item];
    console.log(language);
    dispatch(booksList([language]));
  };

  return (
    <>
      {!bookPreview && !bookDetails && (
        <div className="h-full w-full space-y-5">
          <div className="relative flex h-10 w-full items-center dark:text-soft-black">
            <BiSearch className="absolute right-3 text-xl" />
            <input
              onKeyDown={inputChange}
              type="text"
              className="h-full w-full rounded-2xl bg-[#D9D9D9] p-2 px-8 outline-none"
            />
          </div>
          <HorizontalCarousel
            onItemClick={(item) => carouseItemClick(item)}
            items={tags.map((obj) => Object.keys(obj)[0])}
          />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-4">
            {loading && (
              <>
                {[...Array(5)].map((_, index) => (
                  <BookItemSkeleton key={index} />
                ))}
              </>
            )}

            {books?.map((item, index) => (
              <BookItem
                key={item.id}
                image={`data:image/jpeg;base64,${item.cover_image_data}`}
                title={item.title}
                author={item.author}
                language={item.languages}
                previewHandler={() => setBookPreview(true)}
                setBook={setCurrentBook}
                bookId={item.id}
              />
            ))}
          </div>
          {books?.length < 1 && (
            <div className="flex w-full items-center justify-center">
              <p className="text-3xl">No books found</p>
            </div>
          )}
        </div>
      )}

      {bookPreview && (
        <BookPreview
          {...currentBook}
          closePreviewHandler={() => setBookPreview(false)}
          readMoreHandler={() => setBookDetails(true)}
        />
      )}

      {bookDetails && (
        <DetailedBook
          closeBookHandler={() => setBookDetails(false)}
          {...currentBook}
        />
      )}
    </>
  );
};

export default BooksPage;
