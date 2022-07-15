package com.uninassau.blog.service;

import java.util.Date;
import java.util.NoSuchElementException;

import com.uninassau.blog.exception.NoSuchArticleException;
import com.uninassau.blog.model.Article;
import com.uninassau.blog.service.persistence.ArticlePersistence;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * @author Alexandre de Souza Jr.
 */
@Service
public class ArticleLocalService {

    public Article createArticle(Article article) {
        return articlePersistence.save(article);
    }

    public Page<Article> searchArticles(Pageable paging) {
        return articlePersistence.findAll(paging);
    }

    public Article searchArticleById(int id) 
                throws NoSuchArticleException {

        try {
            Article article = articlePersistence.findById(id).get();

            return article;
        } catch (NoSuchElementException e) {
            throw new NoSuchArticleException(
                String.format("There is no article with id %d", id));
        }

    }

    public Article updateArticle(int id, String title, String author, Date date, String text)
            throws NoSuchArticleException {

        try {
            Article article = articlePersistence.findById(id).get();

            article.setTitle(title);
            article.setAuthor(author);
            article.setDate(date);
            article.setText(text);

            articlePersistence.save(article);

            return article;
        } catch (NoSuchElementException e) {
            throw new NoSuchArticleException(String.format("There is no article with id %d", id));
        }

    }

    public void deleteArticle(int id) 
        throws NoSuchArticleException {

        try {
            articlePersistence.findById(id).get();
        } catch (NoSuchElementException e) {
            throw new NoSuchArticleException(
                String.format("There is no article with id %d", id));
        }

        articlePersistence.deleteById(id);

    }

    @Autowired
    private ArticlePersistence articlePersistence;

}
