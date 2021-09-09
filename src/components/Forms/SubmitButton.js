import {useFormikContext} from 'formik';
import React, {} from 'react'

const SubmitButton = ({className, title, style, icon}) => {


  const Class = className ? className : "form-group"
  const {handleSubmit} = useFormikContext();
  return (
    <div className={Class}>
      <button type="submit" onClick={handleSubmit} className="btn btn-block" style={{...style}}>
                 {title && title}
                 {icon&& icon}
       </button>
    {/* <Button
      style={styles.button}
      title={title}
      color={buttonColor}
      textStyle={styles[textColor]}
      // width={width}
      buttonType
      onPress={handleSubmit}
    /> */}
    </div>
  );
};

export default SubmitButton