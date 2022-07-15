import React from "react";

const BlogSize = ({ size, setSize }) => {
  return (
    <>
      <div className="col col-sm-4 col-md-4 mb-2">
        <div className="dropdown text-end">
          <button
            className="btn btn-outline-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButtonSize"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Number of Articles
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButtonSize"
          >
            <li>
              <button
                type="button"
                className="dropdown-item text-end"
                onClick={() => setSize(5)}
              >
                5 per page
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item text-end"
                onClick={() => setSize(10)}
              >
                10 per page
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item text-end"
                onClick={() => setSize(15)}
              >
                15 per page
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogSize;
