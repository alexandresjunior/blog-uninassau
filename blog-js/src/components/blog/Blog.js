import React, { useState, useEffect } from "react";
import ArticleMiniature from "../article/ArticleMiniature";
import { searchArticles } from "../../service";
import BlogPagination from "./BlogPagination";
import BlogSize from "./BlogSize";
import { Heading } from "@chakra-ui/react";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  useEffect(() => {
    searchArticles(`/article?page=${page}&size=${size}`, setArticles);
  }, [page, size]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mb-3">
            <Heading
              fontWeight={400}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'100%'}
              textAlign={'center'}>
                Blog
            </Heading>
        </div>
        <div className="row">
            <div className="row justify-content-center">
          {articles.length > 0 ?
            <>
              <BlogPagination article={articles} page={page} setPage={setPage} />
              <BlogSize size={size} setSize={setSize} />
            </>
            : null}
          </div>

          {articles.map((article, index) => {
            return (
              <ul className="list-group list-group-flush" key={index}>
                <li className="list-group-item">
                  <div className="row justify-content-center mt-2 mb-2">
                    <div className="col col-sm-8 col-md-8">
                      <ArticleMiniature article={article} />
                    </div>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default Blog;
