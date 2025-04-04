import React,{useState, useEffect} from 'react'
import BookCard from '../../pages/books/bookCard'

const recommended = () => {


    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("books.json")
          .then((res) => res.json())
          .then((data) => setBooks(data))
          .catch((err) => console.log("error fetching books: ", err));
      }, []);

      


  return (
    <div className='py-6'>
        <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>

        <div className=" flex h-[400px] gap-6 items-center overflow-x-auto carousel-center rounded-box p-1 ">
       
       {/* books listing with carousel */}
       {books.length > 0 && books.slice(8,18).map((book, index) => (
         <BookCard key={index} book={book} />
       ))}

     </div>
    </div>
  )
}

export default recommended