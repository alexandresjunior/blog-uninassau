import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./components/blog/Blog";
import Header from "./components/Header";
import Article from "./components/article/Article";
import ArticleEditor from "./components/article/ArticleEditor";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
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
      </Router>
    </>
  );
};

export default App;
