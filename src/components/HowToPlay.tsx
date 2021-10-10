import React from "react";
import { PlayCards } from "../CONST"

const HowToPlay = (): JSX.Element => (
    <section className="position-relative pt-120 pb-120 overflow-hidden">
        <div className="play-elements wow bounceIn" data-wow-duration="0.5s" data-wow-delay="0.7s">
            <img src="assets/images/elements/how-riddler.jpg" alt="image1"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 text-sm-left text-center wow fadeInUp" data-wow-duration="0.5s"
                     data-wow-delay="0.3s">
                    <div className="section-header">
                        <h2 className="section-title">How To Play</h2>
                        <span className="section-sub-title">3 steps to get rewards! </span>
                    </div>
                </div>
            </div>
            <div className="row mb-none-30 justify-content-xl-start justify-content-center">
                {
                    PlayCards.map((card, index) =>
                        <div key={index} className="col-xl-3 col-lg-4 col-sm-6 mb-30">
                            <div className="play-card bg_img"
                                 data-background={card.background}>
                                <div className="play-card__icon">
                                    <img src={card.image} alt="image-icon"/>
                                    <span className="play-card__number">{card.no}</span>
                                </div>
                                <div className="play-card__content">
                                    <h3 className="play-card__title">{card.title}</h3>
                                    <p>{card.content}<br/>{card.content2}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </section>
);

export default HowToPlay;
