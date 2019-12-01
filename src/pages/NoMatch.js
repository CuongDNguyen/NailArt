import React from 'react';
import "../styles/NoMatch.css";

const NoMatch = () => {
    return (
        <div className="container">
            <div className="row">
                <div id="nomatchText" className="offset-md-3 col-md-9">
                    This link does not currently exists. Please go back to the home page or retry another link.
                </div>
            </div>
        </div>
    );
};

export default NoMatch;