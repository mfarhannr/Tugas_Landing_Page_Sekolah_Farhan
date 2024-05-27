import React from "react";

function Fasilitass() {
  return (
    <section className="py-5" id="Fasilitass">
      <div className="container">
        <h1
          style={{ fontSize: "36px", fontWeight: "600",}}
          className="phenomena pb-4"
        >
          Fasilitas Sekolah
        </h1>
        <div className="container row">
          {/* Fasilitas Cards */}
          <FasilitasCard
            imageUrl="https://smktibazma.sch.id/static/media/r_kelas.b550b814ba15f4fff81a.jpg"
            title="Ruang Kelas & Lab"
          />
          <FasilitasCard
            imageUrl="https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg"
            title="Masjid & Aula"
          />
          <FasilitasCard
            imageUrl="https://smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg"
            title="Gedung Asrama"
          />
          <FasilitasCard
            imageUrl="https://smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg"
            title="Lapangan Olahraga"
          />
        </div>
      </div>
    </section>
  );
}

// FasilitasCard component
function FasilitasCard({ imageUrl, title }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card Fasilitas-card shadow rounded-lg">
        <img src={imageUrl} alt={title} className="card-img-top" />
        <div className="card-body text-center py-3">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default Fasilitass;
