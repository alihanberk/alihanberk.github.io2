import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import actions from '../../../store/actions';

class OpenRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'İş Numarası',
          dataIndex: 'businessNumber',
          sorter: (a, b) => a.businessNumber.localeCompare(b.businessNumber),
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'İş Sağlığı ',
          dataIndex: 'businessHealth',
          sorter: (a, b) => a.businessHealth.localeCompare(b.businessHealth),
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Poliçe / Araç Bilgisi',
          dataIndex: 'policyAutoInfo',
          sorter: (a, b) => a.policyAutoInfo.localeCompare(b.policyAutoInfo),
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Statü Açıklaması',
          dataIndex: 'statusDescription',
          sorter: (a, b) => a.statusDescription.localeCompare(b.statusDescription),
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Kayıt Durumu',
          dataIndex: 'registryStatus',
          sorter: (a, b) => a.registryStatus.localeCompare(b.registryStatus),
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Açıklama Tarihi',
          dataIndex: 'descriptionDate',
          sorter: (a, b) => a.descriptionDate.localeCompare(b.descriptionDate),
          sortDirections: ['descend', 'ascend'],
        },
      ],
    };
  };

  componentDidMount() {
    this.props.getOpenRequests();
  };

  render() {
    let { columns } = this.state;
    let { openRequests } = this.props;
    return (
      <div className="mb--42">
        <div className="text-center">
          <h2>Açılan Taleplerim</h2>
        </div>
        <Table
          className="mt-40 stretch-table stripped-table"
          columns={columns}
          dataSource={openRequests}
          pagination={false}
          scroll={{ x: 480 }}
        />
      </div>
    );
  };
};

const mapStateToProps = ({ openRequests }) => ({ openRequests });
const mapDispatchToProps = (dispatch) => ({
  getOpenRequests: () => dispatch(actions.getOpenRequests())
});
export default connect(mapStateToProps, mapDispatchToProps)(OpenRequest);