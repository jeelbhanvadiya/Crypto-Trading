import React from "react";
import app from "./index";
import ScrollUp from "../components/ScrollUp";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowToPlay from "../components/HowToPlay";
import Contest from "../components/Contest";
import Footer from "../components/Footer";
import Login from "../components/Modal/Login";
import SignUp from "../components/Modal/SignUp";

const App = (): JSX.Element => {
  console.log(app.user);
  return (
      <div>
          <div id="wrapper">
              {/* Header */}
              <header className="site-header is-sticky">
                  {/* Navbar */}
                  <div className="navbar navbar-expand-lg is-transparent" id="mainnav">
                      <nav className="container">
                          <h1 className="navbar-brand">
                              <a href="index.html">
                                  <img className="logo" src="wp-content/uploads/sites/29/2018/09/logo-big.png" alt="Cryptico Salvia" />
                                  <img className="logo-2" src="wp-content/uploads/sites/29/2018/09/logo-dark-big.png" alt="Cryptico Salvia" />
                              </a>
                          </h1>
                          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon">
              <span className="ti ti-align-justify" />
            </span>
                          </button>
                          <div className="navbar-collapse justify-content-end">
                              <ul id="menu-onepage-menu" className="navbar-nav menu-top"><li id="menu-item-1056" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1056"><a href="#about">About</a></li>
                                  <li id="menu-item-1084" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1084"><a href="#overview">Overview</a></li>
                                  <li id="menu-item-1058" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1058"><a href="#how">How It Works</a></li>
                                  <li id="menu-item-1061" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1061"><a href="#tokens">ICO Token</a></li>
                                  <li id="menu-item-1059" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1059"><a href="#roadmap">Roadmap</a></li>
                                  <li id="menu-item-1060" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1060"><a href="#team">Team</a></li>
                                  <li id="menu-item-1081" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1081"><a href="#faqs">More</a>
                                      <ul className="sub-menu">
                                          <li id="menu-item-1062" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1062"><a href="#faqs">FAQs</a></li>
                                          <li id="menu-item-1082" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1082"><a href="#documents">Documents</a></li>
                                      </ul>
                                  </li>
                              </ul>
                              <ul className="navbar-nav navbar-btns">
                                  <li className="nav-item"><a className="nav-link btn btn-sm btn-outline menu-link" href="#">BUY TOKEN</a></li>
                              </ul>
                          </div>
                      </nav>
                  </div>            {/* End Navbar */}
              </header>
              {/* End Header */}
              <section className="vc_row wpb_row vc_row-fluid banner-salvia section-bg-salvia vc_row-o-equal-height vc_row-o-content-middle vc_row-flex banner banner-full d-flex align-items-center"><div id="particles-js" className="particles-container particles-js" /><div className="container"><div className="banner-content"><div className="row"><div className="res-m-bttm-lg text-center text-lg-left wpb_column vc_column_container vc_col-sm-12 vc_col-md-6"><div className="vc_column-inner "><div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper">
                          <h2 className="animated" data-animate="fadeInUp" data-delay="0.65">Algorithmic &amp; Blockchain Solutions for Crypto-Trading and Protect your Investments</h2>
                          <p className="lead animated" data-animate="fadeInUp" data-delay="0.75">Full transparency. More trust, Minimize risk, maximize rewards.</p>
                          <ul className="btns animated" data-animate="fadeInUp" data-delay="0.85">
                              <li><a className="btn btn-outline" href="#">WHITE PAPER</a></li>
                              <li><a className="btn btn-outline" href="#">ONE PAGER</a></li>
                          </ul>
                          <div className="gaps size-2x" />
                          <h6 className="animated" data-animate="fadeInUp" data-delay="0.95">Join our community</h6>
                          <ul className="social-link-exp">
                              <li className="animated" data-animate="fadeInUp" data-delay="1.05"><a href="#"><i className="fas fa-paper-plane" />telegram Telegram</a></li>
                              <li className="animated" data-animate="fadeInUp" data-delay="1.15"><a href="#"><i className="fa fa-facebook" />facebook</a></li>
                              <li className="animated" data-animate="fadeInUp" data-delay="1.25"><a href="#"><i className="fab fa-twitter" />twitter</a></li>
                              <li className="animated" data-animate="fadeInUp" data-delay="1.35"><a href="#"><i className="fab fa-medium-m" />medium</a></li>
                              <li className="animated" data-animate="fadeInUp" data-delay="1.45"><a href="#"><i className="fab fa-github" />github</a></li>
                              <li className="animated" data-animate="fadeInUp" data-delay="1.55"><a href="#"><i className="fab fa-bitcoin" />bitcoin</a></li>
                          </ul>
                      </div>
                  </div>
              </div></div></div><div data-animate="fadeInUp" data-delay="1.65" className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-1 vc_col-lg-5 vc_col-md-6 vc_col-sm-offset-0 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
                  <div className="token-countdown-box">
                      <h4 className="small-text">Pre-Sale Ends In</h4>        <ul className="countdown-s2" data-zone={0} data-date="2021/11/09" data-days="Days" data-hours="Hours" data-mins="Minutes" data-secs="Seconds" data-day="Days" data-hour="Hours" data-min="Minute" data-sec="Second">
                      <li className="countdown-s2-item">
                          <span className="countdown-s2-time days countdown-time-first">00</span>
                          <span className="countdown-s2-text days_text">Days</span>
                      </li>
                      <li className="countdown-s2-item">
                          <span className="countdown-s2-time hours">00</span>
                          <span className="countdown-s2-text hours_text">Hours</span>
                      </li>
                      <li className="countdown-s2-item">
                          <span className="countdown-s2-time minutes">00</span>
                          <span className="countdown-s2-text minutes_text">Minutes</span>
                      </li>
                      <li className="countdown-s2-item">
                          <span className="countdown-s2-time seconds countdown-time-last">00</span>
                          <span className="countdown-s2-text seconds_text">Seconds</span>
                      </li>
                  </ul>
                      <div className="token-info">
                          <div className="token-info-item ">
                              <span>Token Price:</span>
                              <h4>1 ICOX=$0.02</h4>
                          </div>
                          <div className="token-info-item ">
                              <span>We Accept:</span>
                              <h4><em className="fab fa-ethereum" /> ETH</h4>
                          </div>
                          <div className="token-info-item d-sm-flex align-items-sm-center">
                              <span>Tokens Availablen <br className="d-none d-md-block" /> on Pre-Sale:</span>
                              <h4>90,000,000 ICOX</h4>
                          </div>
                      </div>
                      <div className="token-action">
                          <a className="btn btn-cCap" href="#" target="_self">Buy Tokens with 45% Off</a>            <div className="token-action-info">
                          <strong>Minimum Purchase:</strong>10,000 ICOX          </div>
                      </div>
                  </div>
              </div></div></div></div></div></div><div className="clearfix" /></section><section id="about" className="vc_row wpb_row vc_row-fluid section-pad section-bg-alt vc_row-o-equal-height vc_row-o-content-middle vc_row-flex"><div className="container"><div className="row"><div data-animate="fadeInUp" data-delay="0.1" className="res-m-btm wpb_column vc_column_container vc_col-sm-12 vc_col-md-5 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center   res-m-btm">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={810} height={810} src="wp-content/uploads/sites/29/2018/09/graph-salvia-a.png" className="vc_single_image-img attachment-full" alt="" loading="lazy" srcSet="http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/graph-salvia-a.png 810w, http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/graph-salvia-a-150x150.png 150w, http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/graph-salvia-a-300x300.png 300w, http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/graph-salvia-a-768x768.png 768w" sizes="(max-width: 810px) 100vw, 810px" /></div>
                  </figure>
              </div>
          </div></div></div><div className="order-lg-first wpb_column vc_column_container vc_col-sm-12 vc_col-md-7"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="text-block">
                          <h2 className="animated" data-animate="fadeInUp" data-delay=".1">About ICO Crypto</h2>
                          <p className="animated" data-animate="fadeInUp" data-delay=".2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                          <p className="animated" data-animate="fadeInUp" data-delay=".3">Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                      </div>
                      <div className="gaps size-1x" />
                  </div>
              </div>
              <div className="vc_row wpb_row vc_inner vc_row-fluid"><div data-animate="fadeInUp" data-delay="0.4" className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper">
                          <div className="icn-with-txt one">
                              <div className="icon fas fa-check" />
                              <p>Makes you the sole owner of a secure decentralize registry
                              </p></div>
                      </div>
                  </div>
              </div></div></div><div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper">
                          <div className="icn-with-txt two">
                              <div className="icon fas fa-check" />
                              <p>Makes you the sole owner of a secure decentralize registry
                              </p></div>
                      </div>
                  </div>
              </div></div></div><div data-animate="fadeInUp" data-delay="0.6" className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper">
                          <div className="icn-with-txt three">
                              <div className="icon fas fa-check" />
                              <p>Makes you the sole owner of a secure decentralize registry
                              </p></div>
                      </div>
                  </div>
              </div></div></div><div data-animate="fadeInUp" data-delay="0.7" className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper">
                          <div className="icn-with-txt four">
                              <div className="icon fas fa-check" />
                              <p>Makes you the sole owner of a secure decentralize registry
                              </p></div>
                      </div>
                  </div>
              </div></div></div></div></div></div></div></div></div><div className="clearfix" /></section><section id="overview" className="vc_row wpb_row vc_row-fluid section-pad section-bg vc_row-o-equal-height vc_row-o-content-middle vc_row-flex"><div className="container"><div className="row"><div data-animate="fadeInUp" data-delay="0.1" className="res-m-btm wpb_column vc_column_container vc_col-sm-12 vc_col-md-6 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center   res-m-btm">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={810} height={675} src="wp-content/uploads/sites/29/2018/09/graph-salvia-b.png" className="vc_single_image-img attachment-full" alt="" loading="lazy" srcSet="http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/graph-salvia-b.png 810w, http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/graph-salvia-b-300x250.png 300w, http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/graph-salvia-b-768x640.png 768w" sizes="(max-width: 810px) 100vw, 810px" /></div>
                  </figure>
              </div>
          </div></div></div><div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="text-block">
                          <h2 className="animated" data-animate="fadeInUp" data-delay=".2">Why?</h2>
                          <p className="animated" data-animate="fadeInUp" data-delay=".3">Tempor incididunt ut labore et dolore magna lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                          <h2 className="animated" data-animate="fadeInUp" data-delay=".4">Mission</h2>
                          <p className="animated" data-animate="fadeInUp" data-delay=".5">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                          <h2 className="animated" data-animate="fadeInUp" data-delay=".6">How?</h2>
                          <p className="animated" data-animate="fadeInUp" data-delay=".7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                      </div>
                  </div>
              </div>
          </div></div></div></div></div><div className="clearfix" /></section><section className="vc_row wpb_row vc_row-fluid section-pad section-bg-alt nopb"><div className="container"><div className="row"><div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <div className="section-head-s8">
                          <h2 className="section-title-s8 animated" data-animate="fadeInUp" data-delay=".1">Problems</h2>
                          <p className="lead animated" data-animate="fadeInUp" data-delay=".2">On the global marketplace</p>
                      </div>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.3" className="res-m-bttm-lg wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1536822273472">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img className="vc_single_image-img " src="wp-content/uploads/sites/29/2018/09/problem-icon-a-90x90.png" width={90} height={90} alt="problem-icon-a" title="problem-icon-a" /></div>
                  </figure>
              </div>
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <h5>No World Wide Platform:</h5>
                      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.4" className="res-m-bttm-lg wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1536822692817">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img className="vc_single_image-img " src="wp-content/uploads/sites/29/2018/09/problem-icon-b-90x90.png" width={90} height={90} alt="problem-icon-b" title="problem-icon-b" /></div>
                  </figure>
              </div>
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <h5>No Safe Transactions:</h5>
                      <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid eos qui ratione voluptatem sequi nesciunt.</p>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-offset-0 vc_col-md-offset-0 vc_col-md-4 vc_col-sm-offset-3 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1536822725902">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img className="vc_single_image-img " src="wp-content/uploads/sites/29/2018/09/problem-icon-c-90x90.png" width={90} height={90} alt="problem-icon-c" title="problem-icon-c" /></div>
                  </figure>
              </div>
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <h5>No Global Payment Systems:</h5>
                      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris fugiat runull dolore magna.</p>
                  </div>
              </div>
          </div></div></div></div></div><div className="clearfix" /></section><section className="vc_row wpb_row vc_row-fluid section-pad section-bg-alt"><div className="container"><div className="row"><div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <div className="section-head-s8">
                          <h2 className="section-title-s8 animated" data-animate="fadeInUp" data-delay=".1">Solutions</h2>
                          <p className="lead animated" data-animate="fadeInUp" data-delay=".2">Our method and vision</p>
                      </div>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.3" className="res-m-bttm-lg wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1536822788550">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img className="vc_single_image-img " src="wp-content/uploads/sites/29/2018/09/solution-icon-a-90x90.png" width={90} height={90} alt="solution-icon-a" title="solution-icon-a" /></div>
                  </figure>
              </div>
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <h5>Global Single-Platform:</h5>
                      <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid eos qui ratione voluptatem sequi nesciunt.</p>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.4" className="res-m-bttm-lg wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1536822797818">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img className="vc_single_image-img " src="wp-content/uploads/sites/29/2018/09/solution-icon-b-90x90.png" width={90} height={90} alt="solution-icon-b" title="solution-icon-b" /></div>
                  </figure>
              </div>
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <h5>Be Safe and Secure:</h5>
                      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-offset-0 vc_col-md-offset-0 vc_col-md-4 vc_col-sm-offset-3 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1536822805191">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img className="vc_single_image-img " src="wp-content/uploads/sites/29/2018/09/solution-icon-c-90x90.png" width={90} height={90} alt="solution-icon-c" title="solution-icon-c" /></div>
                  </figure>
              </div>
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <h5>Decentralize Payment Systems</h5>
                      <p>Empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris fugiat nulla sed do eiusmod.</p>
                  </div>
              </div>
          </div></div></div></div></div><div className="clearfix" /></section><section className="vc_row wpb_row vc_row-fluid section-pad overlay-shape section-bg-salvia"><div className="container"><div className="row"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <h1 className="animated" data-animate="fadeInUp" data-delay=".1">The main issue</h1>
                      <h3 className="animated" data-animate="fadeInUp" data-delay=".2">of decentralizing decision-making and transparency and reliability</h3>
                      <p className="lead animated" data-animate="fadeInUp" data-delay=".3">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum <br className="d-none d-lg-block" />deleniti atque corrupti quos dolores et quas molestias.</p>
                  </div>
              </div>
          </div></div></div></div></div><div className="clearfix" /></section><section id="how" className="vc_row wpb_row vc_row-fluid section-pad section-bg text-center"><div className="container"><div className="row"><div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-offset-4 vc_col-md-4 vc_col-sm-offset-3"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="section-head-s8">
                          <h2 className="section-title-s8 animated" data-animate="fadeInUp" data-delay=".1">How it works</h2>
                          <p className="lead animated" data-animate="fadeInUp" data-delay=".2">Our Ecosystem based on blockchain and we solved issues of current and future</p>
                      </div>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.3" className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-2 vc_col-md-8 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="slider-dot">
                  <div className="slider-dot-item owl-dots"><em className="ikon ikon-paricle" /></div>
                  <div className="slider-dot-item owl-dots"><em className="ikon ikon-connect" /></div>
                  <div className="slider-dot-item owl-dots"><em className="ikon ikon-target" /></div>
                  <div className="slider-dot-item owl-dots"><em className="ikon ikon-shiled-alt" /></div>
                  <div className="slider-dot-item owl-dots"><em className="ikon ikon-data-server" /></div>
              </div>
              <div className="gaps size-2x" />
              <div className="slider-pane">
                  <div className="slider-pane-item pane-item-1">
                      <h5 className="animate-up delay-5ms">Build blockchain algotrading models</h5>
                      <p className="animate-up delay-6ms">This makes it much easier for both quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliqu am quaerat voluptatem. Numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat volup  tatem. Ut enim ad minima veniam, quis nostrum exercitation em ullam corporis suscipit laboriosam.<br /><br />
                          We will establish an incentivizing mechanism numquam eius modi tempora, incidunt ut labore et dolore magnam aliquam quaerat volup  tatem.</p>
                  </div>
                  <div className="slider-pane-item pane-item-1">
                      <h5 className="animate-up delay-5ms">Connect with others blockchain mod.</h5>
                      <p className="animate-up delay-6ms">This makes it much easier for both quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliqu am quaerat voluptatem. Numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat volup  tatem. Ut enim ad minima veniam, quis nostrum exercitation em ullam corporis suscipit laboriosam.<br /><br />
                          We will establish an incentivizing mechanism numquam eius modi tempora, incidunt ut labore et dolore magnam aliquam quaerat volup  tatem.</p>
                  </div>
                  <div className="slider-pane-item pane-item-1">
                      <h5 className="animate-up delay-5ms">Target your goal to reach out.</h5>
                      <p className="animate-up delay-6ms">This makes it much easier for both quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliqu am quaerat voluptatem. Numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat volup  tatem. Ut enim ad minima veniam, quis nostrum exercitation em ullam corporis suscipit laboriosam.<br /><br />
                          We will establish an incentivizing mechanism numquam eius modi tempora, incidunt ut labore et dolore magnam aliquam quaerat volup  tatem.</p>
                  </div>
                  <div className="slider-pane-item pane-item-1">
                      <h5 className="animate-up delay-5ms">Protect your blockchain models.</h5>
                      <p className="animate-up delay-6ms">This makes it much easier for both quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliqu am quaerat voluptatem. Numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat volup  tatem. Ut enim ad minima veniam, quis nostrum exercitation em ullam corporis suscipit laboriosam.<br /><br />
                          We will establish an incentivizing mechanism numquam eius modi tempora, incidunt ut labore et dolore magnam aliquam quaerat volup  tatem.</p>
                  </div>
                  <div className="slider-pane-item pane-item-1">
                      <h5 className="animate-up delay-5ms">Make transaction easy and with a less fee.</h5>
                      <p className="animate-up delay-6ms">This makes it much easier for both quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliqu am quaerat voluptatem. Numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat volup  tatem. Ut enim ad minima veniam, quis nostrum exercitation em ullam corporis suscipit laboriosam.<br /><br />
                          We will establish an incentivizing mechanism numquam eius modi tempora, incidunt ut labore et dolore magnam aliquam quaerat volup  tatem.</p>
                  </div>
              </div>
          </div></div></div></div></div><div className="clearfix" /></section><section className="vc_row wpb_row vc_row-fluid section-pad section-bg-alt vc_row-o-equal-height vc_row-o-content-middle vc_row-flex"><div className="container"><div className="row"><div data-animate="fadeInUp" data-delay="0.1" className="res-m-btm wpb_column vc_column_container vc_col-sm-12 vc_col-md-7 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={960} height={816} src="wp-content/uploads/sites/29/2018/09/screenshoot-a.png" className="vc_single_image-img attachment-full" alt="" loading="lazy" srcSet="http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/screenshoot-a.png 960w, http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/screenshoot-a-300x255.png 300w, http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/screenshoot-a-768x653.png 768w" sizes="(max-width: 960px) 100vw, 960px" /></div>
                  </figure>
              </div>
          </div></div></div><div className="order-md-first wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-4"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="text-block">
                          <h2 className="animated" data-animate="fadeInUp" data-delay=".2">Introducing ICO Usercenter</h2>
                          <p className="animated" data-animate="fadeInUp" data-delay=".3">First of we release our major update with usercenter design which is most important part of ICO Token Sales management. It allows to manage whole process of tokens sales.</p>
                      </div>
                  </div>
              </div>
          </div></div></div><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner vc_custom_1536825643278"><div className="wpb_wrapper"><div className="vc_row wpb_row vc_inner vc_row-fluid"><div className="res-m-bttm wpb_column vc_column_container vc_col-sm-6 vc_col-md-3"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="icn-with-txt one with-bg with-border animated" data-animate="fadeInUp" data-delay=".4">
                          <div className="icon fas fa-check" />
                          <div className="txt">Safe &amp; Secure Transactions</div>
                      </div>
                  </div>
              </div>
          </div></div></div><div className="res-m-bttm wpb_column vc_column_container vc_col-sm-6 vc_col-md-3"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="icn-with-txt two with-bg with-border animated" data-animate="fadeInUp" data-delay=".5">
                          <div className="icon fas fa-check" />
                          <div className="txt">Encrypted and Kept Private</div>
                      </div>
                  </div>
              </div>
          </div></div></div><div className="res-m-bttm wpb_column vc_column_container vc_col-sm-6 vc_col-md-3"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="icn-with-txt three with-bg with-border animated" data-animate="fadeInUp" data-delay=".6">
                          <div className="icon fas fa-check" />
                          <div className="txt">Multiple Payment Gateway</div>
                      </div>
                  </div>
              </div>
          </div></div></div><div className="res-m-bttm wpb_column vc_column_container vc_col-sm-6 vc_col-md-3"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="icn-with-txt four with-bg with-border animated" data-animate="fadeInUp" data-delay=".7">
                          <div className="icon fas fa-check" />
                          <div className="txt">KYC Verification</div>
                      </div>
                  </div>
              </div>
          </div></div></div></div></div></div></div></div></div><div className="clearfix" /></section><section id="tokens" className="vc_row wpb_row vc_row-fluid section-pad section-bg-salvia bg-fixed-pattern nopb text-center overflow-alt-s"><div className="container"><div className="row"><div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="section-head-s8">
                          <h2 className="section-title-s8 animated" data-animate="fadeInUp" data-delay=".1">ICO Crypto <br className="d-none d-lg-block" />Token Economics</h2>
                          <p className="lead animated" data-animate="fadeInUp" data-delay=".2">Our initial coin offering will run till softcap reached. Full details of the ICO can be found within the platform.</p>
                      </div>
                  </div>
              </div>
          </div></div></div><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner "><div className="wpb_wrapper"><div className="vc_row wpb_row vc_inner vc_row-fluid"><div data-animate="fadeInUp" data-delay="0.3" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="token-sale-box">
                  <span className="token-sale-info">24,000,000</span>
                  <span className="token-sale-title">TOTAL TOKEN SUPPLY</span>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.4" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="token-sale-box">
                  <span className="token-sale-info">20,000,000</span>
                  <span className="token-sale-title">HARDCAP (ICOX)</span>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="token-sale-box">
                  <span className="token-sale-info">5,000,000</span>
                  <span className="token-sale-title">SOFTCAP (ICOX)</span>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.6" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="token-sale-box">
                  <span className="token-sale-info">14,400,000</span>
                  <span className="token-sale-title">TOKENS FOR PUBLIC</span>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.7" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="token-sale-box">
                  <span className="token-sale-info">$0.50 USD</span>
                  <span className="token-sale-title">ICO TOKEN PRICE</span>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.8" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="token-sale-box">
                  <span className="token-sale-info">ETH, BTC, USD</span>
                  <span className="token-sale-title">ACCEPTED CURRENCY</span>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.1" className="wpb_column vc_column_container vc_col-sm-12 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="gaps size-2x" />
                      <div className="gaps size-2x d-none d-lg-block" />
                      <h2 className="sub-heading">Bonus Details</h2>
                      <div className="gaps" />
                  </div>
              </div>
          </div></div></div></div></div></div></div><div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-10"><div className="vc_column-inner "><div className="wpb_wrapper"><div className="vc_row wpb_row vc_inner vc_row-fluid justify-content-center"><div data-animate="fadeInUp" data-delay="0.2" className="wpb_column vc_column_container vc_col-sm-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  vc_custom_1536914139535">
                  <div className="wpb_wrapper">
                      <div className="token-bonus-item one"><span className="token-bonus-title">PRE-SALE</span><br />
                          <span className="token-bonus-percent">25%</span><br />
                          <span className="token-bonus-txt">Bonus</span></div>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.3" className="wpb_column vc_column_container vc_col-sm-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  vc_custom_1536914144508">
                  <div className="wpb_wrapper">
                      <div className="token-bonus-item two"><span className="token-bonus-title">ICO SALE-WEEK 1</span><br />
                          <span className="token-bonus-percent">15%</span><br />
                          <span className="token-bonus-txt">Bonus</span></div>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.4" className="wpb_column vc_column_container vc_col-sm-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  vc_custom_1536914149204">
                  <div className="wpb_wrapper">
                      <div className="token-bonus-item three"><span className="token-bonus-title">ICO SALE-WEEK 2</span><br />
                          <span className="token-bonus-percent">0%</span><br />
                          <span className="token-bonus-txt">Bonus</span></div>
                  </div>
              </div>
          </div></div></div><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="gaps size-1x" />
                      <div className="gaps size-2x d-none d-sm-block" />
                      <div className="text-center animated" data-animate="fadeInUp" data-delay=".5"><a className="btn btn-lg" href="#">Buy ICO Crypto Tokens Now</a></div>
                      <div className="gaps size-4x" />
                      <div className="gaps size-2x d-none d-sm-block" />
                  </div>
              </div>
          </div></div></div></div></div></div></div><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner "><div className="wpb_wrapper"><div className="vc_row wpb_row vc_inner vc_row-fluid"><div data-animate="fadeInUp" data-delay="0.6" className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="token-alocate-item first">
                  <div className="token-alocate-graph">
                      <img src="wp-content/uploads/sites/29/2018/09/chart-salvia-a.png" alt="chart" />
                      <span>Token Allocation</span>
                  </div>
                  <ul className="token-alocate-list">
                      <li>
                          <span className="token-alocate-color" style={{background: '#6d6af6'}} />
                          <span className="token-alocate-title">Token Sale Program</span>
                          <span className="token-alocate-percent">60%</span>
                      </li>
                      <li>
                          <span className="token-alocate-color" style={{background: '#f0a561'}} />
                          <span className="token-alocate-title">Reserve Fund</span>
                          <span className="token-alocate-percent">8%</span>
                      </li>
                      <li>
                          <span className="token-alocate-color" style={{background: ''}} />
                          <span className="token-alocate-title">Team and Founders</span>
                          <span className="token-alocate-percent">15%</span>
                      </li>
                      <li>
                          <span className="token-alocate-color" style={{background: '#7adac9'}} />
                          <span className="token-alocate-title">Board Advisors</span>
                          <span className="token-alocate-percent">4%</span>
                      </li>
                      <li>
                          <span className="token-alocate-color" style={{background: '#7654e1'}} />
                          <span className="token-alocate-title">Ecosystem Development</span>
                          <span className="token-alocate-percent">7%</span>
                      </li>
                      <li>
                          <span className="token-alocate-color" style={{background: '#371e8d'}} />
                          <span className="token-alocate-title">Marketing and Bounty</span>
                          <span className="token-alocate-percent">6%</span>
                      </li>
                  </ul>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.7" className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="token-alocate-item ">
                  <div className="token-alocate-graph">
                      <img src="wp-content/uploads/sites/29/2018/09/chart-salvia-b.png" alt="chart" />
                      <span>Funds Allocation</span>
                  </div>
                  <ul className="token-alocate-list">
                      <li>
                          <span className="token-alocate-color" style={{background: '#371e8d'}} />
                          <span className="token-alocate-title">Engineering and Development</span>
                          <span className="token-alocate-percent">40%</span>
                      </li>
                      <li>
                          <span className="token-alocate-color" style={{background: '#7654e1'}} />
                          <span className="token-alocate-title">Business Development</span>
                          <span className="token-alocate-percent">12%</span>
                      </li>
                      <li>
                          <span className="token-alocate-color" style={{background: '#7adac9'}} />
                          <span className="token-alocate-title">Marketing &amp; Promotion</span>
                          <span className="token-alocate-percent">20%</span>
                      </li>
                      <li>
                          <span className="token-alocate-color" style={{background: ''}} />
                          <span className="token-alocate-title">Legal &amp; Regulation</span>
                          <span className="token-alocate-percent">10%</span>
                      </li>
                      <li>
                          <span className="token-alocate-color" style={{background: '#f0a561'}} />
                          <span className="token-alocate-title">Operational &amp; Administration</span>
                          <span className="token-alocate-percent">8%</span>
                      </li>
                      <li>
                          <span className="token-alocate-color" style={{background: '#da6bc1'}} />
                          <span className="token-alocate-title">Contingency</span>
                          <span className="token-alocate-percent">4%</span>
                      </li>
                      <li>
                          <span className="token-alocate-color" style={{background: '#6d6af6'}} />
                          <span className="token-alocate-title">Partners</span>
                          <span className="token-alocate-percent">6%</span>
                      </li>
                  </ul>
              </div>
          </div></div></div></div></div></div></div></div></div><div className="clearfix" /></section><section id="documents" className="vc_row wpb_row vc_row-fluid section-pad section-bg-alt"><div className="container"><div className="row"><div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <div className="section-head-s8">
                          <h2 className="section-title-s8 animated" data-animate="fadeInUp" data-delay=".1">Documentation</h2>
                          <p className="lead animated" data-animate="fadeInUp" data-delay=".2">Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.</p>
                      </div>
                  </div>
              </div>
          </div></div></div><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner "><div className="wpb_wrapper"><div className="vc_row wpb_row vc_inner vc_row-fluid"><div data-animate="fadeInUp" data-delay="0.3" className="res-m-btm wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="document-item-s2 ">
                  <div className="document-img-s2">
                      <img src="wp-content/uploads/sites/29/2018/09/document-a.jpg" alt="doc" />
                  </div>
                  <div className="document-text">
                      <span className="document-info">White Paper (PDF)</span>
                      <div className="document-dropdown">
                          <a href="#" data-toggle="dropdown" className="document-link"><em className="ti ti-import" /></a>
                      </div>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.4" className="res-m-btm wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="document-item-s2 ">
                  <div className="document-img-s2">
                      <img src="wp-content/uploads/sites/29/2018/09/document-b.jpg" alt="doc" />
                  </div>
                  <div className="document-text">
                      <span className="document-info">One Pager (PDF)</span>
                      <div className="document-dropdown">
                          <a href="#" data-toggle="dropdown" className="document-link"><em className="ti ti-import" /></a>
                      </div>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.5" className="res-m-btm wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="document-item-s2 ">
                  <div className="document-img-s2">
                      <img src="wp-content/uploads/sites/29/2018/09/document-c.jpg" alt="doc" />
                  </div>
                  <div className="document-text">
                      <span className="document-info">Terms of Sales (PDF)</span>
                      <div className="document-dropdown">
                          <a href="#" data-toggle="dropdown" className="document-link"><em className="ti ti-import" /></a>
                      </div>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.6" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="document-item-s2 ">
                  <div className="document-img-s2">
                      <img src="wp-content/uploads/sites/29/2018/09/document-d.jpg" alt="doc" />
                  </div>
                  <div className="document-text">
                      <span className="document-info">Privacy &amp; Policy (PDF)</span>
                      <div className="document-dropdown">
                          <a href="#" data-toggle="dropdown" className="document-link"><em className="ti ti-import" /></a>
                      </div>
                  </div>
              </div>
          </div></div></div></div></div></div></div></div></div><div className="clearfix" /></section><section id="roadmap" className="vc_row wpb_row vc_row-fluid section-pad section-bg"><div className="container"><div className="row"><div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <div className="section-head-s8">
                          <h2 className="section-title-s8 animated" data-animate="fadeInUp" data-delay=".1">Roadmap</h2>
                          <p className="lead animated" data-animate="fadeInUp" data-delay=".2">Our roadmap is a planned where we take on the most complex problems and turn them into great solutions</p>
                      </div>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.3" className="wpb_column vc_column_container vc_col-sm-12 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="roadmap-carousel-container">
                  <div className="roadmap-carousel">
                      <div className="roadmap-item roadmap-done">
                          <h6>March 2018</h6>
                          <p>Start of the ICO Crypto Platform Development.</p>
                      </div>
                      <div className="roadmap-item roadmap-done">
                          <h6>April 2018</h6>
                          <p>Start of the Preparation for the ICO Token Sale</p>
                      </div>
                      <div className="roadmap-item  roadmap-active">
                          <h6>October 2018</h6>
                          <p>ICO Platform Launched with full solutions</p>
                      </div>
                      <div className="roadmap-item ">
                          <h6>January 2019</h6>
                          <p>Partnership for the future EcoSystem</p>
                      </div>
                      <div className="roadmap-item ">
                          <h6>June 2019</h6>
                          <p>ICO Wallet full version release</p>
                      </div>
                      <div className="roadmap-item ">
                          <h6>December 2019</h6>
                          <p>The firest product ready to goes live to all business</p>
                      </div>
                      <div className="roadmap-item ">
                          <h6>March 2018</h6>
                          <p>Start of the ICO Crypto Platform Development.</p>
                      </div>
                      <div className="roadmap-item ">
                          <h6>April 2018</h6>
                          <p>Start of the Preparation for the ICO Token Sale</p>
                      </div>
                  </div>
              </div>
          </div></div></div></div></div><div className="clearfix" /></section><section className="vc_row wpb_row vc_row-fluid section-pad overlay-shape section-bg-salvia"><div className="container"><div className="row"><div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <div className="section-head-s8">
                          <h2 className="section-title-s8 animated" data-animate="fadeInUp" data-delay=".1">Beta Products</h2>
                          <p className="lead animated" data-animate="fadeInUp" data-delay=".2">ICO Backend is the ICO token sales management software, which helps you to lunch and mange your ICO.</p>
                      </div>
                  </div>
              </div>
          </div></div></div><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner "><div className="wpb_wrapper"><div className="vc_row wpb_row vc_inner vc_row-fluid"><div data-animate="fadeInUp" data-delay="0.3" className="res-m-btm wpb_column vc_column_container vc_col-sm-6 vc_col-md-offset-1 vc_col-md-5 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center   product-box">
                  <h2 className="wpb_heading wpb_singleimage_heading">USER DASHBOARD</h2>
                  <figure className="wpb_wrapper vc_figure">
                      <a href="#" target="_blank" className="vc_single_image-wrapper   vc_box_border_grey"><img width={530} height={258} src="wp-content/uploads/sites/29/2018/09/product-a-1.jpg" className="vc_single_image-img attachment-full" alt="" loading="lazy" srcSet="http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/product-a-1.jpg 530w, http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/product-a-1-300x146.jpg 300w" sizes="(max-width: 530px) 100vw, 530px" /></a>
                  </figure>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.4" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-5 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center   product-box">
                  <h2 className="wpb_heading wpb_singleimage_heading">ADMIN DASHBOARD</h2>
                  <figure className="wpb_wrapper vc_figure">
                      <a href="#" target="_blank" className="vc_single_image-wrapper   vc_box_border_grey"><img width={530} height={258} src="wp-content/uploads/sites/29/2018/09/product-b.jpg" className="vc_single_image-img attachment-full" alt="" loading="lazy" srcSet="http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/product-b.jpg 530w, http://wpdemo.oceanthemes.net/icos-salvia/wp-content/uploads/sites/29/2018/09/product-b-300x146.jpg 300w" sizes="(max-width: 530px) 100vw, 530px" /></a>
                  </figure>
              </div>
          </div></div></div></div></div></div></div></div></div><div className="clearfix" /></section><section id="team" className="vc_row wpb_row vc_row-fluid section-pad section-bg section-fix-lg"><div className="container"><div className="row"><div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                      <div className="section-head-s8">
                          <h2 className="section-title-s8 animated" data-animate="fadeInUp" data-delay=".1">Team</h2>
                      </div>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.2" className="wpb_column vc_column_container vc_col-sm-12 animated"><div className="vc_column-inner "><div className="wpb_wrapper"><h3 style={{textAlign: 'center'}} className="vc_custom_heading vc_custom_1537168521044">Core Team Member</h3><div className="vc_row wpb_row vc_inner vc_row-fluid"><div data-animate="fadeInUp" data-delay="0.3" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="team-item">
                  <div className="team-img">
                      <img src="wp-content/uploads/sites/29/2018/09/team-a-lg.jpg" alt="team" />
                      <span data-mfp-src="http://wpdemo.oceanthemes.net/icos-salvia/team/louis-baker/" className="expand-trigger content-popup" />            <ul className="team-sprofile">
                      <li><a target="_blank" href="#"><em className="fa fa-linkedin" /></a></li>
                      <li><a target="_blank" href="#"><em className="fa fa-facebook" /></a></li>
                  </ul>
                  </div>
                  <h5 className="team-intro">Louis Baker</h5>
                  <span className="team-position">CEO &amp; Lead Blockchain</span>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.4" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="team-item">
                  <div className="team-img">
                      <img src="wp-content/uploads/sites/29/2018/09/team-b-lg.jpg" alt="team" />
                      <span data-mfp-src="http://wpdemo.oceanthemes.net/icos-salvia/team/jonathan-rios/" className="expand-trigger content-popup" />            <ul className="team-sprofile">
                      <li><a target="_blank" href="#"><em className="fa fa-linkedin" /></a></li>
                      <li><a target="_blank" href="#"><em className="fa fa-twitter" /></a></li>
                  </ul>
                  </div>
                  <h5 className="team-intro">Jonathan Rios</h5>
                  <span className="team-position">CTO &amp; Software Engineer</span>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="team-item">
                  <div className="team-img">
                      <img src="wp-content/uploads/sites/29/2018/09/team-c-lg.jpg" alt="team" />
                      <span data-mfp-src="http://wpdemo.oceanthemes.net/icos-salvia/team/jason-morales/" className="expand-trigger content-popup" />            <ul className="team-sprofile">
                      <li><a target="_blank" href="#"><em className="fa fa-linkedin" /></a></li>
                  </ul>
                  </div>
                  <h5 className="team-intro">Jason Morales</h5>
                  <span className="team-position">Sr.Backend developer</span>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.6" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="team-item">
                  <div className="team-img">
                      <img src="wp-content/uploads/sites/29/2018/09/team-d-lg.jpg" alt="team" />
                      <span data-mfp-src="http://wpdemo.oceanthemes.net/icos-salvia/team/joseph-jordan/" className="expand-trigger content-popup" />            <ul className="team-sprofile">
                      <li><a target="_blank" href="#"><em className="fa fa-linkedin" /></a></li>
                  </ul>
                  </div>
                  <h5 className="team-intro">Joseph Jordan</h5>
                  <span className="team-position">Software Engineer</span>
              </div>
          </div></div></div></div>
              <div className="wpb_text_column wpb_content_element  vc_custom_1537430521574 text-center">
                  <div className="wpb_wrapper">
                      <h3 className="sub-heading animated" data-animate="fadeInUp" data-delay=".7">Board Advisor</h3>
                  </div>
              </div>
          </div></div></div><div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-10"><div className="vc_column-inner "><div className="wpb_wrapper"><div className="vc_row wpb_row vc_inner vc_row-fluid"><div data-animate="fadeInUp" data-delay="0.8" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="team-item">
                  <div className="team-img">
                      <img src="wp-content/uploads/sites/29/2018/09/team-c-lg.jpg" alt="team" />
                      <ul className="team-sprofile">
                          <li><a target="_blank" href="#"><em className="fa fa-linkedin" /></a></li>
                      </ul>
                  </div>
                  <h5 className="team-intro">Patrick Harper</h5>
                  <span className="team-position">Board Advisor</span>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.9" className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="team-item">
                  <div className="team-img">
                      <img src="wp-content/uploads/sites/29/2018/09/team-f-lg.jpg" alt="team" />
                      <ul className="team-sprofile">
                          <li><a target="_blank" href="#"><em className="fa fa-linkedin" /></a></li>
                      </ul>
                  </div>
                  <h5 className="team-intro">Richard Simmons</h5>
                  <span className="team-position">Technical Advisor</span>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay={1} className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-offset-0 vc_col-md-4 vc_col-sm-offset-3 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="team-item">
                  <div className="team-img">
                      <img src="wp-content/uploads/sites/29/2018/09/team-g-lg.jpg" alt="team" />
                      <ul className="team-sprofile">
                          <li><a target="_blank" href="#"><em className="fa fa-linkedin" /></a></li>
                      </ul>
                  </div>
                  <h5 className="team-intro">Alexander Brooks</h5>
                  <span className="team-position">Board Advisor</span>
              </div>
          </div></div></div></div></div></div></div></div></div><div className="clearfix" /></section><section id="faqs" className="vc_row wpb_row vc_row-fluid section-pad section-bg-alt"><div className="container"><div className="row"><div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-4"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="section-head-s8">
                          <h2 className="section-title-s8 animated" data-animate="fadeInUp" data-delay=".1">FAQs</h2>
                          <p className="lead animated" data-animate="fadeInUp" data-delay=".2">Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others. If you have any other questions, please get in touch via email.</p>
                      </div>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.3" className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-7 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="accordion-s2" id="accordion-472">
                  <div className="card">
                      <div className="card-header">
                          <h5>
                              <a data-toggle="collapse" data-target="#collapse-751">
                                  What is ICO Crypto?<span className="plus-minus"><span className="ti ti-angle-up" /></span>
                              </a>
                          </h5>
                      </div>
                      <div id="collapse-751" className="collapse show" data-parent="#accordion-472">
                          <div className="card-body">
                              <p>ICO Crypto - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-header">
                          <h5>
                              <a className="collapsed" data-toggle="collapse" data-target="#collapse-752">
                                  What cryptocurrencies can I use to purchase?<span className="plus-minus"><span className="ti ti-angle-up" /></span>
                              </a>
                          </h5>
                      </div>
                      <div id="collapse-752" className="collapse " data-parent="#accordion-472">
                          <div className="card-body">
                              <p>ICO Crypto - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-header">
                          <h5>
                              <a className="collapsed" data-toggle="collapse" data-target="#collapse-753">
                                  How can I participate in the ICO Token sale?<span className="plus-minus"><span className="ti ti-angle-up" /></span>
                              </a>
                          </h5>
                      </div>
                      <div id="collapse-753" className="collapse " data-parent="#accordion-472">
                          <div className="card-body">
                              <p>ICO Crypto - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-header">
                          <h5>
                              <a className="collapsed" data-toggle="collapse" data-target="#collapse-754">
                                  How do I benefit from the ICO Token?<span className="plus-minus"><span className="ti ti-angle-up" /></span>
                              </a>
                          </h5>
                      </div>
                      <div id="collapse-754" className="collapse " data-parent="#accordion-472">
                          <div className="card-body">
                              <p>ICO Crypto - is unique platform; that is secure, smart and easy-to-use platform, and completely disrupting the way businesses raise capital.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div></div></div></div></div><div className="clearfix" /></section><section id="contact" className="vc_row wpb_row vc_row-fluid section-pad section-bg"><div className="container"><div className="row"><div className="res-m-bttm wpb_column vc_column_container vc_col-sm-12 vc_col-md-4"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                      <div className="section-head-s6">
                          <h2 className="section-title-s8 animated" data-animate="fadeInUp" data-delay=".1">Get In Touch</h2>
                          <p className="lead animated" data-animate="fadeInUp" data-delay=".2">Any question? Reach out to us and we’ll get back to you shortly.</p>
                      </div>
                      <ul className="contact-info-alt">
                          <li className="animated" data-animate="fadeInUp" data-delay=".3"><i className="fa fa-phone" />+44 0123 4567</li>
                          <li className="animated" data-animate="fadeInUp" data-delay=".4"><i className="fa fa-envelope" />info@yourcompany.com</li>
                          <li className="animated" data-animate="fadeInUp" data-delay=".5"><i className="fa fa-paper-plane" />Join us on Telegram</li>
                      </ul>
                  </div>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.6" className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-7 animated"><div className="vc_column-inner "><div className="wpb_wrapper"><div role="form" className="wpcf7" id="wpcf7-f387-p891-o1" lang="en-US" dir="ltr">
              <div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true" /> <ul /></div>
              <form action="http://wpdemo.oceanthemes.net/icos-salvia/#wpcf7-f387-p891-o1" method="post" className="wpcf7-form init" data-status="init">
                  <div style={{display: 'none'}}>
                      <input type="hidden" name="_wpcf7" defaultValue={387} />
                      <input type="hidden" name="_wpcf7_version" defaultValue="5.4.1" />
                      <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                      <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f387-p891-o1" />
                      <input type="hidden" name="_wpcf7_container_post" defaultValue={891} />
                      <input type="hidden" name="_wpcf7_posted_data_hash" />
                  </div>
                  <div className="comment-form form-message-s2 form-message-s3 show-error-hint text-left">
                      <div className="form-results" />
                      <div className="input-field">
                          <span className="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-border" aria-required="true" aria-invalid="false" placeholder="Your Name" /></span>
                      </div>
                      <div className="input-field">
                          <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email input-border" aria-required="true" aria-invalid="false" placeholder="Your Email" /></span>
                      </div>
                      <div className="input-field">
                          <span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea input-border txtarea" aria-invalid="false" placeholder="Your Message" defaultValue={""} /></span>
                      </div>
                      <div className="input-field">
                          <button type="submit" className="btn">Submit</button>
                      </div>
                  </div>
                  <div className="wpcf7-response-output" aria-hidden="true" /></form></div></div></div></div></div></div><div className="clearfix" /></section><section className="vc_row wpb_row vc_row-fluid section-pad-sm partner-section section-bg-alt text-center"><div className="container"><div className="row"><div data-animate="fadeInUp" data-delay="0.1" className="wpb_column vc_column_container vc_col-sm-12 animated"><div className="vc_column-inner "><div className="wpb_wrapper"><h4 style={{textAlign: 'center'}} className="vc_custom_heading vc_custom_1537178660653">Our Partners</h4><div className="vc_row wpb_row vc_inner vc_row-fluid"><div data-animate="fadeInUp" data-delay="0.2" className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-2 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={160} height={60} src="wp-content/uploads/sites/29/2018/03/partner-xs-a-7-4.png" className="vc_single_image-img attachment-full" alt="" loading="lazy" /></div>
                  </figure>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.3" className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-2 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={160} height={60} src="wp-content/uploads/sites/29/2018/03/partner-xs-b-7-4.png" className="vc_single_image-img attachment-full" alt="" loading="lazy" /></div>
                  </figure>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.4" className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-2 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={160} height={60} src="wp-content/uploads/sites/29/2018/03/partner-xs-c-7-4.png" className="vc_single_image-img attachment-full" alt="" loading="lazy" /></div>
                  </figure>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-2 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={160} height={60} src="wp-content/uploads/sites/29/2018/03/partner-xs-d-7-4.png" className="vc_single_image-img attachment-full" alt="" loading="lazy" /></div>
                  </figure>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.6" className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-2 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={190} height={60} src="wp-content/uploads/sites/29/2018/03/partner-sm-b-7-4.png" className="vc_single_image-img attachment-full" alt="" loading="lazy" /></div>
                  </figure>
              </div>
          </div></div></div><div data-animate="fadeInUp" data-delay="0.7" className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-2 animated"><div className="vc_column-inner "><div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center">
                  <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={190} height={60} src="wp-content/uploads/sites/29/2018/03/partner-sm-d-7-4.png" className="vc_single_image-img attachment-full" alt="" loading="lazy" /></div>
                  </figure>
              </div>
          </div></div></div></div></div></div></div></div></div><div className="clearfix" /></section>
              <div className="section footer-section footer-particle section-pad-sm section-bg-dark footer-salvia section-bg-salvia overlay-shape">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-3 res-m-bttm">
                              <div id="custom_html-5" className="widget_text widget footer-widget widget_custom_html"><h6 className="widget-title">FEATURES</h6><div className="textwidget custom-html-widget"><ul className="widget-list">
                                  <li>ICO Crypto <br /> Company Number ALX455</li>
                                  <li>2237 Gnatty Creek Road <br /> Huntington, NY 11743</li>
                              </ul></div></div>	</div>{/* end col-lg-3 */}
                          <div className="col-lg-3 res-m-bttm">
                              <div id="custom_html-2" className="widget_text widget footer-widget widget_custom_html"><h6 className="widget-title">RESOURCES</h6><div className="textwidget custom-html-widget"> <ul className="widget-links">
                                  <li><a href="#">Whitepaper</a></li>
                                  <li><a href="#">One Pager</a></li>
                                  <li><a href="#">Market Research</a></li>
                              </ul></div></div>	</div>{/* end col-lg-3 */}
                          <div className="col-lg-3 res-m-bttm">
                              <div id="custom_html-3" className="widget_text widget footer-widget widget_custom_html"><h6 className="widget-title">COMPANY</h6><div className="textwidget custom-html-widget"><ul className="widget-links">
                                  <li><a href="#">Home</a></li>
                                  <li><a href="#">Tokens</a></li>
                                  <li><a href="#">Team</a></li>
                                  <li><a href="#">Roadmap</a></li>
                              </ul></div></div>	</div>{/* end col-lg-3 */}
                          <div className="col-lg-3 res-m-bttm">
                              <div id="custom_html-4" className="widget_text widget footer-widget widget_custom_html"><div className="textwidget custom-html-widget"><div className="widget-about widget-item">
                                  <a href="#" className="widget-logo"><img src="wp-content/uploads/sites/29/2018/09/logo-big.png" alt="logo" /></a>
                                  <p>ICO Crypto All the best selling ICO Template. It’s most stylish and modern design with isometric illustration which makes website gorgeous.</p>
                                  <ul className="social-link-exp font-15">
                                      <li><a href="#"><em className="fa fa-facebook" /></a></li>
                                      <li><a href="#"><em className="fa fa-twitter" /></a></li>
                                      <li><a href="#"><em className="fab fa-medium-m" /></a></li>
                                      <li><a href="#"><em className="fa fa-github" /></a></li>
                                      <li><a href="#"><em className="fa fa-bitcoin" /></a></li>
                                  </ul>
                              </div></div></div>	</div>{/* end col-lg-3 */}
                      </div>
                      <div className="gaps size-1x d-none d-lg-block" />
                      <div className="footer-bottom">
                          <ul className="footer-list text-center">
                              <li>Copyright © 2018, Cryptico Theme Made By <a href="http://oceanthemes.net/" rel="noreferrer" target="_blank">OceanThemes</a> &amp; Handcrafted by iO.</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <a href="#" id="back-to-top" />
              {/* Preloader !remove please if you do not want */}
              {/*<div id="preloader">*/}
              {/*    <div id="loader" />*/}
              {/*    <div className="loader-section loader-top" />*/}
              {/*    <div className="loader-section loader-bottom" />*/}
              {/*</div>*/}
              {/* Preloader End */}
          </div>
          <div className="demo-panel">
              <div className="demo-list">
                  <a className="demo-themes" title="See All Demo" href="javascript:void(0)">
                      <img src="../../demo.oceanthemes.net/cryptico-preview/images/demo-icon.png" />
                  </a>
                  <a className="demo-cart" rel="noreferrer" target="_blank" href="https://bit.ly/2ILJSNN">
                      <i className="fa fa-shopping-cart" />
                  </a>
              </div>
          </div>
          <div className="space-medium" id="icos-demo">
              <a className="demo-close" href="javascript:void(0)">×</a>
          </div>
      </div>
  );
};

export default App;
