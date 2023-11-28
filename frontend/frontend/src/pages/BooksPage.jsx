import React, { useEffect, useState } from "react";
import BookItem from "../components/BookItem";
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
    image: "",
    title: "",
    author: "",
    language: "",
    bookId: 0,
  });

  const { userProfile } = useSelector((state) => state.userProfile);

  const { books } = useSelector((state) => state.booksList);
  console.log(books);

  useEffect(() => {
    if (books && books.length > 0) return;
    dispatch(booksList(userProfile ? userProfile.learning_langs : ["English"]));
  }, [books]);

  const testBooks = [
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
      language: "English",
    },
  ];

  const testTags = [
    "All books",
    "English books",
    "Ukrainian books",
    "German books",
    "French books",
    "Itaian books",
    "Spanish books",
    "Polish books",
    "Japanese books",
    "Hebrew books",
    "Arabian books",
    "Armenian books",
  ];

  const inputChange = (e) => {
    if (
      e.key !== "Enter" ||
      e.target.value.length > 30 ||
      e.target.value === ""
    )
      return;

    dispatch(booksList(userProfile ? userProfile.learning_langs : ["English"]));
    dispatch(booksSearch(e.target.value));
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
          <HorizontalCarousel items={testTags} />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-4">
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
