import React, { Component } from 'react';
import { PrintingRequest } from '../../UIComponents'

class Policies extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        policyNumber: '4448968',
        PoliciesBrand: 'Ak Sigorta A.Ş.',
        type: 'Trafik',
      }
    }
  }

  render() {
    let { data } = this.state
    return (
      <PrintingRequest 
        type="Poliçe"
        buttonText="Poliçeyi"
        data={data}
      />
    );
  };
};

export default Policies;
