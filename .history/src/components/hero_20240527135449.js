import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url('https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg')`,
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div className="hero-content text-white">
          <h1 class>SMK TI BAZMA</h1>
          <p>Merajut Asa, Menjejak &amp; Menebar Manfaat</p>
          <div className="hero-btns">
            <a className="btn-mobile" href="/about">
              <button className="btn btn--secondary btn--large">
                INFO <i className="far fa-play-circle"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
