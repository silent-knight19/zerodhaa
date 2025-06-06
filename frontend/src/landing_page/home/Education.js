import React from 'react';

function Education() {
    return (
        <div className="container p-5">
            <div className="row align-items-center">
                {/* Left Column: Image */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <img src="/media/varsity.png" alt="Varsity by Zerodha" className="img-fluid" />
                </div>

                {/* Right Column: Text Content */}
                <div className="col-md-6">
                    <h1 className="mb-3" style={{ fontWeight: 500, fontSize: '2.00rem' }}>Free and open market education</h1>
                    
                    <p className='text-muted mb-2' style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href="#!" style={{ textDecoration: "none", color: "#387ed1", fontWeight: 500, fontSize: '1.1em' }}>
                        Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>

                    <p className='text-muted mt-4 mb-2' style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href="#!" style={{ textDecoration: "none", color: "#387ed1", fontWeight: 500, fontSize: '1.1em' }}>
                        TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;