import React from "react";

function Profile() {
  return (
    <section className="py-5" id="profile">
        <div className="row">
          <div className="brief-left col-lg-6">
            <h1>Islamic Boarding School SMK TI BAZMA</h1>
          </div>
          <div className="brief-right col-lg-6">
            <p>
              Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA)
              merupakan sekolah unggulan berasrama yang diperuntukkan bagi
              anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun
              operasional didanai dari hasil pengelolaan wakaf dan sumber dana
              sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
            </p>
            <p>
              SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh
              selama 4 tahun dengan siswa-siswa yang berasal dari berbagai
              daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan
              pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan &amp;
              Aplikasi) dengan kombinasi kurikulum berbasis asrama.
            </p>
          </div>
        </div>
        <div className="brief-btn-section">
          <a className="btn-mobile" href="/about">
            <button className="btn btn--primary btn--medium">
              selengkapnya
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
