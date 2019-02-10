import React, { Component } from 'react';
import _ from 'lodash';
import { Row, Col, Divider, Button } from 'antd';
import { Popup, EditInput } from '../../UIComponents';

class NewAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {
        home: '',
        work: '',
        other1: '',
        other2: ''
      },
    };
  };

  open = (address) => {
    this.setState({ address: { ..._.cloneDeep(address), other2: '' } });
    this.popup.show();
  };

  update = (key, value) => {
    let { address } = this.state;
    address[key] = value;
    this.setState({ address });
  };

  save = () => {
    let { home, work, other1, other2 } = this.state.address;
    this.props.update('address', { home, work, other1, other2: other2 === '' ? undefined : other2 });
    this.popup.close();
  };

  render() {
    let { address } = this.state;
    return (
      <div>
        <Popup ref={el => this.popup = el} head="Yeni Adres Ekle" size="bigger" content={
          <React.Fragment>
            <h3 className="text-center">Yeni Adres Bilgisi</h3>
            <Divider />
            <Row gutter={20} className="mb-20">
              <Col xs={24} md={12} className="mb-10">
                <EditInput textarea label="İş Adresi" value={address.work} onChange={(e) => this.update('work', e)} />
              </Col>
              <Col xs={24} md={12} className="mb-10">
                <EditInput textarea label="Ev Adresi" value={address.home} onChange={(e) => this.update('home', e)} />
              </Col>
              <Col xs={24} md={12} className="mb-10">
                <EditInput textarea label="Diğer Adresi 1" value={address.other1} onChange={(e) => this.update('other1', e)} />
              </Col>
              <Col xs={24} md={12} className="mb-10">
                <EditInput textarea label="Diğer Adresi 2" value={address.other2} onChange={(e) => this.update('other2', e)} />
              </Col>
            </Row>
            <Button className="btn-text" onClick={this.save}>Kaydet</Button>
          </React.Fragment>
        } />
      </div>
    );
  };
};

export default NewAddress;