import React, { useEffect } from "react";
import BookItem from "../components/BookItem";
import SearchBar from "../components/SearchBar";
import HorizontalCarousel from "../components/HorizontalCarousel";
import { useSelector, useDispatch } from "react-redux";
import { booksList } from "../store/actions/booksAction";

const BooksPage = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.booksList);
  console.log(books);

  useEffect(() => {
    dispatch(booksList());
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
    <div className="h-full w-full space-y-5">
      <div className="h-10 w-full">
        <SearchBar inputStyling="h-full w-full rounded-2xl bg-[#D9D9D9] outline-none p-2 px-6 dark:text-soft-black" />
      </div>
      <HorizontalCarousel items={testTags} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-4">
        {testBooks.map((item, index) => (
          <div key={index} className="flex flex-col">
            <BookItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
