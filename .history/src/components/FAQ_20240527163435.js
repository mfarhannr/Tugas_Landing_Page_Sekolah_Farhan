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
          <Accordion defaultActiveKey="0" flush>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Peluang kerja lulusan PKL</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    );
}

export default FAQ;
