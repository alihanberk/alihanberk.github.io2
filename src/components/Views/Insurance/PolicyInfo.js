import React, { Component } from 'react';
import { List, Button } from 'antd';
import { toFixed } from '../../../helpers';

class PolicyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: {
        result: 'success',
        type: 'Kasko',
        name: 'Anadolu Sigorta',
        prim: 1490.00,
        currency: 'TL',
        startDate: '03.12.2018',
        status: 'Teklifiniz poliçeleştirilememiştir. Exception: Client found response content type of ‘text/html; chartset=utf-8’, but expected ‘text/xml’.',
        downloadLink: 'https://vignette.wikia.nocookie.net/meirlcraft/images/e/e5/SAMPLE.jpg/revision/latest?cb=20170924201709'
      }
    }
  }


  render() {
    let { policy } = this.state
    return (
      <div className="policies">
        <div className="text-center">
          <h2>Poliçe Bilgileri</h2>

        </div>
        <div className="bordered-content printing-request">
          <List
            header={
              <div className="d-flex align-items-center">
                <i className={`fas fa-${policy.result === 'success' ? 'check-circle' : 'info-circle'}`}></i>
                {policy.type}
              </div>
            }
            bordered
            className={policy.result}
          >
            <List.Item>
              <List.Item.Meta title="Firma Adı" />
              {policy.name}
            </List.Item>
            <List.Item>
              <List.Item.Meta title="Prim" />
              {toFixed(policy.prim)} {policy.currency}
            </List.Item>
            <List.Item>
              <List.Item.Meta title="Poliçe Başlangıç Tarihi" />
              {policy.startDate}
            </List.Item>
            <List.Item>
              <List.Item.Meta title="Durum" />
              {policy.status}
            </List.Item>
          </List>
        </div>
        <div className="footer-buttons">
          <Button type="default" className="btn-gray mr-20">
            <i className="fas fa-arrow-left"></i>
            Geri Dön
          </Button>
          {
            policy.result === 'success' &&
            policy.downloadLink &&
            policy.downloadLink !== '' &&
            <Button type="primary">
              <i className="fas fa-download"></i>
              Poliçe Basımı Al
            </Button>
          }
        </div>
      </div>
    );
  };
};

export default PolicyInfo;