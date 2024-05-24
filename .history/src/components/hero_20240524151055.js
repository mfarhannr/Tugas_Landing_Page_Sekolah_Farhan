import React from "reacteact";

function Hero() {
  return (
    <div>
      <div
        style={{
          transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="hero-container">
          <h1>SMK TI BAZMA</h1>
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
