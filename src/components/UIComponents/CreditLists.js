import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse, Row, Col, List, Popover, DatePicker, Button } from 'antd';
import { toFixed } from '../../helpers';
import moment from 'moment'
import { Popup } from './'
import actions from '../../store/actions'

class CreditLists extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      amount: 16810.18,
      date: null,
    }
  };

  onDateChange = (e) => {
    this.setState({ date: e });
  }

  onReCalculate = (item) => {
    this.setState({ open: false }, () => {
      this.props.recalculate({ item, date: this.state.date }).then(response => {
        this.popup.show(item);
      });
    });
  }

  render() {
    let { data } = this.props;
    let { open, amount } = this.state;
    return (
      <div className="mt-20">
        {
          data &&
          data.length > 0 &&
          data[0].isClosed &&
          <p className="text-bold text-darkblue">Bu alanda son 1 yıl içinde kapatılan krediler görüntülenebilmektedir.</p>
        }
        <p>Aradığınız kriterlere uygun {data.length} sonuç bulundu.</p>

        <div className="credit-lists mt-20 p-30">
          <Collapse
            accordion={true}
          >
            {
              data.map((item, index) =>
                <Collapse.Panel
                  className={`${index !== 0 ? 'mt-20' : ''} ${item.isClosed ? 'collapse-open' : 'collapse-closed'}`}
                  key={item.policyNo}
                  header={
                    <div className="header">
                      {
                        !item.isClosed &&
                        <i className="fas fa-info" />
                      }
                      <Row className="header-row">
                        <Col xs={24} md={7}>
                          <h3 className="text-bold">{item.brandName}</h3>
                        </Col>
                        <Col xs={24} md={7}>
                          <p className="pl-10 pr-10">
                            {
                              item.isClosed ?
                                `Kapanış Tarihi`
                                :
                                `Bugünkü Erken Kapama Tutarı`
                            }
                          </p>
                        </Col>
                        <Col xs={24} md={5}>
                          <p>Sözleşme No</p>
                        </Col>
                        <Col xs={24} md={5}>
                          <p>Plaka</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={24} md={7}>
                          <p>{item.engineInfo}</p>
                        </Col>
                        <Col xs={24} md={7}>
                          <h3 className="text-bold">
                            {
                              item.isClosed ?
                                item.closedDate
                                :
                                `${toFixed(item.remainingTotalDebt)} ${item.currency}`
                            }
                          </h3>
                        </Col>
                        <Col xs={24} md={5}>
                          <p className="text-bold">{item.policyNo}</p>
                        </Col>
                        <Col xs={24} md={5}>
                          <p className="text-bold">{item.plate}</p>
                        </Col>
                      </Row>
                    </div>
                  }
                >
                  <List className="separated">
                    <List.Item>
                      <List.Item.Meta title="Kalan Toplam Borç Tutarı" />
                      {toFixed(item.remainingTotalDebt)} {item.currency}
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title="Erken Kapama Tutarı" />
                      <Popover
                        trigger="click"
                        placement="bottom"
                        onVisibleChange={(e) => this.setState({ open: e })}
                        overlayClassName="hidden"
                        content={
                          <DatePicker
                            showToday={false}
                            defaultValue={moment(item.nextInstallmentDate)}
                            open={open}
                            getCalendarContainer={() => document.getElementById("calendarContainer")}
                            onChange={this.onDateChange}
                            renderExtraFooter={() =>
                              <div className="mt-10 ml-20 mr-20 mb-30">
                                <Button
                                  className="d-inline-flex"
                                  type="primary"
                                  onClick={() => this.onReCalculate(item)}
                                >
                                  <i className="fas fa-calculator mr-5"></i>
                                  Tekrar Hesapla
                                </Button>
                                <Button className="btn-link pl-10 pr-10" type="ghost">
                                  Vazgeç
                                </Button>
                              </div>
                            }
                          />
                        }>
                        <div id="calendarContainer">
                        </div>
                        <div className="d-flex text-thick text-blue">
                          <i className="fas fa-calculator mr-5"></i>
                          <span className="mobile-hidden">Tekrar Hesapla</span>
                          <i className="fas fa-angle-right ml-5"></i>
                        </div>
                      </Popover>
                      {toFixed(item.amountOfClosure)} {item.currency}
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title="Kredi Faiz Oranı" />
                      {item.creditInterestRate}
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title="Vade Başlangıç Tarihi" />
                      {item.startDate}
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title="Toplam Borç Tutarı" />
                      {toFixed(item.totalDebt)} {item.currency}
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title="Bir Sonraki Taksit Tarihi" />
                      {item.nextInstallmentDate}
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title="Bir Sonraki Taksit Tutarı" />
                      {item.nextInstallmentAmount}
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title="Temerrüt Faiz Oranı" />
                      {item.defaultInterestRate}
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title="Gecikme Taksit Sayısı" />
                      {item.delayCount}
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title="Taksit Sayısı" />
                      {item.installmentCount}
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta title="Lorem Ipsum" />
                      {item.lorem}
                    </List.Item>
                  </List>
                </Collapse.Panel>
              )
            }
          </Collapse>
          {
            data.filter(x => x.isClosed).length > 0 &&
            data.filter(x => x.isClosed).map(item =>
              <React.Fragment>
                <Row className="text-left mt-20">
                  <Col xs={24} md={6}>
                    <h5 className="text-bold text-darkblue">
                      Vade Bitiş Tarihi
                  </h5>
                  </Col>
                  <Col xs={24} md={18}>
                    <h5 className="text-bold text-darkblue">
                      Vade Bitiş Açıklaması
                  </h5>
                  </Col>
                </Row>
                <Row className="text-left">
                  <Col xs={24} md={6}>
                    <p>
                      {item.closedDate}
                    </p>
                  </Col>
                  <Col xs={24} md={18}>
                    <p>
                      {item.lorem}
                    </p>
                  </Col>
                </Row>
              </React.Fragment>
            )
          }
        </div>
        <Popup
          ref={el => this.popup = el}
          title={<h5 className="text-darkblue text-left">{moment().format("DD/MM/YYYY")} tarihli erkan kapama tutarınız <span className="text-bold">{toFixed(amount)} TL</span>’dır.</h5>}
          content={<p className="text-left">Yukarıda belirtilen erken kapama tutarı, ilgili krediye ilişkin geri ödeme planında belirtilen taksitlerin dezenli olarak ödendiği ve sözleşmesel yükümlülüklerin tam olarak yerine getirdiği varsayımla tahmini olarak hesaplanmıştır. Fiili ödeme tarihinde, söz konusu erken kapama tutarına, var ise; sözleşmeden kaynaklanan gecikme faizi, cezai şart, komisyon ve diğer ücretler ilave edilecektir.</p>}
        />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  recalculate: (payload) => dispatch(actions.recalculate(payload))
});
export default connect(null, mapDispatchToProps)(CreditLists);