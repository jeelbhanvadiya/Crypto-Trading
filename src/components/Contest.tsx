import React from "react";
import { ContestList } from "../CONST"

const Contest = (): JSX.Element => (
    <section className="position-relative pt-120 pb-120" id="raffles">
        <div className="bg-el"><img src="assets/images/elements/contest-bg.jpg" alt="image"/></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                    <div className="section-header text-center">
                        <span className="section-sub-title">Try your chance at delegating</span>
                        <h2 className="section-title">Manage your Assets</h2>
                        <p>Wrap and Delegate to earn SGB, NFTp, Raffle Tickets and Kings of Strategy Attributs.</p>
                    </div>
                </div>
            </div>
            {/* row end */}
            <div className="row wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                <div className="col-lg-12">
                    <div className="row mb-none-30">
                        {
                            ContestList.map((item, index) => (
                                <div key={index} className="col-lg-6 col-md-12 mb-30">
                                    {/* D'Cent */}
                                    <div className="contest-card">
                                        <div className="contest-card__content">
                                            <div className="left">
                                                <img src={item.image} width="80px" alt="image"/>
                                            </div>
                                            <div className="right">
                                                <div className="contest-card__price">{item.price}&nbsp;
                                                    <span>{item.price2}</span></div>
                                                <div className="contest-card__meta">
                                                    <i className="las la-ticket-alt"/>
                                                    <span>{item.meta1}</span>
                                                    <p>{item.meta2}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={item.footerClass}>
                                            <a href="#" className="cmn-btn style--three btn--sm">{item.footer1}</a>
                                            {item.footer2 &&
                                            <a href="#" className="cmn-btn  btn--sm">{item.footer2}</a>}
                                        </div>
                                        {/* contest-card end */}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* table content end */}
                </div>
            </div>
            {/* row end*/}
        </div>
    </section>
);

export default Contest;
