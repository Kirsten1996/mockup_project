import React from 'react';
import './ArticleCards.scss';
import Headings from '../../atoms/Headings';
import TextComponent from '../../atoms/TextComponent';
import Button from '../../atoms/Button';
import FocalImage from '../../atoms/FocalImage';

const ArticleCards = ({ title, content, url, urlToImage, author, publishedAt }) => {
  return (
    <div className="article-cards">
      {urlToImage && <FocalImage urlToImage={urlToImage} setHeight />}
      <div className="article-cards-content">
        {author && <TextComponent author={author} grey uppercase />}
        {title && <Headings title={title} setChar />}
        {publishedAt && <TextComponent publishedAt={publishedAt} grey />}
        {url && <Button label='read more' to={url} />}
      </div>
    </div>
  );
};


ArticleCards.propTypes = {

};

export default ArticleCards
