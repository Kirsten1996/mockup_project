import React from 'react';
import PropTypes from 'prop-types';
import './Headings.scss';

const Headings = ({ title, setChar }) => {

  return (
    <div className="headings">
      {setChar ? <h2>{`${title.substring(0, 50)}...`}</h2> : <h2>{title}</h2>}
    </div>
  );
};


Headings.propTypes = {
  title: PropTypes.string
};

export default Headings
