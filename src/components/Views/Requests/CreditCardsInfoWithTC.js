import React, { Component } from 'react';
import { Row, Col, Input, Button, Checkbox, Form } from 'antd';
import _ from 'lodash';
import { Popup } from '../../UIComponents';
import MaskedInput from 'react-text-mask';


class CreditCardsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      tc: '',
      issuer: '',
      informationForm: false,
      distantSalesAgreement: false,
      valid: {
        number: null,
        tc: null,
      },
      status: false,
    };
  };

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.setState({ valid: { ...this.state.valid, [target.name]: this.isValid(target.name) } }, () => {
        this.isFormValid();
      });
    });
  };

  isValid = (e) => {
    let str = this.state[e];
    if (e === 'tc') {
      return str.length === 11 ? 'success' : 'error';
    }
    else if (e === 'number') {
      let regex = (/[\d| ]{4}/);
      return regex.test(str.replace(/ /g, '')) && regex.test(str.substring(15).replace(/ /g, '')) ? 'success' : 'error';
    }
  }

  isFormValid = () => {
    let values = _.values(this.state.valid);
    let status = (_.uniq(values).length === 1 && values[0] === 'success') && this.state.informationForm && this.state.distantSalesAgreement;
    this.setState({ status });
  }

  update = (key, e) => {
    this.setState({ [key]: e }, () => {
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
                <h5 className="text-darkblue text-bold">TC Kimlik Numarası</h5>
                <Form.Item validateStatus={this.state.valid.tc} hasFeedback>
                  <Input placeholder="11 Hane" maxLength={11} name="tc" className="bordered-input" autoComplete="cc-tc" value={this.state.tc} onChange={this.handleInputChange} />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <h5 className="text-darkblue text-bold">Kart Numarası</h5>
                <Form.Item validateStatus={this.state.valid.number} hasFeedback>
                  <MaskedInput
                    mask={[/\d/, /\d/, /\d/, /\d/, ' ', '*', '*', '*', '*', ' ', '*', '*', '*', '*', ' ', /\d/, /\d/, /\d/, /\d/]}
                    className="ant-input bordered-input"
                    name="number"
                    autoComplete="cc-number"
                    placeholder="____ **** **** ____"
                    onChange={this.handleInputChange}
                    type="tel"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item className="mb-0">
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
        <div className="footer-buttons">
          <Button type="default" className=" btn-gray mr-20" onClick={() => this.props.history.goBack()}>
            <i className="fas fa-arrow-left"></i>
            Geri Dön
        </Button>
          <Button type="primary" className="mr-20" onClick={this.onSubmit} disabled={!this.state.status}>
            <i className="fas fa-clipboard-list"></i>
            Poliçeleştir
        </Button>
        </div>

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