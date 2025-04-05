import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";
import {useDispatch} from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const bookCard = ({ book }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div>
      {/* daisy ui card */}

      <div className="card carousel-item p-[15px] card-xs bg-primary w-64 h-80 shadow-sm">
        <div className="card-image h-40 w-full flex justify-center items-center overflow-hidden object-contain rounded-box">
          <img
            className="w-full h-full object-cover"
            src={`${getImgUrl(book.coverImage)}`}
            alt="Book_Image"
          />
        </div>

        <div className="card-body">
          <Link to={`/books/${book._id}`}>
            <h2 className="card-title">
              {book.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
          </Link>

          <p>
            {book?.description.length > 80
              ? `${book?.description.slice(0, 80)}...`
              : book?.description}
          </p>
          <div className="card-actions justify-center">
            <div className="badge shadow-md m-2 ">
              {book.category}
            </div>
            <button 
            onClick={() => handleAddToCart(book)}
            className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
              <FiShoppingCart className="" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
      {/* card */}

      {/* <div className=" rounded-lg transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
          <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
            <a href="/">
              <img
                src={`${getImgUrl(book.coverImage)}`}
                alt=""
                className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
              />
            </a>
          </div>

          <div>
            <Link to={`/books/${book._id}`}>
              <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                {book?.title}
              </h3>
            </Link>
            <p className="text-gray-600 mb-5">{book?.description.length > 80 ? `${book?.description.slice(0,80)}...`: book?.description}</p>
            <p className="font-medium mb-5">
               {book?.oldPrice}<span className="line-through font-normal ml-2">{book?.newPrice}</span>
            </p>
            <button className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
              <FiShoppingCart className="" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div> */}

      {/*  */}
    </div>
  );
};

export default bookCard;
