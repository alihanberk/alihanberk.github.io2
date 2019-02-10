import React, { Component } from 'react';
import { Input } from 'antd';
import Attachment from '../../assets/img/att.svg'

class EditInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      disabled: true,
    };
  };

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.value) {
      return {
        value: props.value
      }
    }
    return null;
  }

  onChange = (e) => {
    this.setState({ value: e }, () => {
      this.props.onChange && this.props.onChange(e);
    });
  };

  render() {
    let { textarea, label, upload } = this.props;
    let { value, disabled } = this.state;

    return (
      <div className="input-edit">
        <h4>{label}</h4>
        {textarea ?
          <Input.TextArea value={value} onChange={(e) => disabled ? null : this.onChange(e.target.value)} rows={4} />
          :
          <Input value={value} onChange={(e) => disabled ? null : this.onChange(e.target.value)} className="bordered-input" />
        }
        {
          upload ?
            <img src={Attachment} alt="" />
            :
            <i style={ !disabled ? { background: '#01b0cc', color: '#ffffff'  }: {}} className="fas fa-pen" onClick={(e) => {this.setState({ disabled: !disabled })}} />

        }
      </div>
    );
  }
};

export default EditInput