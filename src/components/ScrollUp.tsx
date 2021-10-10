import React from "react";

const ScrollUp = (): JSX.Element => {

    const handleScrollUp = () => {
        setTimeout(() => {
            window.scroll({top: 0, left: 0, behavior: 'smooth'})
        }, 300)
    };

    return (
        <div className="scroll-to-top" onClick={handleScrollUp}>
            <span className="scroll-icon">
              <i className="las la-arrow-up"/>
            </span>
        </div>
    );
};

export default ScrollUp;
