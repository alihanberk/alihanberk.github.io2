import React, { Component } from 'react';
import { Button, Row, Col, Checkbox, Input } from 'antd';
import { withRouter } from 'react-router-dom';

class Policies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [
        "goksel.ozturk@sophisto.co",
      ],
      selectedEmail: "",
      newEmail: "",
      isEmailError: false
    }
  }

  onChange = (mail) => {
    this.setState({
      selectedEmail: mail
    })
  }

  addEmail = () => {
    let { emails, selectedEmail, newEmail } = this.state;
    emails.push(newEmail);
    selectedEmail = newEmail;
    newEmail = "";
    this.setState({
      emails,
      selectedEmail,
      newEmail
    })
  }

  validateEmail = () => {
    let { newEmail } = this.state;
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isEmail = re.test(String(newEmail).toLowerCase());
    if (isEmail) {
      this.setState({
        isEmailError: false
      })
      this.addEmail();
    }
    else {
      this.setState({
        isEmailError: true
      })
    }
  }

  render() {
    let { emails, selectedEmail, newEmail, isEmailError } = this.state;
    let { data, type, buttonText } = this.props;
    return (
      <div className="printing-request">
        <div className="text-center">
          <h2>{`${type} Basım Talebi`}</h2>
          <h5 className="mt-20 max-w-550">
            Sayın Müşterimiz; {data.policyNumber} numaralı {data.PoliciesBrand} şirketi üzerinden aldığınız {data.type} ürünü ile ilgili yapmak istediğiniz işlemi seçiniz.
          </h5>
        </div>
        <div className="bordered-content">
          <Row className="header-buttons">
            <Button type="primary">
              <i className="far fa-folder-open"></i>
              {`${buttonText} Aç`}
            </Button>

            <Button type="primary ml-20">
              <i className="far fa-save"></i>
              {`${buttonText} Kaydet`}
            </Button>
          </Row>
          <Row gutter={20} className="mt-30">
            <Col xs={24} md={8}>
              <h5 className="text-darkblue text-bold">E-Posta Adresinizi Seçiniz</h5>
              <div className="pt-15">
                {
                  emails.map((mail, index) =>
                    <div key={index}>
                      <Checkbox className="mb-10" checked={mail === selectedEmail} onChange={() => this.onChange(mail)}>{mail}</Checkbox>
                    </div>
                  )
                }
              </div>
            </Col>
            <Col xs={24} md={8}>
              <h5 className="text-darkblue text-bold">Yeni E-Posta Adresi Ekle</h5>
              <Input className={`bordered-input ${isEmailError ? 'error-input' : ''}`} value={newEmail} onChange={(e) => this.setState({ newEmail: e.target.value })} />
              <Button type="ghost" className="btn-link mt-10 p-0 mr-20" onClick={this.validateEmail}>
                <span className="text-blue">Kaydet</span>
              </Button>
              <Button type="ghost" className="btn-link mt-10 p-0" onClick={() => this.setState({ newEmail: "", selectedEmail: "", isEmailError: false })}>
                <span className="text-battleshipgrey">Vazgeç</span>
              </Button>
            </Col>
          </Row>
        </div>
        <div className="footer-buttons">
          <Button type="default" className="btn-gray mr-20" onClick={() => this.props.history.goBack()}>
            <i className="fas fa-arrow-left"></i>
            Geri Dön
        </Button>
          <Button type="primary">
            <i className="far fa-paper-plane"></i>
            Gönder
        </Button>
        </div>
      </div>
    );
  };
};

export default withRouter(Policies);