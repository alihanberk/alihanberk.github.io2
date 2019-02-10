import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Select, Input, Upload, Button } from 'antd';
import actions from '../../../store/actions';
import { userDatas } from '../../../mock';
import { EditInput } from "../../UIComponents";

class NewRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phoneNumber: '',
      creditInfo1: '',
      creditInfo2: '',
      requestInfo: '',
      description: '',
      requiredFile1: null,
      requiredFile2: null,
      requiredFile3: null,
    }
  }

  update = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  beforeUpload = (file, field) => {
    this.setState(() => ({
      [field]: [file],
    }));
    return false;
  }

  onSubmit = () => {
    this.props.sendNewRequest(this.state);
  };

  render() {
    return (
      <div>
        <div className="text-center">
          <h2>Talep Formu</h2>
        </div>
        <div className="bordered-content">
          <Form>
            <Row gutter={20} className="mt-20">
              <Col xs={24} md={{ span: 8, offset: 4 }}>
                <h5 className="text-darkblue text-bold">E-Posta</h5>
                <Form.Item>
                  <Select placeholder="E-Posta" onChange={(e) => this.update('email', e)}>
                    {
                      userDatas.emails.map(mail =>
                        <Select.Option value={mail} key={mail}>{mail}</Select.Option>
                      )
                    }
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <h5 className="text-darkblue text-bold">Cep Telefonu</h5>
                <Form.Item>
                  <Select placeholder="Cep Telefonu" onChange={(e) => this.update('phoneNumber', e)}>
                    {
                      userDatas.phones.map(phone =>
                        <Select.Option value={phone} key={phone}>{phone}</Select.Option>
                      )
                    }
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col xs={24} md={{ span: 8, offset: 4 }}>
                <h5 className="text-darkblue text-bold">Kredi Bilgisi</h5>
                <Form.Item>
                  <Select placeholder="Kredi Bilgisi" onChange={(e) => this.update('creditInfo1', e)}>
                    {
                      userDatas.creditInfo.map(credit =>
                        <Select.Option value={credit} key={credit}>{credit}</Select.Option>
                      )
                    }
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <h5 className="text-darkblue text-bold">Kredi Bilgisi</h5>
                <Form.Item>
                  <Select placeholder="Kredi Bilgisi" onChange={(e) => this.update('creditInfo2', e)}>
                    {
                      userDatas.creditInfo.map(credit =>
                        <Select.Option value={credit} key={credit}>{credit}</Select.Option>
                      )
                    }
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col xs={24} md={{ span: 8, offset: 4 }}>
                <h5 className="text-darkblue text-bold">Talep Bilgisi</h5>
                <Form.Item>
                  <Select placeholder="Talep Bilgisi" onChange={(e) => this.update('requestInfo', e)}>
                    {
                      userDatas.requestInfo.map(request =>
                        <Select.Option value={request} key={request}>{request}</Select.Option>
                      )
                    }
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                {
                  this.state.requestInfo === "Erken Kapama" &&
                  <div className="d-flex align-items-center text-blue mt-25">
                    <i className="fas fa-2x fa-info-circle"></i>
                    <span className="text-thick ml-10">Banka dekontunu yüklemeyi unutmayınız.</span>
                  </div>
                }
              </Col>
            </Row>

            <Row gutter={20}>
              <Col xs={24} md={{ span: 16, offset: 4 }}>
                <h5 className="text-darkblue text-bold">Talep Bilgisi</h5>
                <Form.Item>
                  <Input.TextArea
                    rows={5}
                    className="bordered-input"
                    placeholder="Açıklama ekleyebilirsiniz. (en fazla 200 karakter)"
                    maxLength={200}
                    value={this.state.description}
                    onChange={(e) => this.update('description', e.target.value)}
                  >
                  </Input.TextArea>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col xs={24} md={{ span: 8, offset: 4 }} className="mt-20">
                <Upload
                  onRemove={() => this.update('requiredFile1', [])}
                  beforeUpload={(file) => this.beforeUpload(file, 'requiredFile1')}
                  multiple={false}
                  fileList={this.state.requiredFile1}
                >
                  <EditInput value={this.state.requiredFile1 ? '' : 'Dosya Seçiniz'} upload label="Gerekli Evrak 1" />
                </Upload>
              </Col>
              <Col xs={24} md={8} className="mt-20">
                <Upload
                  onRemove={() => this.update('requiredFile2', [])}
                  beforeUpload={(file) => this.beforeUpload(file, 'requiredFile2')}
                  multiple={false}
                  fileList={this.state.requiredFile2}
                >
                  <EditInput value={this.state.requiredFile2 ? '' : 'Dosya Seçiniz'} upload label="Gerekli Evrak 2" />
                </Upload>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col xs={24} md={{ span: 8, offset: 4 }} className="mt-20">
                <Upload
                  onRemove={() => this.update('requiredFile3', [])}
                  beforeUpload={(file) => this.beforeUpload(file, 'requiredFile3')}
                  multiple={false}
                  fileList={this.state.requiredFile3}
                >
                  <EditInput value={this.state.requiredFile3 ? '' : 'Dosya Seçiniz'} upload label="Gerekli Evrak 3" />
                </Upload>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="footer-buttons">
          <Button type="primary" onClick={this.onSubmit}>
            <i className="far fa-paper-plane"></i>
            Gönder
          </Button>
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  sendNewRequest: (payload) => dispatch(actions.sendNewRequest(payload))
});
export default connect(null, mapDispatchToProps)(NewRequest);