import React from 'react';
import PropTypes from 'prop-types';
import './TextComponent.scss';

const TextComponent = ({ content, grey, uppercase, publishedAt, author }) => {

  return (
    <div className='text-component'>
      {content && <p className={`text ${grey ? 'grey' : ''} ${uppercase ? 'uppercase' : ''}`}>{`${content.substring(0, 200)}...`}</p>}
      {author && <p className={`${grey ? 'grey' : ''} ${uppercase ? 'uppercase' : ''}`} dangerouslySetInnerHTML={{ __html: author }} />}
      {publishedAt && <p className={`${grey ? 'grey' : ''} ${uppercase ? 'uppercase' : ''}`}>{publishedAt}</p>}
    </div>
  );
};


TextComponent.propTypes = {
  content: PropTypes.string
};

export default TextComponent
