import React, { useState, useEffect } from "react";
import BookCard from "../../pages/books/bookCard";
import About from "../../pages/about/About.jsx";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log("error fetching books: ", err));
  }, []);

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );

  console.log(filteredBooks);

  return (
    <div className="mb-6">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      {/* category filter */}
      <div className="mb-2 gap-4 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#727272] border-gray-300 rounded-md px-4 py-2 focus:outline-none cursor-pointer"
        >
          {categories.map((category, index) => (
            <option className="cursor-pointer" key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className=" flex h-[400px] gap-6 items-center overflow-x-auto carousel-center rounded-box p-1 ">
       
        {/* books listing with carousel */}
        {filteredBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}

      </div>

      {/* BUTTON LEFT RIGHT */}
      {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div> */}

      
    </div>
  );
};

export default TopSellers;
