import React, { Component } from 'react';
import { Row, Col, Select, Input, Button, Checkbox, Form, Tooltip } from 'antd';
import { years, months } from '../../../helpers/constants';
import { formatCreditCardNumber, formatCVC } from '../../../helpers/creditcard';
import _ from 'lodash';
import { Popup } from '../../UIComponents'

class CreditCardsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      name: '',
      cvc: '',
      month: '',
      year: '',
      issuer: '',
      informationForm: false,
      distantSalesAgreement: false,
      valid: {
        number: null,
        name: null,
        cvc: null,
        year: null,
        month: null
      },
      status: false,
    };
  };

  handleInputChange = ({ target }) => {
    if (target) {
      if (target.name === 'number') {
        target.value = formatCreditCardNumber(target.value);
      } else if (target.name === 'cvc') {
        target.value = formatCVC(target.value);
      } else if (target.name === 'name') {
        target.value = target.value.toUpperCase();
      }
    }

    this.setState({ [target.name]: target.value }, () => {
      this.setState({ valid: { ...this.state.valid, [target.name]: this.isValid(target.name) } }, () => {
        this.isFormValid();
      });
    });
  };

  isValid = (e) => {
    let str = this.state[e];
    if (e === 'name') {
      return str.length > 0 ? 'success' : 'error';
    }
    else if (e === 'number') {
      let regex = /[\d| ]{16,22}/;
      return regex.test(str.replace(/ /g, '')) ? 'success' : 'error';
    }
    else if (e === 'month' || e === 'year') {
      return e && e !== '' ? 'success' : 'error';
    }
    else if (e === 'cvc') {
      let regex = /\d{3,4}/;
      return regex.test(str) ? 'success' : 'error';
    }
  }

  isFormValid = () => {
    let values = _.values(this.state.valid);
    let status = (_.uniq(values).length === 1 && values[0] === 'success') && this.state.informationForm && this.state.distantSalesAgreement;
    this.setState({ status });
  }

  update = (key, e) => {
    this.setState({ [key]: e }, () => {
      (key === 'month' || key === 'year') && this.setState({ valid: { ...this.state.valid, [key]: 'success' } });
      this.isFormValid();
    });
  }

  onSubmit = (e) => {
    if (this.state.status) {
      this.popup.show();
    }
  };

  onApproved = (approve) => {
    this.popup.close()
    if (approve) this.sendForm();
  }

  sendForm = () => {
    console.log('------------------------------------');
    console.log("ok", this.state);
    console.log('------------------------------------');
  }

  render() {
    let { getFieldDecorator } = this.props.form;

    let popupContent = (
      <div className="popup-scrollable">
        <h5> 1. Taraftlar </h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio nec urna suscipit volutpat. Maecenas ut tortor risus. Sed ultrices varius dapibus. Mauris facilisis nulla ut tincidunt vehicula. Sed venenatis massa massa, a ornare mi pulvinar id. </p>
        <p>Donec eu neque risus. In et sem eu lacus laoreet congue at sed erat.Donec efficitur urna quis velit pharetra sodales. Maecenas consectetur, nibh at eleifend dapibus, sapien ex porttitor turpis, sit amet porttitor ex mi sit amet ex. Sed facilisis urna in commodo vehicula. Cras venenatis, justo ac sollicitudin iaculis, erat orci fringilla libero, ut imperdiet metus ipsum sit amet nisl. Donec et tristique lectus. Ut tristique vehicula erat, nec interdum risus viverra quis. Pellentesque eget dictum purus. Curabitur odio metus, pellentesque non porta eget, efficitur a diam.</p>
      </div>
    )

    return (
      <div>
        <div className="text-center">
          <h2>Kredi Kartı Bilgileri</h2>
        </div>
        <div className="bordered-content mt-40">
          <Form>
            <Row gutter={20} className="mt-20">
              <Col xs={24} md={{ span: 8, offset: 4 }}>
                <h5 className="text-darkblue text-bold">Kart Üzerindeki İsim</h5>
                <Form.Item validateStatus={this.state.valid.name} hasFeedback>
                  <Input name="name" className="bordered-input" autoComplete="cc-name" value={this.state.name} onChange={this.handleInputChange} />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <h5 className="text-darkblue text-bold">Kart Numarası</h5>
                <Form.Item validateStatus={this.state.valid.number} hasFeedback>
                  <Input name="number" className="bordered-input" autoComplete="cc-number" onChange={this.handleInputChange} type="tel" maxLength={16} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={20} className="mt-20">
              <Col xs={24} md={{ span: 8, offset: 4 }}>
                <h5 className="text-darkblue text-bold">Son Kullanma Tarihi</h5>
                <Row gutter={12}>
                  <Col span={12}>
                    <Form.Item validateStatus={this.state.valid.month} hasFeedback>
                      <Select name="month" value={this.state.month} onChange={(e) => this.update('month', e)} placeholder="mm" style={{ width: '100%' }}>
                        {
                          months('MM').map(y =>
                            <Select.Option key={y} value={y}>{y}</Select.Option>
                          )
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item validateStatus={this.state.valid.year} hasFeedback>
                      <Select name="year" value={this.state.year} onChange={(e) => this.update('year', e)} placeholder="yy" style={{ width: '100%' }}>
                        {
                          years().map(y =>
                            <Select.Option key={y} value={y}>{y}</Select.Option>
                          )
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={8}>
                <h5 className="text-darkblue text-bold">CVC Kodu</h5>
                <Row gutter={12}>
                  <Col span={12}>
                    <Form.Item validateStatus={this.state.valid.cvc} hasFeedback>
                      <Input name="cvc" className="bordered-input" autoComplete="cc-cvc" value={this.state.cvc} onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
                    </Form.Item>
                  </Col>
                  <Col span={12} className="d-flex align-middle">
                    <Tooltip placement="top" title="CVC Nedir?">
                      <Button type="ghost" className="btn-link p-0 ml-10">
                        <span className="text-blue">CVC Nedir?</span>
                      </Button>
                    </Tooltip>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Form.Item className="mb-0 mt-20">
              {getFieldDecorator('informationForm', {
                rules: [{ required: true, message: 'Bu alan zorunludur' }],
              })(
                <Checkbox onChange={(e) => this.update('informationForm', e.target.checked)}>
                  <span onClick={(e) => { e.stopPropagation(); window.open("http://google.com") }} className="text-blue text-thick"><u>Bilgilendirme formu</u></span>nu okudum, onaylıyorum.
                </Checkbox>
              )}
            </Form.Item>
            <Form.Item className="mb-0">
              {getFieldDecorator('informdistantSalesAgreementationForm', {
                rules: [{ required: true, message: 'Bu alan zorunludur' }],
              })(
                <Checkbox onChange={(e) => this.update('distantSalesAgreement', e.target.checked)}>
                  <span onClick={(e) => { e.stopPropagation(); window.open("http://google.com") }} className="text-blue text-thick"><u>Mesafeli satış sözleşmesi</u></span>ni okudum, onaylıyorum.
                </Checkbox>
              )}
            </Form.Item>
            <input type="hidden" name="issuer" value={this.state.issuer} />
          </Form>
        </div>
        <Button type="primary" className="mr-20" onClick={this.onSubmit} disabled={!this.state.status}>
          <i className="fas fa-clipboard-list"></i>
          Poliçeleştir
        </Button>

        <Popup
          gradient
          ref={el => this.popup = el}
          content={popupContent}
          buttons={
            <div className="mt-20 footer-buttons">
              <Button type="primary" className="mr-20" onClick={() => this.onApproved(true)}>
                <i className="far fa-check-circle"></i>
                Onaylıyorum
              </Button>
              <Button type="danger" onClick={() => this.onApproved(false)}>
                <i className="far fa-times-circle"></i>
                Onaylamıyorum
              </Button>
            </div>
          }
        />
      </div>
    );
  };
};

const CreditCardsInfoForm = Form.create()(CreditCardsInfo);
export default CreditCardsInfoForm;