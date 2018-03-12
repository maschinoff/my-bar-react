import React from 'react';

export const LoadingPage = () => (
    <div className="mask">
        <div id="main_loader">
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
                <div className="bounce4"></div>
                <div className="bounce5"></div>
                <div className="bounce6"></div>
            </div>
        </div>
    </div>
);

export default LoadingPage;