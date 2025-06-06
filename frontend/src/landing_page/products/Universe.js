import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Zerodha Fund House",
    logoSrc: "media/zerodhaFundhouse.png", // Replace with actual path
    description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    name: "Sensibull",
    logoSrc: "media/sensibullLogo.svg", // Replace with actual path
    description:
      "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    name: "Tijori",
    logoSrc: "", // Replace with actual path
    description:
      "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
  },
  {
    name: "Streak",
    logoSrc: "/media/streakLogo.png", // Replace with actual path
    description:
      "Systematic trading platform that allows you to create and backtest strategies without coding.",
  },
  {
    name: "Smallcase",
    logoSrc: "/media/smallcaseLogo.png", // Replace with actual path
    description:
      "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
  },
  {
    name: "Ditto",
    logoSrc: "/media/dittoLogo.png", // Replace with actual path
    description:
      "Personalized advice on life and health insurance. No spam and no mis-selling.",
  },
];

function Universe() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        {/* You can add a main heading for the Universe section if needed, 
                    e.g., <h2>The Zerodha Universe</h2> 
                    The previous version had this, but the image doesn't show a prominent one here */}
      </div>
      <div className="row text-center">
        {products.map((product, index) => (
          <div className="col-md-4 mb-5" key={index}>
            <img
              src={product.logoSrc}
              alt={`${product.name} logo`}
              style={{
                height: "50px",
                marginBottom: "15px",
                objectFit: "contain",
              }}
            />
            <p className="text-muted" style={{ fontSize: "0.9em" }}>
              {product.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => navigate("/signup")}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
