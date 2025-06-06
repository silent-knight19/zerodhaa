import React from 'react';

function Hero() {
    return (
        <div className="container text-center fs-6">
            <div className="row text-center fs-5 mt-5 p-5">
                <h1 className="fs-1 text-muted">Zerodha Products</h1>
                <h3 className="text-center fs-5">Sleek, modern, and intuitive trading platforms</h3>
                <p className="text-center fs-6">Check out our <a href="https://zerodha.com/products/platforms" style={{ textDecoration: 'none' }}   >investment offerings</a>  to trade on the go.</p>
            </div>
        </div>
    );
}

export default Hero;
