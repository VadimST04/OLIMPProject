import React from "react";
import BookItem from "../components/BookItem";

const BooksPage = () => {
  const testBooks = [
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
    },
    {
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      title: "Book1Book1Book1Book1Book1Book1Book1",
      author: "Author1",
    },
  ];

  return (
    <div className="flex h-full w-full flex-wrap gap-10">
      {testBooks.map((item, index) => (
        <div key={index} className="flex flex-col">
          <BookItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default BooksPage;
