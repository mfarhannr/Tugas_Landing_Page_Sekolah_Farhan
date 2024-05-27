import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
    return (
      <section className="py-4" id="faq">
        <div className="container">
          <h1
            style={{ fontSize: "36px", fontWeight: "600" }}
            className="phenomena pb-4"
          >
            FAQ
          </h1>
          <Accordion
            style={{ fontFamily: "Quicksand" }}
            defaultActiveKey="0"
            flush
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                SIJA (Sistem Informasi Jaringan & Aplikasi
              </Accordion.Header>
              <Accordion.Body>
                Pembelajaran Jurusan SIJA di SMK TI BAZMA berlangsung selama 4
                tahun, dengan model pembelajaran 3 tahun di sekolah sedangkan 1
                tahun pembelajaran di industri dalam bentuk Praktek Kerja
                Industri (PRAKERIN). Dengan program studi 4 tahun ini, lulusan
                SIJA dapat setara dengan D1 atau lebih unggul satu level dari
                program keahlian 3 tahun lainnya.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Apa saja yang dipelajari</Accordion.Header>
              <Accordion.Body>
                Sistem komputer, jaringan komputer, pemrograman dasar, dasar
                desain grafis , sistem IoT, komputasi awan, sistem keamanan
                jaringan, materi sinkronisasi dengan industri, serta produk
                kreatif dan kewirausahaan.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Peluang kerja lulusan PKL</Accordion.Header>
              <Accordion.Body>
                Developer aplikasi (Programmer), IT support perangkat lunak,
                perangkat keras dan jaringan, Konsultan IT (Kursus dan
                tutorial), Wirausahawan di bidang IT, Wirausahawan di bidang
                desain grafis dan percetakan, Membuat start-up.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    );
}

export default FAQ;
