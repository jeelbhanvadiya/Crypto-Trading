import React from "react";
import ScrollUp from "./components/ScrollUp";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowToPlay from "./components/HowToPlay";
import Contest from "./components/Contest";
import Footer from "./components/Footer";
import Login from "./components/Modal/Login";
import SignUp from "./components/Modal/SignUp";

const App = (): JSX.Element => {
  return (
      <>
        <ScrollUp/>
        <div className="page-wrapper">
          {/*/!* login modal *!/*/}
          <Login/>
          {/*/!* Sign Up modal *!/*/}
          <SignUp/>
          {/* header-section start  */}
          <Header/>
          {/* header-section end  */}
          {/* hero start */}
          <Hero/>
          {/* hero start */}
          {/* how to play section start */}
          <HowToPlay/>
          {/* how to play section end */}
          {/* contest section start */}
          <Contest/>
          {/* contest section end */}
          {/* footer section start  */}
          <Footer/>
          {/* footer section end */}
        </div>
      </>
  );
};

export default App;
