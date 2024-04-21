import React from "react";
import { news } from "./data";
import { Link } from "react-router-dom";

const NewsCard = ({ value }) => {
  const { id, newsTitle, newsText } = news[value];

  return (
    <div className="card container mt-2 mb-3 p-5">
      <div className="card-body">
        <h5 id={id}>{newsTitle}</h5>
        <p className="card-text">
          {newsText}
          <Link to="#" className="card-link">
            read more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
