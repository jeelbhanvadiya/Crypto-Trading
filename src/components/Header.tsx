import React from "react";

const Header = (): JSX.Element => (
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="left d-flex align-items-center">
                            <div className="total__amount">SGB/USD $<span>0.00</span></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="right">
                            <a href="#raffles" className="cmn-btn style--three btn--sm">
                                Delegate Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* header__top end */}
        <div className="header__bottom">
            <div className="container">
                <nav className="navbar navbar-expand-xl p-0 align-items-center">
                    <a className="site-logo site-title" href="index.html">
                        <img src="assets/images/riddler-raffle-logo.png" alt="site-logo"/>
                        <span className="logo-icon">
                                 <i className="flaticon-fire"/>
                             </span>
                    </a>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                            data-target="#nav<>" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="menu-toggle"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav main-menu ml-auto">
                            <li className="menu_has_children">
                                <a href="#0">Home</a>
                            </li>
                            <li className="menu_has_children">
                                <a href="#0">About</a>
                            </li>
                            {/*   <li><a href="#0">Winners</a></li> */}
                        </ul>
                        <div className="nav-right">
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        {/* header__bottom end */}
    </header>
);

export default Header;
