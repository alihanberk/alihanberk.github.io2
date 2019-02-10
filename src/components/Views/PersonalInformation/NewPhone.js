import React, { Component } from 'react';
import _ from 'lodash';
import { Row, Col, Divider, Button } from 'antd';
import { Popup, EditInput } from '../../UIComponents';

class NewPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: {
        home: '',
        work: '',
        other: '',
      },
    };
  };

  open = (phone) => {
    this.setState({ phone: { ..._.cloneDeep(phone), other: '' } });
    this.popup.show();
  };

  update = (key, value) => {
    let { phone } = this.state;
    phone[key] = value;
    this.setState({ phone });
  };

  save = () => {
    let { home, work, other } = this.state.phone;
    this.props.update('phone', { home, work, other: other === '' ? undefined : other });
    this.popup.close();
  };

  render() {
    let { phone } = this.state;
    return (
      <div>
        <Popup ref={el => this.popup = el} head="Yeni Telefon Ekle" size="bigger" content={
          <React.Fragment>
            <h3 className="text-center">Yeni Telefon Bilgisi</h3>
            <Divider />
            <Row gutter={20} className="mb-20">
              <Col xs={24} md={12} className="mb-10">
                <EditInput label="İş Telefonu" value={phone.work} onChange={(e) => this.update('work', e)} />
              </Col>
              <Col xs={24} md={12} className="mb-10">
                <EditInput label="Ev Telefonu" value={phone.home} onChange={(e) => this.update('home', e)} />
              </Col>
              <Col xs={24} md={12} className="mb-10">
                <EditInput label="Diğer Telefon" value={phone.other} onChange={(e) => this.update('other', e)} />
              </Col>
            </Row>
            <Button className="btn-text" onClick={this.save}>Kaydet</Button>
          </React.Fragment>
        } />
      </div>
    );
  };
};

export default NewPhone;