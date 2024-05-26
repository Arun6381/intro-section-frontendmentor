import React from "react";
import hero from "./assets/image-hero-desktop.png";
import hero1 from "./assets/image-hero-mobile.png";
import audio from "./assets/client-audiophile.svg";
import databiz from "./assets/client-databiz.svg";
import maker from "./assets/client-maker.svg";
import meet from "./assets/client-meet.svg";

export function Section() {
  return (
    <div className="main-sec">
      <div className="section-content">
        <div className="text-content">
          <div className="img-0">
            <img className="img-2" src={hero1} alt="Hero Mobile" />
          </div>
          <div className="title">
            <p>Make</p>
            <span>remote work</span>
          </div>
          <div className="description">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </div>
          <div className="learn-more">
            <button>Learn more</button>
          </div>
          <div className="client-logos">
            <img src={databiz} alt="Databiz logo" />
            <img src={audio} alt="Audiophile logo" />
            <img src={meet} alt="Meet logo" />
            <img src={maker} alt="Maker logo" />
          </div>
        </div>
        <div className="img-0">
          <img className="img-1" src={hero} alt="Hero Desktop" />
        </div>
      </div>
    </div>
  );
}
