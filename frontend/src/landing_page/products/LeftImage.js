import React from 'react';

function LeftImage() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-6 ">
                    <img src="media/kite.png" alt="Product Left" className="img-fluid mb-3 mb-md-0" />
                </div>
                <div className="col-md-6 ps-md-5">
                    <h2>Kite</h2>
                    <p className="text-muted p-3">Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
                    </p>
                    <p>
                        <a href="https://zerodha.com/products/kite" className="me-5" style={{ textDecoration: 'none' }}>Try demo</a>
                        <a href="https://zerodha.com/products/kite" style={{ textDecoration: 'none' }}>Learn more</a>
                    </p>
                    
                </div>
            </div>
            
        </div>
    );
}

export default LeftImage;
