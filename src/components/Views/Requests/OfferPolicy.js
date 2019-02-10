import React, { Component } from 'react';
import { offerPolicyData } from '../../../mock'
import { toFixed } from '../../../helpers'
import { Divider, Row, Col, List, Select, Form, Button, Input } from "antd";
import { EditInput } from "../../UIComponents";
import MapIcon from '../../../assets/img/icon/map.svg'

class OfferPolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offerPolicy: offerPolicyData,
      newAddress: false
    }
  }

  update = (value, key, prop) => {
    let { offerPolicy } = this.state;
    if (prop)
      offerPolicy[key][prop] = value;
    else
      offerPolicy[key] = value;
    this.setState({
      offerPolicy
    })
  }



  render() {
    let { offerPolicy, newAddress } = this.state;
    return (
      <div>
        <div className="text-center">
          <h2>Teklifi Poliçeleştir</h2>
          <p>Seçmiş olduğunuz <span className="text-darkblue text-thick"> {offerPolicy.offer.insuranceCompany} </span> sigorta şirketinin <span className="text-darkblue text-thick"> {offerPolicy.offer.installmentCount} Taksit / {toFixed(offerPolicyData.offer.amount)} </span> tutarındaki <span className="text-darkblue text-thick"> {offerPolicyData.offer.insuranceProduct} </span> teklifi için poliçeleştirme işlemi yapılacaktır. </p>
        </div>
        <div className="bordered-content">
          <Form>
            <h3 className="text-center">Araç Bilgileri</h3>
            <Divider />

            <Row gutter={20}>

              <Col xs={24} md={12}>
                <List bordered className="separated in-page" size="small">
                  <List.Item>
                    <List.Item.Meta title="Plaka" />
                    {offerPolicy.vehicle.plate}
                  </List.Item>
                  <List.Item>
                    <List.Item.Meta title="Poliçe Başlangıç Tarihi" />
                    {offerPolicy.vehicle.startDate}
                  </List.Item>
                  <List.Item>
                    <List.Item.Meta title="Tescil Seri - Sıra No" />
                    {offerPolicy.vehicle.registrationNumber}
                  </List.Item>
                  <List.Item>
                    <List.Item.Meta title="Asbis" />
                    {offerPolicy.vehicle.asbis}
                  </List.Item>
                </List>
              </Col>

              <Col xs={24} md={12} className="after-row">
                <h5 className="text-darkblue text-bold">Motor No</h5>
                <EditInput className="bordered-input" value={offerPolicy.vehicle.engineNumber} onChange={(value) => this.update(value, 'vehicle', 'engineNumber')} />
                <h5 className="text-darkblue text-bold mt-20">Şasi No</h5>
                <EditInput className="bordered-input" value={offerPolicy.vehicle.chassisNumber} onChange={(value) => this.update(value, 'vehicle', 'chassisNumber')} />
              </Col>

            </Row>

            <h3 className="text-center mt-30">Sigorta Bilgileri</h3>
            <Divider />

            <Row gutter={20}>

              <Col xs={24} md={12}>
                <h5 className="text-darkblue text-bold">Ad / Soyad</h5>
                <Input className="bordered-input" value={offerPolicy.user.fullName} disabled />
              </Col>

              <Col xs={24} md={12} className="after-row">
                <h5 className="text-darkblue text-bold">Adres</h5>
                <Form.Item className="mt-10">
                  <Select placeholder="Adres Seçiniz" onChange={(e) => this.update(e, 'user', 'address')}>
                    {
                      offerPolicy.user.addresses.map(address =>
                        <Select.Option value={address} key={address}>{address}</Select.Option>
                      )
                    }
                  </Select>
                </Form.Item>
              </Col>

            </Row>

            <Row gutter={20} type="flex" justify="end" className="mt-20 footer-buttons">
              <Col className="footer-buttons">
                <Button type="primary" onClick={() => this.setState({ newAddress : true })}>
                  <img src={MapIcon} alt="" />
                  Yeni Adres Ekle
                </Button>
              </Col>
            </Row>


            {
              newAddress &&
              <React.Fragment>
                <h3 className="text-center mt-30">Yeni Adres Bilgileri</h3>
                <Divider />
                <Row gutter={20}>
                  <Col xs={24} md={{ span: 8, offset: 4 }}>
                    <Form.Item>
                      <h5 className="text-darkblue text-bold"> Poliçe Adresi </h5>
                      <Select placeholder="Seçiniz" onChange={(e) => this.update(e, 'policy', 'addresss')}>
                        {
                          offerPolicyData.policy.address.map(address =>
                            <Select.Option value={address} key={address}>{address}</Select.Option>
                          )
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={8}>
                    <Form.Item>
                      <h5 className="text-darkblue text-bold"> İl </h5>
                      <Select placeholder="Seçiniz" onChange={(e) => this.update(e, 'policy', 'city')}>
                        {
                          offerPolicyData.policy.cities.map(city =>
                            <Select.Option value={city} key={city}>{city}</Select.Option>
                          )
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={20}>
                  <Col xs={24} md={{ span: 8, offset: 4 }}>
                    <Form.Item>
                      <h5 className="text-darkblue text-bold"> İlçe </h5>
                      <Select placeholder="Seçiniz" onChange={(e) => this.update(e, 'policy', 'district')}>
                        {
                          offerPolicyData.policy.districts.map(district =>
                            <Select.Option value={district} key={district}>{district}</Select.Option>
                          )
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={8}>
                    <Form.Item>
                      <h5 className="text-darkblue text-bold"> Posta Kodu </h5>
                      <Input className="bordered-input" value={offerPolicy.policy.postalCode} onChange={(e) => this.update(e.target.value, 'policy', 'postalCode')} />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={20}>
                  <Col xs={24} md={{ span: 16, offset: 4 }}>
                    <Input.TextArea
                      className="bordered-input"
                      rows={4}
                      placeholder="Adres bilgisi yazınız"
                      value={offerPolicy.policy.address}
                      onChange={(e) => this.update(e.target.value, 'policy', 'address')}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} md={{ span: 16, offset: 4 }}>
                    <Button className="btn-link pl-5">
                      <span className="text-blue">
                        Kaydet
                    </span>
                    </Button>
                  </Col>
                </Row>
              </React.Fragment>
            }
          </Form>
        </div>
        <div className="footer-buttons">
          <Button type="default" className=" btn-gray mr-20" onClick={() => this.props.history.goBack()}>
            <i className="fas fa-arrow-left"></i>
            Geri Dön
          </Button>
          <Button type="primary" className="mr-20" onClick={this.onSubmit}>
            <i className="fas fa-clipboard-list"></i>
            Poliçeleştir
          </Button>
        </div>
      </div>
    );
  };
};

export default OfferPolicy;