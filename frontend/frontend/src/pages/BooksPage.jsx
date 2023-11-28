import React, { useEffect, useState } from "react";
import BookItem from "../components/BookItem";
import SearchBar from "../components/SearchBar";
import HorizontalCarousel from "../components/HorizontalCarousel";
import { useSelector, useDispatch } from "react-redux";
import { booksList } from "../store/actions/booksAction";
import BookPreview from "../components/BookPreview";
import DetailedBook from "../components/DetailedBook";
import { PiBooksDuotone } from "react-icons/pi";
import { MAIN_BUTTON_CHANGE_NAME } from "../store/constants/buttonsConstants";

const BooksPage = () => {
  const dispatch = useDispatch();
  const [bookPreview, setBookPreview] = useState(false);
  const [bookDetails, setBookDetails] = useState(false);
  const [currentBook, setCurrentBook] = useState({
    image: "",
    title: "",
    author: "",
    language: "",
  });

  const { userProfile } = useSelector((state) => state.userProfile);

  const { books } = useSelector((state) => state.booksList);
  console.log(books);

  useEffect(() => {
    dispatch(booksList(userProfile ? userProfile.learning_langs : ["English"]));
  }, [dispatch]);

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
    "All",
    "Recently read",
    "Bestsellers",
    "English Books",
    "Classic Books",
    "German Books",
    "Japanese Books",
    "Ukrainian Books",
    "Top 10 Books",
    "All",
    "Recently read",
    "Bestsellers",
    "English Books",
    "Classic Books",
    "German Books",
    "Japanese Books",
    "Ukrainian Books",
    "Top 10 Books",
  ];

  return (
    <>
      {!bookPreview && !bookDetails && (
        <div className="h-full w-full space-y-5">
          <div className="h-10 w-full dark:text-soft-black">
            <SearchBar inputStyling="h-full w-full rounded-2xl bg-[#D9D9D9] outline-none p-2 px-6" />
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
