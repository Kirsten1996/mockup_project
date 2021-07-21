import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from "formik";
import './Filter.scss';
import Checkbox from '../../atoms/Checkbox';

const Filter = ({ articles }) => {
  console.log(articles, '::::props')
  let fiveAuthors = articles && articles.slice(0, 5);
  return (
    <div className="filter">
      <div className="filter-inner">
        <div className="filter-container">
          <h2>Publishers</h2>
          <Formik
            initialValues={{ name: 'jared' }}
            onSubmit={(values, actions) => {
              console.log(values, actions)
            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                {fiveAuthors && fiveAuthors.map((item, index) => (
                  <Checkbox key={index} {...item} />
                ))}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};


Filter.propTypes = {

};

export default Filter
