import React, { Component } from 'react';
import { Icon } from 'antd'

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  };

  show = (item) => {
    this.setState({ visible: true })
  }

  close = () => {
    this.setState({ visible: false })
  }
  render() {
    let { visible } = this.state;
    let { title, content, head, gradient, buttons, size  } = this.props;
    return (
      visible &&
      <div>
        <div className="popup-cover" onClick={() => this.setState({ visible: false })}></div>
        <div className={`popup-overlay ${size === 'bigger' ? 'popup-bigger' : ''}`}>
          <Icon type="close" onClick={this.close} />
          {
            head &&
            <h2 className="text-center text-darkblue text-bold">
              {head}
            </h2> 
          }
          <div className="popup-content">
            {
              title &&
              title
            }
            {
              content &&
              content
            }
            {
              gradient &&
              <div className="popup-gradient"></div>
            }
          </div>
          {
            buttons &&
            buttons
          }
        </div>
      </div>
    );
  };
};

export default Popup;