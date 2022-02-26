import React from 'react'
import {SpinnerContainer, SpinnerOverlay} from "./with-spinner.styles"

const WithSpinner = WrappedComponent  =>( {isLoading, ...otherProps} )=>{
    return (
      <div>
        {isLoading ? (
          <SpinnerOverlay>
            <SpinnerContainer />
          </SpinnerOverlay>
        ) : (
          <WrappedComponent {...otherProps} />
        )}
      </div>
    );
  
}

export default WithSpinner