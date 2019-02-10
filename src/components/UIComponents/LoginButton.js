import React, { Component } from 'react';
import { Modal, Button, Icon, Row, Col, Card, Radio, Form, Input, Select } from 'antd';
import { days, months, years } from '../../helpers';

class LoginButton extends Component {
  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      visible: false,
      accountType: 1,
      tckn: '',
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
      birthday: '',
      taxNumber: '',
      customerNumber: ''
    };
  };

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  dateChange = (e, key) => {
    this.setState({ [key]: e });
  };

  login = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Button size="small" onClick={this.toggle}>
          <Icon type="login" />
          Üye Girişi
        </Button>
        <Modal className="login-modal" width={1120} visible={this.state.visible} footer={null} onCancel={this.toggle}>
          <div className="background">
            <div className="bg-left" />
          </div>
          <Row gutter={100} className="login-box">
            <Col xs={24} md={12}>
              <Card title={
                <React.Fragment>
                  <h1>Üye Girişi</h1>
                  <span>Aşağıdaki bilgileri doldurarak tüm hizmet ve özelliklerden faydalanabilirsiniz.</span>
                </React.Fragment>
              }>
                <Form onSubmit={this.login}>
                  <Form.Item>
                    <Radio.Group onChange={(e) => this.setState({ accountType: e.target.value })} value={this.state.accountType}>
                      <Radio value={1}>Bireysel</Radio>
                      <Radio value={2}>Tüzel</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label="T.C. Kimlik Numaran">
                    <Input placeholder="örn : 11100110011" value={this.state.tckn} onChange={(e) => this.setState({ tckn: e.target.value })} />
                  </Form.Item>
                  <Form.Item label="Doğum Tarihiniz">
                    <Row gutter={20}>
                      <Col span={8}>
                        <Select placeholder="Gün" value={this.state.day} onChange={(e) => this.dateChange(e, 'day')}>
                          {days(this.state.month, this.state.year).map(x => (
                            <Select.Option value={x} key={x}>{x}</Select.Option>
                          ))}
                        </Select>
                      </Col>
                      <Col span={8}>
                        <Select placeholder="Ay" value={this.state.month} onChange={(e) => this.dateChange(e, 'month')}>
                          {months.map(x => (
                            <Select.Option value={x.value} key={x.value}>{x.name}</Select.Option>
                          ))}
                        </Select>
                      </Col>
                      <Col span={8}>
                        <Select placeholder="Yıl" value={this.state.year} onChange={(e) => this.dateChange(e, 'year')}>
                          {years().map(x => (
                            <Select.Option value={x} key={x}>{x}</Select.Option>
                          ))}
                        </Select>
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item>
                    <Button className="full-width" type="primary">Giriş Yap</Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
            <Col xs={24} md={12} className="login-banner">
              <h3 className="text-blue text-center text-thick mb-40">Krediniz İçin</h3>
              <Row gutter={20} className="mb-40">
                <Col span={12} className="text-center">
                  <img src="/static/img/icons/cash.svg" alt="" />
                  <p className="text-thick">Kredi bilgilerini görüntüleyebilir</p>
                </Col>
                <Col span={12} className="text-center">
                  <img src="/static/img/icons/calculator.svg" alt="" />
                  <p className="text-thick">Erken kapama tutarını hesaplayabilir</p>
                </Col>
              </Row>
              <Row gutter={20} className="mb-40">
                <Col span={12} className="text-center">
                  <img src="/static/img/icons/clock.svg" alt="" />
                  <p className="text-thick">Kredi ödemelerini görebilir</p>
                </Col>
                <Col span={12} className="text-center">
                  <img src="/static/img/icons/notes.svg" alt="" />
                  <p className="text-thick">Ödeme planına erişebilirsiniz</p>
                </Col>
              </Row>
              <h3 className="text-blue text-center text-thick mb-40">Sigorta Poliçeniz İçin</h3>
              <Row gutter={20}>
                <Col span={12} className="text-center">
                  <img src="/static/img/icons/grammar.svg" alt="" />
                  <p className="text-thick">Poliçe detaylarını görüntüleyebilirsiniz</p>
                </Col>
                <Col span={12} className="text-center">
                  <img src="/static/img/icons/bookmark.svg" alt="" />
                  <p className="text-thick">İade ve iptal talebinde bulunabilir</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  };
};

export default LoginButton;