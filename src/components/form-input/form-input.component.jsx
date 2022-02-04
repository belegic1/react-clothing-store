import React from 'react';
import "./form-input.styles.scss"

const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <div className="group">
            <input onChange={handleChange} {...otherProps} className="form-input" />
            {
                label &&
                (<label className={`${otherProps.value.length ? 'shrink' : ""}`}>
                        {label}
                    </label>)
                    
            }
      </div>
  )
};

export default FormInput;
