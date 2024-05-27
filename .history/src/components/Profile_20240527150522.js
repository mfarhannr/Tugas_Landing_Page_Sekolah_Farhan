import React from "react";

function Profile() {
  return (
    <section className="py-5" id="profile">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg">
            <div className="col-md">
              <h1
                style={{ fontSize: "px" }}
                className="phenomena-bold text-success"
              >
                Islamic Boarding School
                <br />
                SMK TI BAZMA
              </h1>
              <p>
                <span className="font-weight-bold">
                  Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                  BAZMA)
                </span>
                merupakan sekolah unggulan berasrama yang diperuntukkan bagi
                anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas
                maupun operasional didanai dari hasil pengelolaan wakaf dan
                sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh
                masyarakat.
              </p>
              <p>
                SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh
                selama 4 tahun dengan siswa-siswa yang berasal dari berbagai
                daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan
                pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan &
                Aplikasi) dengan kombinasi kurikulum berbasis asrama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
