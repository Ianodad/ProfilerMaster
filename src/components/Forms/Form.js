/* eslint-disable jsx-a11y/no-redundant-roles */
import { Formik } from 'formik';
import React from 'react';

const AppForm = ({
  className,
  initialValues,
  onSubmit,
  validationSchema,
  children,
  autoComplete,
  enableReinitialize,
}) => {
  const Class = className || 'form';

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={enableReinitialize}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <>
          <form className={Class} role="form" autoComplete={autoComplete}>
            {children}
          </form>
        </>
      )}
    </Formik>
  );
};

export default AppForm;
