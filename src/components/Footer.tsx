import React from "react";

const Footer = (): JSX.Element => (
    <footer className="footer-section">
        <div className="bg-shape--top">
            <img src="assets/images/elements/round-shape-2.png" alt="image"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.7s">
                    <div className="subscribe-area">
                        <div className="left">
                            <span className="subtitle">Join the Community</span>
                            <h3 className="title">To Get Exclusive Information</h3>
                        </div>
                        <div className="right" style={{textAlign: 'right'}}>
                            <a className="cmn-btn align-items-center active" href="#" role="tab">
                                Join NFT Riddler Discord
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container pt-120">
            <div className="row pb-5 align-items-center">
                <div className="col-lg-4">
                    <ul className="app-btn">
                    </ul>
                </div>
                <div className="col-lg-8">
                    <ul className="short-links justify-content-lg-end justify-content-center">
                        <li><a href="#0">About</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="row py-5 align-items-center">
                <div className="col-lg-6">
                    <p className="copy-right-text text-lg-left text-center mb-lg-0 mb-3">
                        Copyright © 2021
                    </p>
                </div>
                <div className="col-lg-6">
                    <ul className="social-links justify-content-lg-end justify-content-center">
                        <li>
                            <a href="#0">
                                <i className="fab fa-discord"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
