import React from "react";

const Login = (): JSX.Element => (
    <div className="modal fade" id="loginModal" tabIndex={1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="account-form-area">
                        <button type="button" className="close-btn" data-dismiss="modal" aria-label="Close">
                            <i className="las la-times"/></button>
                        <h3 className="title">Welcome Back</h3>
                        <div className="account-form-wrapper">
                            <form>
                                <div className="form-group">
                                    <label>Email <sup>*</sup></label>
                                    <input type="email" name="login_name" id="login_name"
                                           placeholder="Enter your Email"/>
                                </div>
                                <div className="form-group">
                                    <label>password <sup>*</sup></label>
                                    <input type="password" name="login_pass" id="login_pass"
                                           placeholder="password"/>
                                </div>
                                <div className="d-flex flex-wrap justify-content-between mt-2">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" name="id-1" id="id-1" defaultChecked/>
                                        <label htmlFor="id-1">Remember Password</label>
                                        <span className="checkbox"/>
                                    </div>
                                    <a href="#0" className="link">Forgot Password?</a>
                                </div>
                                <div className="form-group text-center mt-5">
                                    <button className="cmn-btn">log in</button>
                                </div>
                            </form>
                            <p className="text-center mt-4">Don’t have an account?
                                <a href="#0" data-toggle="modal" data-target="#signupModal">
                                    Sign
                                    Up Now
                                </a>
                            </p>
                            <div className="divider">
                                <span>or</span>
                            </div>
                            <ul className="social-link-list">
                                <li><a href="#0"><i className="fab fa-facebook-f"/></a></li>
                                <li><a href="#0"><i className="fab fa-twitter"/></a></li>
                                <li><a href="#0"><i className="fab fa-google-plus-g"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Login;
