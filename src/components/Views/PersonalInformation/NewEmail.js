import React, { Component } from 'react';
import _ from 'lodash';
import { Row, Col, Divider, Button } from 'antd';
import { Popup, EditInput } from '../../UIComponents';

class NewEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        personal: '',
        work: '',
        other1: '',
        other2: '',
      },
    };
  };

  open = (email) => {
    this.setState({ phone: { ..._.cloneDeep(email), other2: '' } });
    this.popup.show();
  };

  update = (key, value) => {
    let { email } = this.state;
    email[key] = value;
    this.setState({ email });
  };

  save = () => {
    let { personal, work, other1, other2 } = this.state.email;
    this.props.update('email', { personal, work, other1, other2: other2 === '' ? undefined : other2 });
    this.popup.close();
  };

  render() {
    let { email } = this.state;
    return (
      <div>
        <Popup ref={el => this.popup = el} head="Yeni E-Posta Ekle" size="bigger" content={
          <React.Fragment>
            <h3 className="text-center">Yeni E-Posta Bilgisi</h3>
            <Divider />
            <Row gutter={20} className="mb-20">
              <Col xs={24} md={12} className="mb-10">
                <EditInput label="Kişisel E-Posta" value={email.personal} onChange={(e) => this.update('personal', e)} />
              </Col>
              <Col xs={24} md={12} className="mb-10">
                <EditInput label="Şirket E-Postası" value={email.work} onChange={(e) => this.update('work', e)} />
              </Col>
              <Col xs={24} md={12} className="mb-10">
                <EditInput label="Diğer 1" value={email.other1} onChange={(e) => this.update('other1', e)} />
              </Col>
              <Col xs={24} md={12} className="mb-10">
                <EditInput label="Diğer 2" value={email.other2} onChange={(e) => this.update('other2', e)} />
              </Col>
            </Row>
            <Button className="btn-text" onClick={this.save}>Kaydet</Button>
          </React.Fragment>
        } />
      </div>
    );
  };
};

export default NewEmail;