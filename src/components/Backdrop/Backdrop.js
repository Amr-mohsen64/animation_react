import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {

    const cssClasses = ['Backdrop',
        props.show === "entering" ? 'BackdropOpen'
            : props.show === "existing" ? 'BackdropClose' : null];

    return <div className={cssClasses.join(' ')}></div>

};

export default backdrop;