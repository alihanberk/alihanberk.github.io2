import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Divider, Row, Col, Button } from 'antd';
import actions from '../../store/actions';
import EditInput from '../UIComponents/EditInput';
import { NewAddress, NewEmail, NewPhone } from './PersonalInformation/';

class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      address: {
        home: '',
        work: '',
        other1: '',
      },
      phone: {
        home: '',
        work: '',
      },
      email: {
        personal: '',
        work: '',
        other1: '',
        other2: ''
      }
    }
  };

  update = (type, key, value) => {
    let data = this.state[type];
    data[key] = value;
    this.setState({ [type]: data });
  };

  updateData = (type, value) => {
    this.setState({ [type]: value });
  };

  save = () => {
    this.setState({ loading: true });
    let { address, phone, email } = this.state;
    this.props.savePersonalInfo({ address, phone, email }).then(() => {
      this.setState({ loading: false });
    }).catch(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    let { address, phone, email, loading } = this.state;
    return (
      <div>
        <div className="text-center">
          <h2>Kişisel Bilgiler</h2>
        </div>
        <div className="bordered-content">
          <h3 className="text-center">Adres Bilgisi</h3>
          <Divider />
          <Row gutter={20} className="mb-20">
            <Col xs={24} md={12} className="mb-10">
              <EditInput textarea label="İş Adresi" value={address.work} onChange={(e) => this.update('address', 'work', e)} />
            </Col>
            <Col xs={24} md={12} className="mb-10">
              <EditInput textarea label="Ev Adresi" value={address.home} onChange={(e) => this.update('address', 'home', e)} />
            </Col>
            <Col xs={24} md={12} className="mb-10">
              <EditInput textarea label="Diğer Adresi 1" value={address.other1} onChange={(e) => this.update('address', 'other1', e)} />
            </Col>
            {address.other2 ?
              <Col xs={24} md={12} className="mb-10">
                <EditInput textarea label="Diğer Adresi 2" value={address.other2} onChange={(e) => this.update('address', 'other2', e)} />
              </Col>
              :
              <Col xs={24} md={12} className="mb-10">
                <h4>Yeni Adres Ekle</h4>
                <Button className="add-btn big" icon="plus" onClick={() => this.newAddress.open(address)} />
              </Col>
            }

          </Row>
          <h3 className="text-center">Telefon Bilgisi</h3>
          <Divider />
          <Row gutter={20} className="mb-20">
            <Col xs={24} md={12} className="mb-10">
              <EditInput label="İş Telefonu" value={phone.work} onChange={(e) => this.update('phone', 'work', e)} />
            </Col>
            <Col xs={24} md={12} className="mb-10">
              <EditInput label="Ev Telefonu" value={phone.home} onChange={(e) => this.update('phone', 'home', e)} />
            </Col>
            {phone.other ?
              <Col xs={24} md={12} className="mb-10">
                <EditInput label="Diğer Telefon" value={phone.other} onChange={(e) => this.update('phone', 'other', e)} />
              </Col>
              :
              <Col xs={24} md={12} className="mb-10">
                <h4>Yeni Telefon Ekle</h4>
                <Button className="add-btn" icon="plus" onClick={() => this.newPhone.open(phone)} />
              </Col>
            }

          </Row>
          <h3 className="text-center">E-Posta Bilgisi</h3>
          <Divider />
          <Row gutter={20} className="mb-20">
            <Col xs={24} md={12} className="mb-10">
              <EditInput label="Kişisel E-Posta" value={email.personal} onChange={(e) => this.update('email', 'personal', e)} />
            </Col>
            <Col xs={24} md={12} className="mb-10">
              <EditInput label="Şirket E-Posta" value={email.work} onChange={(e) => this.update('email', 'work', e)} />
            </Col>
            <Col xs={24} md={12} className="mb-10">
              <EditInput label="Diğer" value={email.other1} onChange={(e) => this.update('email', 'other1', e)} />
            </Col>
            {email.other2 ?
              <Col xs={24} md={12} className="mb-10">
                <EditInput label="Diğer" value={email.other2} onChange={(e) => this.update('email', 'other2', e)} />
              </Col>
              :
              <Col xs={24} md={12} className="mb-10">
                <h4>Yeni E-Posta Ekle</h4>
                <Button className="add-btn" icon="plus" onClick={() => this.newEmail.open(email)} />
              </Col>
            }
          </Row>
          <h3 className="text-center">İzin Pazarlama</h3>
          <Divider />
          <p className="text-center">İzin pazarlama ayarlarına erişmek için <NavLink to="/izinli-pazarlama">tıklayınız.</NavLink></p>
        </div>
        <div className="footer-buttons">
          <Button type="primary" icon="save" loading={loading} onClick={this.save}>Kaydet</Button>
        </div>
        <NewAddress ref={el => this.newAddress = el} update={this.updateData} />
        <NewEmail ref={el => this.newEmail = el} update={this.updateData} />
        <NewPhone ref={el => this.newPhone = el} update={this.updateData} />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  savePersonalInfo: (data) => dispatch(actions.savePersonalInfo(data))
});
export default connect(null, mapDispatchToProps)(Credits);