import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import Link from 'next/link'

const Button = ({ label, to, black }) => {

  return (
    <div className={`button-container ${black ? 'black-button' : ''}`}>
      <button className={`${black ? 'black-button' : ''}`}><a href={to}>{label}</a></button>
    </div>
  );
};


Button.propTypes = {

};

export default Button
