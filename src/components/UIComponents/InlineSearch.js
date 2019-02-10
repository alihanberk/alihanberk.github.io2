import React, { Component } from 'react';
import { Input } from 'antd';

class InlineSearch extends Component {
  render() {
    let { className } = this.props;
    return (
      <div className={className}>
        <Input.Search
          placeholder="Arama Yap"
          onSearch={value => this.props.onSearch(value)}
          size="large"
        />
      </div>
    );
  };
};

export default InlineSearch;