package com.uninassau.blog.service.persistence;

import com.uninassau.blog.model.Article;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

/**
 * @author Alexandre de Souza Jr.
 */
public interface ArticlePersistence extends CrudRepository<Article, Integer> {

    Page<Article> findAll(Pageable pageable);

}
