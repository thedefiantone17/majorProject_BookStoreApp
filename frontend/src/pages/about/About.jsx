import React from "react";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";

const about = ({ book }) => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={`${getImgUrl(book.coverImage)}`}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
