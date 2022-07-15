import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  searchArticleById,
  updateArticle,
  addNewArticle,
} from "../../service";
import { Link } from "react-router-dom";

const ArticleEditor = ({ newArticle }) => {
  const { id } = useParams();
  let history = useHistory();
  const [article, setArticle] = useState({});

  useEffect(() => {
    if (!newArticle) {
      searchArticleById(`/article/${id}`, setArticle);
    }
  }, [newArticle, id]);

  const handleUpdateArticle = () => {
    updateArticle(`/article/${id}`, article, setArticle).then(() =>
      handleRedirection(id)
    );
  };

  const handleAddNewArticle = () => {
    addNewArticle(`/article`, article, setArticle).then(() =>
      handleRedirection(article.id)
    );
  };

  const handleRedirection = (id) => {
    history.push(`/article/${id}`);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col col-sm-8 col-md-8">
            <form className="row">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  defaultValue={article.title}
                  onChange={(event) => {
                    article.title = event.target.value;
                  }}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  defaultValue={article.author}
                  onChange={(event) => {
                    article.author = event.target.value;
                  }}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  defaultValue={article.date}
                  onChange={(event) => {
                    article.date = event.target.value;
                  }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="text" className="form-label">
                  Text
                </label>
                <textarea
                  className="form-control"
                  id="text"
                  rows="10"
                  defaultValue={article.text}
                  onChange={(event) => {
                    article.text = event.target.value;
                  }}
                ></textarea>
              </div>

              <div className="col col-6">
                <div className="text-start">
                  <Link
                    className="btn btn-outline-primary mb-5"
                    to={() => {
                      if (!newArticle) {
                        return `/article/${id}`;
                      } else {
                        return `/`;
                      }
                    }}
                  >
                    Cancel
                  </Link>
                </div>
              </div>

              <div className="col col-6">
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      if (newArticle) {
                        handleAddNewArticle();
                      } else {
                        handleUpdateArticle();
                      }
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleEditor;
