import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg')`,
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7))
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
          <h1 style={{ fontSize: "80px", fontWeight: 600 }}>SMK TI BAZMA</h1>
          <p style={{ fontSize: "24px"}} >
            Merajut Asa, Menjejak &amp; Menebar Manfaat
          </p>
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
