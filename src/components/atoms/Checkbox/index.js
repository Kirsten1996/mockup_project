import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik'
import './Checkbox.scss';

const StyledCheckBox = (props) => {
  return (
    <label className="checkbox">
      <p className="checkbox-wrap">
        {props.author}
      </p>
    </label>
  )
}

const Checkbox = (props) => {
  return (
    <Field
      name={props.author}
      component={StyledCheckBox}
      type="checkbox"
      {...props}
    />
  );
};


Checkbox.propTypes = {
  author: PropTypes.string
};

export default Checkbox
