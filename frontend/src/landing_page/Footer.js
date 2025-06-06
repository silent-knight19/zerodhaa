import React from "react";

function Footer() {
  // Helper function to create link items for reusability
  const renderLink = (text, href = "#!") => (
    <li className="mb-1">
      <a
        href={href}
        className="text-muted"
        style={{ textDecoration: "none", fontSize: "0.85em" }}
      >
        {text}
      </a>
    </li>
  );

  return (
    <footer className="container  mt-5 border-top">
      <div className="row py-5 mt-2"style={{backgroundColor:"#FCFCFC"}}>
        {/* Logo and Social Icons Column */}
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <img
            src="/media/logo.svg"
            alt="Zerodha logo"
            style={{ width: "120px" }}
            className="mb-2"
          />
          <p className="text-muted" style={{ fontSize: "0.8em" }}>
            &copy; 2010 - 2025, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>
          <div className="d-flex mb-3">
            <a href="#!" className="text-muted me-3">
              <i className="fab fa-twitter"></i>
            </a>{" "}
            {/* Assuming Font Awesome: X/Twitter */}
            <a href="#!" className="text-muted me-3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-muted me-3">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!" className="text-muted">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="d-flex">
            <a href="#!" className="text-muted me-3">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#!" className="text-muted me-3">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#!" className="text-muted">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
        {/* Account Column */}
        <div className="col-lg-2 col-md-3 col-6 mb-4 mb-lg-0">
          <h6 className="mb-3" style={{ fontWeight: "500" }}>
            Account
          </h6>
          <ul className="list-unstyled">
            {renderLink("Open demat account")}
            {renderLink("Minor demat account")}
            {renderLink("NRI demat account")}
            {renderLink("Commodity")}
            {renderLink("Dematerialisation")}
            {renderLink("Fund transfer")}
            {renderLink("MTF")}
            {renderLink("Referral program")}
          </ul>
        </div>
        {/* Support Column */}
        <div className="col-lg-2 col-md-3 col-6 mb-4 mb-lg-0">
          <h6 className="mb-3" style={{ fontWeight: "500" }}>
            Support
          </h6>
          <ul className="list-unstyled">
            {renderLink("Contact us")}
            {renderLink("Support portal")}
            {renderLink("How to file a complaint?")}
            {renderLink("Status of your complaints")}
            {renderLink("Bulletin")}
            {renderLink("Circular")}
            {renderLink("Z-Connect blog")}
            {renderLink("Downloads")}
          </ul>
        </div>
        {/* Company Column */}
        <div className="col-lg-2 col-md-3 col-6 mb-4 mb-lg-0">
          <h6 className="mb-3" style={{ fontWeight: "500" }}>
            Company
          </h6>
          <ul className="list-unstyled">
            {renderLink("About")}
            {renderLink("Philosophy")}
            {renderLink("Press & media")}
            {renderLink("Careers")}
            {renderLink("Zerodha Cares (CSR)")}
            {renderLink("Zerodha.tech")}
            {renderLink("Open source")}
          </ul>
        </div>
        {/* Quick links Column */}
        <div className="col-lg-3 col-md-3 col-6 mb-4 mb-lg-0">
          {" "}
          {/* Adjusted col-lg for better spacing with 5 columns total with logo col*/}
          <h6 className="mb-3" style={{ fontWeight: "500" }}>
            Quick links
          </h6>
          <ul className="list-unstyled">
            {renderLink("Upcoming IPOs")}
            {renderLink("Brokerage charges")}
            {renderLink("Market holidays")}
            {renderLink("Economic calendar")}
            {renderLink("Calculators")}
            {renderLink("Markets")}
            {renderLink("Sectors")}
          </ul>
        </div>
        <div className="col-12 mt-5 text-muted" style={{ fontSize: "0.7em" }}>
          <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

          <p>Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.</p>

          <p>Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
