import React from "react";

function RightImage() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2">
          <img
            src="media/console.png"
            alt="Product Right"
            className="img-fluid mb-3 mb-md-0"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h2>Console</h2>
          <p className="text-muted">
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
          </p>
          <p>
            <a
              href="https://zerodha.com/products/console"
              style={{ textDecoration: "none" }}
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 ">
          <img
            src="media/coin.png"
            alt="Product Left"
            className="img-fluid mb-3 mb-md-0"
          />
        </div>
        <div className="col-md-6 ps-md-5">
          <h2>Coin</h2>
          <p className="text-muted p-3">
          Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.

Coin 
          </p>
          <p>
            <a
              href="https://zerodha.com/products/kite"
              className="me-5"
              style={{ textDecoration: "none" }}
            >
              Try demo
            </a>
            <a
              href="https://zerodha.com/products/kite"
              style={{ textDecoration: "none" }}
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightImage;
