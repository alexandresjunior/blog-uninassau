import React from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";

import Blog from "./components/blog/Blog";
import Article from "./components/article/Article";
import ArticleEditor from "./components/article/ArticleEditor";
import Header from './components/Header';
import Footer from './components/Footer';

function BlogRoutes() {
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/">
            <Blog />
          </Route>

          <Route exact path="/article">
            <ArticleEditor newArticle={true} />
          </Route>

          <Route path="/article/:id">
            <Article />
          </Route>

          <Route path="/edit/article/:id">
            <ArticleEditor newArticle={false} />
          </Route>
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default BlogRoutes;