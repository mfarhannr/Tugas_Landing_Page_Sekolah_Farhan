import React from "react";
import Button from "react-bootstrap/Button";

function Hero() {
  return (
    <section id="features">
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.2), rgba(4, 9, 30, 0.2)), url('https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg')`,
        width: "100%",
        height: "92vh",
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
        <div className="hero-content text-white text-center">
          <h1 style={{ fontSize: "86px", fontWeight: 600 }}>SMK TI BAZMA</h1>
          <p style={{ fontSize: "32px" }}>
            Merajut Asa, Menjejak &amp; Menebar Manfaat
          </p>
          <Button style={{ fontSize: "18px", padding: "10px 20px", fontFamily: "Quicksand" }} variant="secondary">
            Selengkapnya
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
