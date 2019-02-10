import React, { Component } from 'react';
import { Row, Col, Button, Input, Tooltip } from 'antd';

class PlateInfoUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlate: '34ZN5995',
      newPlate: '',
      registrationSerialNumber: 'CU608510',
      asbisNumber: '',
    }
  }

  render() {
    let { currentPlate, newPlate, registrationSerialNumber, asbisNumber } = this.state;

    return (
      <div className="printing-request">
        <div className="text-center">
          <h2>Plaka Bilgi Güncelleme</h2>
          <h5 className="mt-20 max-w-550">
            Plaka bilginizin güncellenmesi için yeni Plaka Bilginizi, Tescil Seri-Sıra veya Asbis numaranızı giriniz.
        </h5>
        </div>
        <div className="bordered-content">
          <Row gutter={20}>
            <Col xs={24} md={{ span: 8, offset: 4 }} className="mt-20">
              <h5 className="text-darkblue text-bold">Mevcut Plaka</h5>
              <Input className="bordered-input" value={currentPlate} />
            </Col>
            <Col xs={24} md={8} className="mt-20">
              <h5 className="text-darkblue text-bold">Yeni Plaka</h5>
              <Input className="bordered-input" value={newPlate} onChange={(e) => this.setState({ newPlate: e.target.value })} />
            </Col>
          </Row>

          <Row gutter={20}>
            <Col xs={24} md={{ span: 8, offset: 4 }} className="mt-20">
              <h5 className="text-darkblue text-bold">Tescil Seri-Sıra No</h5>
              <Input
                className="bordered-input"
                value={registrationSerialNumber}
                suffix={
                  <Tooltip
                    placement="right" title={"Info"}
                  >
                    <i className="text-blue fas fa-info-circle"></i>
                  </Tooltip>
                }
              />
            </Col>
            <Col xs={24} md={8} className="mt-20">
              <h5 className="text-darkblue text-bold">Asbis No</h5>
              <Input
                className="bordered-input"
                value={asbisNumber}
                onChange={(e) => this.setState({ asbisNumber: e.target.value })}
                suffix={
                  <Tooltip
                    placement="right" title={"Info"}
                  >
                    <i className="text-blue fas fa-info-circle"></i>
                  </Tooltip>
                }
              />
            </Col>
          </Row>
        </div>
        <div className="footer-buttons">
          <Button type="default" className="btn-gray mr-20">
            <i className="fas fa-arrow-left"></i>
            Geri Dön
          </Button>
          <Button type="primary">
            <i className="fas fa-redo"></i>
            Güncelle
           </Button>
        </div>
      </div>
    );
  };
};

export default PlateInfoUpdate;