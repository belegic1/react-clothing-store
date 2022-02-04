import React from 'react';
import "./custom-buton.styles.scss"

const CustomButton = ({children, otherProps}) => {
    return <div {...otherProps} className="custom-button">{ children}</div>
};

export default CustomButton;
