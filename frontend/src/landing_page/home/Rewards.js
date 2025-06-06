import React from 'react';

function Rewards() {
    return (
        <div className="container p-5 mt-5">
            <div className="row align-items-center">
                <div className="col-md-6 mt-3">
                    <img
                        src="media/largestBroker.svg"
                        alt="Illustration showing Zerodha as the largest stock broker in India"
                        className="img-fluid"
                        style={{ width: '100%' }}
                    />
                </div>
                <div className="col-md-6 mt-3">
                    <h1 className="mb-3" style={{ fontSize: '2.25rem', fontWeight: '500' }}>
                        Largest stock broker in India
                    </h1>
                    <p className="mb-4" style={{ fontSize: '1.1em', lineHeight: '1.6' }}>
                        1.7+ crore Zerodha clients contribute to over 15% of all retail order
                        volumes in India daily by trading and investing in:
                    </p>


                    <div className="row mb-4">
                        <div className="col-sm-6">
                            <ul className="list-unstyled" style={{ paddingLeft: '0' }}>
                                <li className="mb-2">&bull; Futures and options</li>
                                <li className="mb-2">&bull; Stocks & IPOs</li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <ul className="list-unstyled" style={{ paddingLeft: '0' }}>
                                <li className="mb-2">&bull; Direct mutual funds</li>
                                <li className="mb-2">&bull; Bonds & Gov. secs</li>
                            </ul>
                        </div>
                    </div>


                    <img
                        src="media/pressLogos.png"
                        alt="Zerodha featured in the press"
                        className="img-fluid"
                        style={{ width: '90%' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Rewards;