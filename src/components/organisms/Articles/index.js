import React from 'react';
import PropTypes from 'prop-types';
import './Articles.scss';
import ArticleCards from '../../molecules/ArticleCards';
import MainArticle from '../MainArticle';

const Articles = ({ articles }) => {
  let posts = articles && articles.slice(0, 5);
  let newPosts = posts && posts.shift()
  console.log(posts)
  return (
    <div className="articles">
      <div className="articles-inner">
        <MainArticle {...newPosts} />
        <div className="articles-cards">
          {posts && posts.map((item, index) => (
            <ArticleCards key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};


Articles.propTypes = {

};

export default Articles
