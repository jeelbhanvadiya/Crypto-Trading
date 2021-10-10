import React from "react";

const SignUp = (): JSX.Element => (
    <div className="modal fade" id="signupModal" tabIndex={1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="account-form-area">
                        <button type="button" className="close-btn" data-dismiss="modal" aria-label="Close">
                            <i className="las la-times"/></button>
                        <h3 className="title">Open Free Account</h3>
                        <div className="account-form-wrapper">
                            <form>
                                <div className="form-group">
                                    <label>Email <sup>*</sup></label>
                                    <input type="email" name="signup_name" id="signup_name"
                                           placeholder="Enter your Email"/>
                                </div>
                                <div className="form-group">
                                    <label>password <sup>*</sup></label>
                                    <input type="password" name="signup_pass" id="signup_pass"
                                           placeholder="password"/>
                                </div>
                                <div className="form-group">
                                    <label>confirm password <sup>*</sup></label>
                                    <input type="password" name="signup_re-pass" id="signup_re-pass"
                                           placeholder="Confirm Password"/>
                                </div>
                                <div className="d-flex flex-wrap mt-2">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" name="id-2" id="id-2" defaultChecked/>
                                        <label htmlFor="id-2">I agree to the</label>
                                        <span className="checkbox"/>
                                    </div>
                                    <a href="#0" className="link ml-1">Terms, Privacy Policy and Fees</a>
                                </div>
                                <div className="form-group text-center mt-5">
                                    <button className="cmn-btn">log in</button>
                                </div>
                            </form>
                            <p className="text-center mt-4"> Already have an account?
                                <a href="#0" data-target="#loginModal">Login</a>
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

export default SignUp;
