import React from 'react';

function Hero() {
return (
  <div className="container p-5">
    <div className="row text-center">
      <img src="media/homeHero.png" alt="hero" style={{ width: '100%' }} className="d-block mx-auto" />
      <h1 className="mt-5">Invest in Everything</h1>
      <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <button className="p-3 btn btn-primary fs-5 " style={{width:"25%",margin:"0 auto"}}>Signup Now</button>
    </div>
  </div>
);


}

export default Hero;
