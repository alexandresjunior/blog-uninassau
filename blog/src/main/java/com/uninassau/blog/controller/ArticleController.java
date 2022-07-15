package com.uninassau.blog.controller;

import com.uninassau.blog.dto.ArticleDTO;
import com.uninassau.blog.exception.NoSuchArticleException;
import com.uninassau.blog.helper.ArticleHelper;
import com.uninassau.blog.model.Article;
import com.uninassau.blog.service.ArticleLocalService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author Alexandre de Souza Jr.
 */
@Controller
@RequestMapping(path = "/blog")
public class ArticleController {

    @PostMapping(path = "/article")
    public @ResponseBody Article addNewArticle(@RequestBody ArticleDTO articleDTO) {
        Article article = new Article();

        article.setTitle(articleDTO.getTitle());
        article.setAuthor(articleDTO.getAuthor());
        article.setDate(ArticleHelper.convertStringToDate(articleDTO.getDate()));
        article.setText(articleDTO.getText());

        return articleLocalService.createArticle(article);
    }

    @GetMapping(path = "/article")
    public @ResponseBody Page<Article> searchArticles(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "5") String size) {

        Pageable paging = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return articleLocalService.searchArticles(paging);
    }

    @GetMapping(path = "/article/{id}")
    public @ResponseBody Object searchArticleById(@PathVariable("id") String id) {
        try {
            return articleLocalService.searchArticleById(Integer.parseInt(id));
        } catch (NoSuchArticleException e) {
            return e.getMessage();
        }
    }

    @PutMapping(path = "/article/{id}")
    public @ResponseBody String updateArticle(
            @PathVariable("id") String id, @RequestBody ArticleDTO articleDTO) {
        try {
            articleLocalService.updateArticle(Integer.parseInt(id),
                    articleDTO.getTitle(), articleDTO.getAuthor(),
                    ArticleHelper.convertStringToDate(articleDTO.getDate()), articleDTO.getText());

            return "Article updated successfully!";
        } catch (NoSuchArticleException e) {
            return e.getMessage();
        }
    }

    @DeleteMapping(path = "/article/{id}")
    public @ResponseBody String deleteArticle(@PathVariable("id") String id) {
        try {
            articleLocalService.deleteArticle(Integer.parseInt(id));

            return "Article deleted successfully!";
        } catch (NoSuchArticleException e) {
            return e.getMessage();
        }
    }

    @Autowired
    private ArticleLocalService articleLocalService;

}
