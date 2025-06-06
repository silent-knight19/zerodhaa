import React from 'react';

function Pricing() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                    <h1 className='mb-3' style={{ fontWeight: 500, fontSize: '2.25rem' }}>Unbeatable pricing</h1>
                    <p className='text-muted mb-4' style={{ fontSize: '1.1em', lineHeight: '1.6' }}>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='' style={{ textDecoration: "none", color: "#387ed1", fontWeight: 500 }}>
                        See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-md-6">
                    <div className="row p-3">
                        <div className="col-12 col-sm-6 mb-3 mb-sm-0" style={{ borderRight: '1px solid #dee2e6' }}>
                            <div className="d-flex align-items-center" style={{ borderRight: '1px solid #dee2e6' }}>
                                <span style={{ fontSize: '3.5rem', color: '#f0ad4e', fontWeight: 700, lineHeight: 1, marginRight: '15px' }}>₹0</span>
                                <p className="mb-0 text-muted" style={{ fontSize: '0.9em', lineHeight: '1.3' }}>Free account<br />opening</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 mb-3 mb-sm-0" style={{ borderRight: '1px solid #dee2e6' }}>
                            <div className="d-flex align-items-center" style={{ borderRight: '1px solid #dee2e6' }}>
                                <span style={{ fontSize: '3.5rem', color: '#f0ad4e', fontWeight: 700, lineHeight: 1, marginRight: '15px' }}>₹0</span>
                                <p className="mb-0 text-muted" style={{ fontSize: '0.9em', lineHeight: '1.3' }}>Free equity delivery<br />and direct mutual funds</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 p-3">
                        <div className="col-12 col-sm-6" style={{ borderRight: '1px solid #dee2e6' }}> 
                             <div className="d-flex align-items-center">
                                <span style={{ fontSize: '3.5rem', color: '#f0ad4e', fontWeight: 700, lineHeight: 1, marginRight: '15px' }}>₹20</span>
                                <p className="mb-0 text-muted" style={{ fontSize: '0.9em', lineHeight: '1.3' }}>Intraday and<br />F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;