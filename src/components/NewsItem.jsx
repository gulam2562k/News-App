import React from "react";
import { Link } from "react-router-dom";

export default function NewsItem({ n }) {
  return (
    <div className="col-sm-3 mt-2">
      <div className="card h-100">
        <img src={n.urlToImage} className="card-img-top" alt={n.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{n.title}</h5>
          <p className="card-text" style={{ 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            display: '-webkit-box', 
            WebkitLineClamp: '3', 
            WebkitBoxOrient: 'vertical' 
          }}>
            {n.description}
          </p>
          <div className="mt-auto">
            <Link
              to={n.url}
              className="btn btn-primary mt-auto d-flex justify-content-center align-items-center"
              target="_blank"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
