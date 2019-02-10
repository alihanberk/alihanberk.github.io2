import React, { Component } from 'react';
import { List, Button } from 'antd';

class PolicyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: {
        autoBrandModel: 'Volkswagen',
        autoModelYear: 2016,
        chassisNo: 'WVWZZZ6RZHY054842',
        engineNumber: 'CJZC51065',
        registrationNumber: 'CU608510',
      }
    }
  }


  render() {
    let { policy } = this.state
    return (
      <div className="policies">
        <div className="text-center">
          <h2>Poliçe Detayları</h2>
        </div>
        <div className="bordered-content printing-request">
          <List
            bordered
          >
            <List.Item>
              <List.Item.Meta title="Araç Marka Model" />
              {policy.autoBrandModel}
            </List.Item>
            <List.Item>
              <List.Item.Meta title="Araç Model Yılı" />
              {policy.autoModelYear}
            </List.Item>
            <List.Item>
              <List.Item.Meta title="Şasi no" />
              {policy.chassisNo}
            </List.Item>
            <List.Item>
              <List.Item.Meta title="Motor Numarası" />
              {policy.engineNumber}
            </List.Item>
            <List.Item>
              <List.Item.Meta title="Tescil Seri - Sıra No" />
              {policy.registrationNumber}
            </List.Item>
          </List>
        </div>
        <div className="footer-buttons">
          <Button type="default" className="btn-gray mr-20">
            <i className="fas fa-arrow-left"></i>
            Geri Dön
          </Button>
        </div>
      </div>
    );
  };
};

export default PolicyInfo;