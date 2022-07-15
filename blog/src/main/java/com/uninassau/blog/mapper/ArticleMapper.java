package com.uninassau.blog.mapper;

import com.uninassau.blog.dto.ArticleDTO;
import com.uninassau.blog.model.Article;

/**
 * @author Alexandre de Souza Jr.
 */
public class ArticleMapper {

    public static ArticleDTO toDTO(Article article) {
        ArticleDTO articleDTO = new ArticleDTO();

        articleDTO.setTitle(article.getTitle());
        articleDTO.setAuthor(article.getAuthor());
        articleDTO.setDate(String.valueOf(article.getDate()));
        articleDTO.setText(article.getText());

        return articleDTO;
    }

}
