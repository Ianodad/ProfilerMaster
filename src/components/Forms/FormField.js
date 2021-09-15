/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field,useFormikContext } from 'formik';
import React from 'react';

import ErrorMessage from './ErrorMessage';

function FormField({ id, label, textarea=false,  ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();

  return (
    <>
      {/* <Input
        shadow={shadow}
        onBlur={() => setFieldTouched(id)}
        onChangeText={handleChange(id)}
        {...otherProps}
      /> */}
      {label && <label htmlFor={label}>{label}</label>}
      <div className="form-group">
        <Field
          onChange={handleChange(id)}
          value={values[id]}
          onBlur={() => setFieldTouched(id)}
          as={textarea ? 'textarea' : 'input'}
          // as={textarea}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
        <ErrorMessage error={errors[id]} visible={touched[id]} />
      </div>
    </>
  );
}

export default FormField;
