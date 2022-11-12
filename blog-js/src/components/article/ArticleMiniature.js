import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../helper/ArticleHelper";


const ArticleMiniature = ({ article }) => {
  return (
    <>
      <div className="card">
        <h5 className="card-header">
          <span>Author: {article.author}</span>
          <br />
          <span>Date: {formatDate(article.date, "/")}</span>
        </h5>
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.text}</p>

          <Link className="btn btn-primary" to={`/article/${article.id}`}>
            Read full article
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArticleMiniature;
