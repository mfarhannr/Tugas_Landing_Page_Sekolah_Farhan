import React from "react";

function Features() {
  return (
    <section className="py-5" id="features">
      <div className="container">
        <section className="py-5">
          <div className="container px-3">
            <div className="row align-items-center">
              <div className="col-lg">
                <div className="col-md">
                  <h2 className="mb-5 phenomena-bold">
                    <span className="text-success">• </span>Fasilitas Sekolah
                  </h2>
                  <section className="pb-0">
                    <div className="row">
                      {/* Feature Cards */}
                      <FeatureCard
                        imageUrl="https://smktibazma.sch.id/static/media/r_kelas.b550b814ba15f4fff81a.jpg"
                        title="Ruang Kelas & Lab"
                      />
                      <FeatureCard
                        imageUrl="https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg"
                        title="Masjid & Aula"
                      />
                      <FeatureCard
                        imageUrl="./template/assets/img/examples/asrama.jpg"
                        title="Gedung Asrama"
                      />
                      <FeatureCard
                        imageUrl="./template/assets/img/examples/lapangan.jpg"
                        title="Lapangan Olahraga"
                      />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

// FeatureCard component (optional)
function FeatureCard({ imageUrl, title }) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card mt-5 mt-md-0">
        <div className="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
          <img
            src={imageUrl}
            alt="img-blur-shadow"
            className="img-fluid shadow border-radius-lg"
            loading="lazy"
          />
        </div>
        <div className="my-2 text-center">
          <h5 className="phenomena-bold">{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default Features;
