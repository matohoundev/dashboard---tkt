import React, { Fragment } from 'react';
import './notfound.scss'

function Notfound() { 
    return (
        <Fragment>
            <div className="error">
                <h1>404</h1>
                <p>Not found</p> 
            </div>
        </Fragment>
    )
}

export default Notfound;
