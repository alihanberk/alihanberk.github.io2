import React, { Component } from 'react';
import { insuranceOffersData } from '../../../mock'
import { Divider, Row, Col, Select, Form, Button, Input, Dropdown, Menu, Icon, Checkbox, Table } from "antd";

class InsuranceOffers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        usageType: undefined,
        seatCount: insuranceOffersData.seatCount || undefined,
        city: undefined,
        district: undefined,
        plate: undefined,
        registrySerialNumber: insuranceOffersData.registrySerialNumber || undefined,
        job: undefined,
        asbisNumber: insuranceOffersData.asbisNumber || undefined,
        insuranceCompanies: []
      },
      visible: false
    }
  }

  update = (value, key) => {
    let { data } = this.state;
    if (key === 'insuranceCompanies') {
      if (data[key].indexOf(value) === -1) {
        data[key].push(value)
      }
      else {
        data[key].splice(data[key].indexOf(value), 1)
      }
    }
    else {
      data[key] = value;
    }
    this.setState({
      data
    })
  }



  render() {
    let { data, visible } = this.state;
    let columns = [
      {
        title: 'Sgiorta Şirketi',
        dataIndex: 'insuranceCompany',
        sorter: (a, b) => a.insuranceCompany.localeCompare(b.insuranceCompany),
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'X',
        dataIndex: 'unknown',
        sorter: (a, b) => a.unknown.localeCompare(b.unknown),
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Koltuk Sayısı',
        dataIndex: 'seatCount',
        sorter: (a, b) => a.seatCount - b.seatCount,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Poliçe Birimi',
        dataIndex: 'policyUnit',
        sorter: (a, b) => a.policyUnit - b.policyUnit,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Geçerlilik Tarihi',
        dataIndex: 'validityDate',
        sorter: (a, b) => a.validityDate.localeCompare(b.validityDate),
        sortDirections: ['descend', 'ascend'],
      },
    ]
    return (
      <div>
        <div className="text-center">
          <h2>Teklifi Poliçeleştir</h2>
        </div>
        <div className="bordered-content">
          <Form>

            <Row gutter={20}>
              <Col xs={24} md={{ span: 8, offset: 4 }} className="mt-20">
                <h5 className="text-darkblue text-bold">Kullanım Tarzı</h5>
                <Select placeholder="Seçiniz" onChange={(e) => this.update(e, 'usageType')} value={data.usageType}>
                  {
                    insuranceOffersData.usageTypes.map(type =>
                      <Select.Option value={type} key={type}>{type}</Select.Option>
                    )
                  }
                </Select>
              </Col>
              <Col xs={24} md={8} className="mt-20">
                <h5 className="text-darkblue text-bold">Koltuk Sayısı</h5>
                <Input className="bordered-input" value={data.seatCount} onChange={(e) => this.update(e.target.value, 'seatCount')} />
              </Col>
            </Row>

            <Row gutter={20}>
              <Col xs={24} md={{ span: 8, offset: 4 }} className="mt-20">
                <h5 className="text-darkblue text-bold">İl</h5>
                <Select placeholder="Seçiniz" onChange={(e) => this.update(e, 'city')}>
                  {
                    insuranceOffersData.cities.map(city =>
                      <Select.Option value={city} key={city}>{city}</Select.Option>
                    )
                  }
                </Select>
              </Col>
              <Col xs={24} md={8} className="mt-20">
                <h5 className="text-darkblue text-bold">İlçe</h5>
                <Select placeholder="Seçiniz" onChange={(e) => this.update(e, 'district')}>
                  {
                    insuranceOffersData.districts.map(district =>
                      <Select.Option value={district} key={district}>{district}</Select.Option>
                    )
                  }
                </Select>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col xs={24} md={{ span: 8, offset: 4 }} className="mt-20">
                <h5 className="text-darkblue text-bold">Plaka</h5>
                <Select placeholder="Seçiniz" onChange={(e) => this.update(e, 'plate')}>
                  {
                    insuranceOffersData.plates.map(plate =>
                      <Select.Option value={plate} key={plate}>{plate}</Select.Option>
                    )
                  }
                </Select>
              </Col>
              <Col xs={24} md={8} className="mt-20">
                <h5 className="text-darkblue text-bold">Tescil Seri - Sıra No</h5>
                <Input className="bordered-input" value={data.registrySerialNumber} onChange={(e) => this.update(e.target.value, 'registrySerialNumber')} />
              </Col>
            </Row>

            <Row gutter={20}>
              <Col xs={24} md={{ span: 8, offset: 4 }} className="mt-20">
                <h5 className="text-darkblue text-bold">Meslek</h5>
                <Select placeholder="Seçiniz" onChange={(e) => this.update(e, 'job')}>
                  {
                    insuranceOffersData.jobs.map(job =>
                      <Select.Option value={job} key={job}>{job}</Select.Option>
                    )
                  }
                </Select>
              </Col>
              <Col xs={24} md={8} className="mt-20">
                <h5 className="text-darkblue text-bold">Asbis no</h5>
                <Input className="bordered-input" value={data.asbisNumber} onChange={(e) => this.update(e.target.value, 'asbisNumber')} />
              </Col>
            </Row>

            <Divider />
            <h5 className="text-center mt-20 text-bold text-darkblue">Alternatifleri Hesapla</h5>

            <Row gutter={20} className="mt-20">
              <Col xs={24} md={{ span: 8, offset: 4 }} id="popupContainer">
                <h5 className="text-darkblue text-bold">Meslek</h5>
                <Dropdown overlay={
                  <Menu>
                    <Menu.Item className="first-li" onClick={() => this.setState({ visible: !visible })}>
                      {
                        data.insuranceCompanies.length > 0 ?
                          <span className="content">{data.insuranceCompanies.join(', ')}</span>
                          :
                          <span>Seçiniz</span>
                      }
                      <Icon type="down" />
                    </Menu.Item>
                    {
                      insuranceOffersData.insuranceCompanies.map(company =>
                        <Menu.Item key={company} onClick={() => this.update(company, 'insuranceCompanies')}>
                          <Checkbox
                            onChange={() => this.update(company, 'insuranceCompanies')}
                            checked={data.insuranceCompanies.indexOf(company) !== -1}
                          >
                            {company}
                          </Checkbox>
                        </Menu.Item>
                      )
                    }
                  </Menu>
                }
                  trigger={['click']}
                  className="bordered-input"
                  visible={visible}
                  overlayClassName="custom-dropdown"
                  getPopupContainer={() => document.getElementById("popupContainer")}
                >
                  <span className="ant-dropdown-link" onClick={() => this.setState({ visible: !visible })}>
                    {
                      data.insuranceCompanies.length > 0 ?
                        <span className="content">{data.insuranceCompanies.join(', ')}</span>
                        :
                        <span>Seçiniz</span>
                    }
                    <Icon type="down" />
                  </span>
                </Dropdown>
              </Col>
              <Col xs={24} md={8}>
                <Button type="primary" className="mr-20 mt-25 w-100" onClick={this.onSubmit}>
                  <i className="fas fa-align-center"></i>
                  Hesapla
                </Button>
              </Col>
            </Row>
          </Form>
          <div className="table-cover">
            <Table
              className="mt-40 stretch-table stripped-table"
              columns={columns}
              dataSource={insuranceOffersData.tableData}
              rowKey={(item) => item.id}
              scroll={{ x: 480 }}
            />
          </div>
        </div>
        <p className="mt-40 mb-40 ml-5 mr-5">
          Değerli müşterimiz; Sigorta tekliflerimiz sigorta şirketlerinin teklif geçerlilik süresine, kullanım tarzına, il - ilçe bilgisi, teminatlarına ve ödeme tipine göre değişkenlik gösterebilmektedir. Alternatif tekliflerimizin için müşteri temsilcimiz size en yakın sürede ulaşacaktır.
        </p>
        <div className="footer-buttons">
          <Button type="default" className=" btn-gray mr-20" onClick={() => this.props.history.goBack()}>
            <i className="fas fa-arrow-left"></i>
            Geri Dön
          </Button>
          <Button type="primary" className="mr-20" onClick={this.onSubmit}>
            <i className="fas fa-file-download"></i>
            Teklf Çıktısı Al
          </Button>
          <Button type="primary" className="mr-20" onClick={this.onSubmit}>
            <i className="fas fa-clipboard-list"></i>
            Teklfi Poliçeleştir
          </Button>
        </div>
      </div>
    );
  };
};

export default InsuranceOffers;