import React, { Component } from 'react';
import { Row, Button, Col } from 'antd';

class Home extends Component {
  onStartClick = () => {

  };

  render() {
    return (
      <div className="page-content">
        <div className="text-center">
          <h1 className="text-white">Aracınıza uygun sigorta ürününü bulalım!</h1>
          <h3 className="text-white mb-20">VDF Sigorta aracınızın sigorta ihtiyacını karşılamak için en uygun çözümleri sunar</h3>
          <p className="mb-20">
            <Button type="primary" className="btn-start" onClick={this.onStartClick}>Hadi Başlayalım</Button>
          </p>
          <div className="home-bottom-shadow" />
        </div>
        <Row gutter={0} className="mt-30 index-promote">
          <Col span={24} className="text-center">
            <div className="intro-card">
              <img src="/static/img/banner/car.png" alt="" />
              <div className="bg" />
              <div className="card-content">
                <span className="description">
                  <h5>Kasko</h5>
                  <span>Aracınızda belli risklerin gerçekleşmesi sonucu oluşabilecek zararları poliçede belirtilen limitlerle, finansal olarak güvence altına alan motorlu taşıt sigortasıdır.</span>
                </span>
              </div>
              <Button className="text-btn text-white full-width text-left">Ürün Detay <i className="fas fa-long-arrow-alt-right" /></Button>
            </div>
            <div className="intro-card">
              <img src="/static/img/banner/traffic.png" alt="" />
              <div className="bg" />
              <div className="card-content">
                <span className="description">
                  <h5>Trafik Sigortası</h5>
                  Aracınızda belli risklerin gerçekleşmesi sonucu oluşabilecek zararları poliçede belirtilen limitlerle, finansal olarak güvence altına alan motorlu taşıt sigortasıdır.
                </span>
              </div>
              <Button className="text-btn text-white full-width text-left">Ürün Detay <i className="fas fa-long-arrow-alt-right" /></Button>
            </div>
            <div className="intro-card">
              <img src="/static/img/banner/plus.png" alt="" />
              <div className="bg" />
              <div className="card-content">
                <span className="description">
                  <h5>Garanti Plus</h5>
                  Aracınızda belli risklerin gerçekleşmesi sonucu oluşabilecek zararları poliçede belirtilen limitlerle, finansal olarak güvence altına alan motorlu taşıt sigortasıdır.
                </span>
              </div>
              <Button className="text-btn text-white full-width text-left">Ürün Detay <i className="fas fa-long-arrow-alt-right" /></Button>
            </div>
            <div className="intro-card">
              <img src="/static/img/banner/credit.png" alt="" />
              <div className="bg" />
              <div className="card-content">
                <span className="description">
                  <h5>Kredi Koruma</h5>
                  Aracınızda belli risklerin gerçekleşmesi sonucu oluşabilecek zararları poliçede belirtilen limitlerle, finansal olarak güvence altına alan motorlu taşıt sigortasıdır.
                </span>
              </div>
              <Button className="text-btn text-white full-width text-left">Ürün Detay <i className="fas fa-long-arrow-alt-right" /></Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
};

export default Home;