import React from 'react';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';

function FormField({id, ...otherProps}) {
  const {setFieldTouched, handleChange, errors, touched, values} = useFormikContext();

  return (
    <>
      {/* <Input
        shadow={shadow}
        onBlur={() => setFieldTouched(id)}
        onChangeText={handleChange(id)}
        {...otherProps}
      /> */}
      <div className="form-group">
                <input
                  onChange={handleChange(id)}
                  value={values[id]}
                  onBlur={() => setFieldTouched(id)}
                  {...otherProps}
        />
      <ErrorMessage error={errors[id]} visible={touched[id]} />
      </div>
    </>
  );
}

export default FormField;