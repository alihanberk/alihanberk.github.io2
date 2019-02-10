import React, { Component } from 'react';
import { PrintingRequest } from '../../UIComponents'

class Policies extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        policyNumber: 'T624744685',
        PoliciesBrand: 'Anadolu Sigorta',
        type: 'Kasko',
      }
    }
  }

  render() {
    let { data } = this.state
    return (
      <PrintingRequest 
        type="Teklif"
        buttonText="Teklifi"
        data={data}
      />
    );
  };
};

export default Policies;
