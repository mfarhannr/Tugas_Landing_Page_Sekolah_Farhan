import React from "react";

function Footer() {
  return (
    <footer className="footer py-4 bg-dark text-white-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="h4 text-white mb-3">Lokasi</h3>
            <p>
              Jl. Raya Cikampak Cicadas RT. 001/RW 001. Kecamatan Ciampea,
              Kabupaten Bogor. Jawa Barat 16620
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="h4 text-white mb-3">Kontak Kami</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-house-fill text-white me-2" />
                info@smktibazma.sch.id
              </li>
              <li >
                <i className="bi bi-phone-fill text-white me-2" />
                (0263) 234567
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="h4 text-white mb-3">Ikuti Kami</h3>
            <a
              className="btn btn-outline-light btn-sm me-1"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook" /> Facebook
            </a>
            <a
              className="btn btn-outline-light btn-sm me-1"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram" /> Instagram
            </a>
            <a
              className="btn btn-outline-light btn-sm"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-youtube" /> Youtube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
