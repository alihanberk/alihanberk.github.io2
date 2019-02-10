import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Select, Table } from 'antd';
import actions from '../../../store/actions';
import { years, months } from '../../../helpers/constants';

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: undefined,
      month: undefined
    };
  };
  componentDidMount() {
    this.getPayments();
  }
  getPayments = () => {
    let { year, month } = this.state;
    this.props.getPayments({ year, month });
  };

  clear = () => {
    this.setState({ year: undefined, month: undefined }, () => {
      this.getPayments();
    });
  };

  filter = (key, value) => {
    this.setState({ [key]: value }, () => {
      this.getPayments();
    })
  };

  render() {
    let { year, month } = this.state;
    let { payments } = this.props;

    let columns = [
      { title: 'Tarih', dataIndex: 'date', },
      { title: 'Kurum', dataIndex: 'institution', },
      { title: 'Tutar', dataIndex: 'amount', }
    ];

    return (
      <div className="credits">
        <div className="text-center">
          <h2>Kredilerim</h2>
        </div>
        <Row gutter={20} className="d-flex align-items-center mt-50">
          <Col xs={24} md={10}>
            <h3 className="text-blue m-0">Kredi Ödemelerim</h3>
          </Col>
          <Col xs={10} md={6}>
            <Select placeholder="Ay" style={{ width: '100%' }} value={month} onChange={(e) => this.filter('month', e)}>
              {
                months('MMMM').map(m =>
                  <Select.Option key={m} value={m}>{m}</Select.Option>
                )
              }
            </Select>
          </Col>
          <Col xs={10} md={6}>
            <Select placeholder="Yıl" style={{ width: '100%' }} value={year} onChange={(e) => this.filter('year', e)}>
              {
                years().map(y =>
                  <Select.Option key={y} value={y}>{y}</Select.Option>
                )
              }
            </Select>
          </Col>
          <Col xs={2} md={2}>
            <i className="fas fa-redo" onClick={this.clear} />
          </Col>
        </Row>
        <Row>
          <Table
            rowClassName="text-center"
            bordered
            className="stripped-table mt-20 mb-20"
            columns={columns}
            dataSource={payments}
            pagination={{ pageSize: 10 }}
          />
        </Row>
      </div>
    );
  };
};

const mapStateToProps = ({ payments }) => ({ payments });
const mapDispatchToProps = (dispatch) => ({
  getPayments: (payload) => dispatch(actions.getPayments(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Payments);