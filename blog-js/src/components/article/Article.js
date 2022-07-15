import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchArticleById } from "../../service";
import { Link } from "react-router-dom";
import { formatDate } from "../../helper/ArticleHelper";
import ArticleModal from "./ArticleModal";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    searchArticleById(`/article/${id}`, setArticle);
  }, [id]);

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col col-sm-8 col-md-8">
            <div className="row">
              <div className="col col-sm-8 col-md-8">
                <Link className="btn btn-primary mb-5" to={`/`}>
                  Go Back
                </Link>
              </div>

              <div className="col col-sm-2 col-md-2 text-end">
                <Link
                  className="btn btn btn-outline-primary mb-5"
                  to={`/edit/article/${article.id}`}
                >
                  Edit
                </Link>
              </div>

              <div className="col col-sm-2 col-md-2 text-end">
                <button className="btn btn btn-danger" onClick={() => setModalShow(true)}>
                  Delete
                </button>

                <ArticleModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  id={`${article.id}`}
                />
              </div>
            </div>

            <div className="col col-sm-8 col-md-8 mb-3">
              <h1 className="text-start">{article.title}</h1>
            </div>

            <div className="clearfix">
              <div className="col col-sm-8 col-md-8 mt-2">
                <h4 className="text-start">Author: {article.author}</h4>
              </div>

              <div className="col col-sm-8 col-md-8 mb-3">
                <h4 className="text-start">
                  Date: {formatDate(article.date, "/")}
                </h4>
              </div>

              <p>{article.text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
