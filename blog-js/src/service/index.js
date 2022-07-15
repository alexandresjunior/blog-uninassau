import axios from "axios";
import { formatDate } from "../helper/ArticleHelper";

export const api = axios.create({
  baseURL: "http://localhost:8080/blog",
});

export const searchArticles = async (url, setArticles) => {
  const response = await api.get(url);
  setArticles(response.data.content);
};

export const searchArticleById = async (url, setArticle) => {
  const response = await api.get(url);
  response.data.date = formatDate(response.data.date);
  setArticle(response.data);
};

export const updateArticle = async (url, article, setArticle) => {
  const response = await api.put(url, article);
  setArticle(response.data);
};

export const addNewArticle = async (url, article, setArticle) => {
  const response = await api.post(url, article);
  article.id = response.data.id;
  setArticle(response.data);
};

export const deleteArticle = async (url) => {
  await api.delete(url);
};
