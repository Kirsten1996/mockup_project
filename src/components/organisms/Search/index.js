import React from 'react';
import { Formik, Field } from "formik";
import PropTypes from 'prop-types';
import './Search.scss';
import Checkbox from '../../atoms/Checkbox';
import Input from '../../atoms/Input';
import DateInput from '../../atoms/DateInput';
import Button from '../../atoms/Button';

const Search = (props) => {

  return (
    <div className="search">
      <div className="search-inner">
      <Formik
        initialValues={{ name: 'query' }}
        onSubmit={(values, actions) => {
          console.log(values, actions)
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <Field
              name='query'
              component={Input}
              type='text'
              placeholder='Search'
              search
            />
            <Field
              name='from'
              component={Input}
              type='text'
              placeholder='from'
              no_border
              black
            />
            <Field
              name='to'
              component={Input}
              type='text'
              placeholder='to'
              no_border
              black
            />
            <Button label='Search' black />
          </form>
        )}
      </Formik>
    </div>
    </div>
  );
};


Search.propTypes = {

};

export default Search
