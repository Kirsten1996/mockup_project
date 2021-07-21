import React from 'react';
import PropTypes from 'prop-types';
import './MainArticle.scss';
import Headings from '../../atoms/Headings';
import TextComponent from '../../atoms/TextComponent';
import Button from '../../atoms/Button';
import FocalImage from '../../atoms/FocalImage';

const MainArticle = ({ title, content, url, author, publishedAt, urlToImage }) => {
  console.log(content)
  return (
    <div className="main-article-card">
      {urlToImage && <FocalImage urlToImage={urlToImage}/>}
      <div className="main-article-card-containers">
        <TextComponent author={author} grey uppercase />
        <TextComponent publishedAt={publishedAt} grey />
      </div>
      <Headings title={title} />
      <TextComponent content={content} />
      <Button label='read more' to={url} black />
    </div>
  );
};


MainArticle.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
  urlToImage: PropTypes.string
};

export default MainArticle
