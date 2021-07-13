import React from 'react';
import PropTypes from 'prop-types';
import './FocalImage.scss';

const FocalImage = ({ urlToImage, setHeight }) => {

  return (
    <div className={`focal-image ${setHeight ? 'setHeight' : ''}`}>
      <img src={urlToImage} alt=""/>
    </div>
  );
};


FocalImage.propTypes = {

};

export default FocalImage
