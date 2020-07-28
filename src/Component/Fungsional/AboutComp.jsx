import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';


function AboutComp() {
    return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Jenis Program Bantuan Sosial </h1>
        <p className="lead">Bantuan Sosial diberikan dalam rangka program penanggulangan kemiskinan yang meliputi perlindungan sosial, jaminan sosial 
pemberdayaan sosial, rehabilitasi sosial, dan pelayanan dasar. Program ini juga diharapkan dapat mempermudah masyarakat untuk menjangkau layanan keuangan formal di perbankan, sehingga mempercepat program keuangan inklusif. </p>
        <hr className="my-2" />
        <p>Untuk menyalurkan bantuan sosial ini, diawali dengan pendaftaran peserta Keluarga Penerima Manfaat (KPM) yang dilakukan oleh Kementerian Sosial (Kemensos).
          Berikut adalah Jenis dan manfaat bantuan sosial :
        </p>
        <p className="lead">
          
        </p>
      </Jumbotron>
      <Container>
          <Row>
              <Col><CardComp id="1" judul="Program BPNT" tangal="27/06/2020"/></Col>
              <Col><CardComp id="2" judul="Program PKH" tangal="28/06/2020"/></Col>
          </Row>
      </Container>


    </div>

    )
}

export default AboutComp