import React from "react";

const BlogPagination = ({ page, setPage }) => {
  return (
    <>
      <div className="col col-sm-4 col-md-4 mb-2">
        <nav aria-label="page navigation">
          <ul className="pagination">
            <li className="page-item">
              <button
                type="button"
                className="page-link"
                onClick={() => {
                  if (page > 0) {
                    setPage(page - 1);
                  }
                }}
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <button
                type="button"
                className="page-link"
                onClick={() => setPage(0)}
              >
                1
              </button>
            </li>
            <li className="page-item">
              <button
                type="button"
                className="page-link"
                onClick={() => setPage(1)}
              >
                2
              </button>
            </li>
            <li className="page-item">
              <button
                type="button"
                className="page-link"
                onClick={() => setPage(2)}
              >
                3
              </button>
            </li>
            <li className="page-item">
              <button
                type="button"
                className="page-link"
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BlogPagination;
