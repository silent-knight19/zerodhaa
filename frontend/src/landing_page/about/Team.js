import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-4 mb-5">
        <h1 className="text-center fs-2">People</h1>
        <div className="row p-5 mt-5 text-muted fs-6">
          <div className="col-6 p-5">
            <img
              src="media/nithinKamath.jpg"
              alt="Nithin Kamath"
              className="img-fluid rounded-circle"
            />
            <h4 className="text-center mt-3">Nithin Kamath</h4>
            <h5 className="text-center">Founder and CEO</h5>
          </div>
          <div className="col-6 p-5"style={{ textDecoration: 'none' }}>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. </p>
          <p>Today, Zerodha has changed the landscape of the Indian broking industry.</p>

          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="https://zerodha.com" style={{ textDecoration: 'none' }}>Homepage</a> / <a href="https://tradingqna.com" style={{ textDecoration: 'none' }}>TradingQnA</a> / <a href="https://twitter.com/zerodha" style={{ textDecoration: 'none' }}>Twitter</a>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
