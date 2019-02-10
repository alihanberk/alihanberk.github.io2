import React, { Component } from 'react';
import { Table, Popover } from 'antd';
import { InlineSearch, PolicyOperations } from '../../UIComponents'
import { myPolicies } from '../../../mock'

class PolicyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Poliçe Numarası',
          dataIndex: 'policyNumber',
          render: (text, { info }) => (
            <span>
              {
                info &&
                <Popover
                  content={info.text}
                  title={info.title}
                  trigger="hover"
                  placement="rightTop"
                  overlayClassName="table-popover"
                >
                  <i className="fas fa-info info"></i>
                </Popover>
              }
              {text}
            </span>
          ),
          sorter: (a, b) => a.policyNumber.localeCompare(b.policyNumber),
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Sigorta Ürünü',
          dataIndex: 'insuranceProduct',
          sorter: (a, b) => a.insuranceProduct.localeCompare(b.insuranceProduct),
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Araç Plaka',
          dataIndex: 'plate',
          sorter: (a, b) => a.plate.localeCompare(b.plate),
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Sigorta Şirketi',
          dataIndex: 'insuranceCompany',
          sorter: (a, b) => a.insuranceCompany.localeCompare(b.insuranceCompany),
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Başlangıç Tarihi',
          dataIndex: 'startDate',
          sorter: (a, b) => a.startDate.localeCompare(b.startDate),
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Bitiş Tarihi',
          dataIndex: 'endDate',
          sorter: (a, b) => a.endDate.localeCompare(b.startDate),
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Poliçe Birimi',
          dataIndex: 'policyUnit',
          sorter: (a, b) => a.policyUnit.localeCompare(b.policyUnit),
          sortDirections: ['descend', 'ascend'],
        },
      ],
      selected: null,
    }
  }


  render() {
    let { columns, selected } = this.state
    return (
      <div className="policies">
        {
          selected ?
            <div className="selected-info">
              Poliçenizin bitiş tarihi 29 günden uzun olduğu için teklif çalışmamaktadır. Poliçeniz ile ilgili bilgi almak istiyorsanız 
              <span onClick={() => this.props.history.push('/talepler/taleplerim')}> Taleplerim </span> menüsünden 
              <span onClick={() => this.props.history.push('/talepler/yeni-talep')}> Yeni Talep </span> adımından bize ulabilirsiniz.
            </div>
            :
            <div className="text-center">
              <h2>Poliçelerim</h2>
              <p>Poliçe kayıtlarına tıklayarak işlem adınızı seçebilir, poliçe detaylarına bakabilir, plaka bilgi güncellemesi yapabilir, yeni teklif talebinde bulunabilir, teklfinizi poliçeleştirebilir veya poliçenizi kendinize e-posta olarak gönderebilirsiniz.</p>
            </div>

        }
        <Table
          className="mt-40 stretch-table stripped-table"
          columns={columns}
          dataSource={myPolicies}
          pagination={false}
          expandRowByClick
          scroll={{x:480}}
          rowSelection={{
            type: "radio",
            selectedRowKeys: selected ? selected.key : null
          }}
          onRow={(item) => {
            return {
              onClick: () => this.setState({ selected: item })
            }
          }
          }
          title={() =>
            <div className="d-flex justify-content-space-between align-items-center pl-60 pr-50">
              <h3 className="m-0 text-white">
                Poliçe Tablosu
              </h3>
              <InlineSearch className="d-inline-flex" />
            </div>
          }
        />
        {
          <PolicyOperations item={selected} className="mt-20" />

        }
        <p className="mt-20">
          Değerli müşterimiz; Onaylanan poliçeler sigorta şirketlerinden 3 iş günü içinde yansımaktadır. 3 gün içinde yansımayan poliçelerinizin olması durumunda tarafımıza ulaşabilirsiniz.
          </p>

        <p className="mt-20 text-blue text-bold">
          vdf_Sigortadestek@vdf.com.tr
          </p>
      </div>
    );
  };
};

export default PolicyList;