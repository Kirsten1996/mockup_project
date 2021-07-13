import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'
import './Input.scss';
import icon from './search.png'
import { Field } from 'formik';

const InputField = props => {
  const {
    no_border,
    black,
    field,
    autoComplete,
    placeholder,
    search,
    type,
    form: { errors, touched, values },
  } = props;

  return (
    <div
      className={`input-field ${
        errors[field.name] && touched[field.name] ? 'error' : ''
      } ${field.defaultValue !== '' ? 'content' : ''} `}
    >
      <input
        {...field}
        autoComplete={autoComplete}
        id={field.name}
        type={type}
        placeholder={placeholder}
        className={`${no_border ?
          'no_border' : ''} ${black ? 'black' : ''}`}
      />
      {search && <div className='image-wrap'><Image src={icon} alt="search" width={16} height={16} /></div>}
      {/*<label*/}
      {/*  htmlFor={field.name}*/}
      {/*  className={`{${values[field.name]} !== '' ? 'content' : '' ${black ?*/}
      {/*    'black' : ''} ${no_border ?*/}
      {/*    'no_border' : ''}`}*/}
      {/*>*/}
      {/*  {placeholder}*/}
      {/*</label>*/}
      {/*{errors[field.name] &&*/}
      {/*touched[field.name] && <span>{errors[field.name]}</span>*/}
      {/*}*/}
    </div>
  );
};

InputField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
};

export default InputField;
