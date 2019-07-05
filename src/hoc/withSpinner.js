import React, { useState } from 'react';
import './withSpinner.css'

const WithSpinner = (Component, props ) => {
    const [loading, setloading ] = useState(0);

    return (
            <div>
                {loading? <div className="loader">Loading...</div> :  <Component handleLoading={setloading} {...props}></Component>}
            </div>
    );
}

export default WithSpinner;