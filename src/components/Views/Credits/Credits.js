import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InlineSearch, CreditLists } from '../../UIComponents';
import { Tabs } from 'antd';
import actions from '../../../store/actions';

class Credits extends Component {
  onSearch = (e) => {
    this.props.getCredits(e);
  };

  componentDidMount() {
    this.props.getCredits();
  };

  render() {
    let { credits } = this.props;
    return (
      <div>
        <div className="text-center">
          <h2>Kredilerim</h2>
          <h5 className="mt-20 max-w-550">
            Mevcutta kredinizi marka, model plaka, şasi no ya da sözleme numaranızdan herhangi birini girerek arabilirsiniz.
          </h5>
        </div>

        <InlineSearch className="mt-30 mb-40 text-center" onSearch={this.onSearch} />

        <Tabs>
          <Tabs.TabPane className="text-center" tab="AÇIK" key="1">
            <CreditLists
              data={credits.filter(credit => !credit.isClosed)}
            />
          </Tabs.TabPane>
          <Tabs.TabPane className="text-center" tab="KAPALI" key="2">
            <CreditLists
              data={credits.filter(credit => credit.isClosed)}
            />
          </Tabs.TabPane>
          <Tabs.TabPane className="text-center" tab="TÜMÜ" key="3">
            <CreditLists
              data={credits}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  };
};

const mapStateToProps = ({ credits }) => ({ credits });
const mapDispatchToProps = (dispatch) => ({
  getCredits: (value) => dispatch(actions.getCredits(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(Credits);