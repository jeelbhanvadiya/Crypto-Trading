import React from "react";
import { Images } from "../CONST"

const Hero = (): JSX.Element => (
    <section className="hero">
        <div className="hero__shape">
            <img src="assets/images/elements/hero-shape.jpg.png" alt="image1"/>
        </div>
        <div className="hero__car wow bounceIn" data-wow-duration="0.5s" data-wow-delay="1s">
            {
                Images.map((image, index) => (
                    <img key={index} src={image.src} alt="image1" className={image.className} />
                ))
            }
        </div>
        <div className="container">
            <div className="row justify-content-center justify-content-lg-start">
                <div className="col-lg-6 col-md-8">
                    <div className="hero__content">
                        <div className="hero__subtitle wow fadeInUp" data-wow-duration="0.5s"
                             data-wow-delay="0.3s">delegate for a chance to win
                        </div>
                        <h2 className="hero__title wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s">
                            20,000 SGB
                        </h2>
                        <p className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.7s">
                            Every 1,000 delegated get you a chance to win the big raffle<br/>
                            &amp; every SGB delegated will get you some rare NFTs.
                        </p>
                        <div className="hero__btn wow fadeInUp" data-wow-duration="0.5s"
                             data-wow-delay="0.9s">
                            <a href="#raffles" className="cmn-btn">Delegate Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hero__thumb">
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
