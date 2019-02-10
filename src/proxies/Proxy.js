import axios from 'axios';
import config from '../config';
import { credits, myPayments, myNotifications, openRequest } from '../mock';
import React from 'react';
import { Modal, Icon } from 'antd';

export default class Proxy {
  constructor(parameters = {}) {
    this.endpoint = config[process.env.NODE_ENV].api;
    this.parameters = parameters;
  };

  getParameterString(obj, prefix) {
    var str = [], p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? prefix + "[" + p + "]" : p,
          v = obj[p];
        str.push((v !== null && typeof v === "object") ?
          this.getParameterString(v, k) :
          encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
    return str.join("&");
  };

  submit(requestType, url, data = null) {
    return new Promise((resolve, reject) => {
      let str = this.getParameterString(this.parameters);
      axios[requestType](`${this.endpoint}/${url}${str !== '' ? '?' + str : ''}`, data).then(response => {
        resolve(response.data);
      }).catch(error => {
        Modal.info({
          className: 'popup',
          width: 670,
          okText: <Icon type="close" />,
          title: <React.Fragment><i className="fas fa-info-circle mb-20" /><h2>Lorem İpsum Sit Amet</h2></React.Fragment>,
          content: 'Praesent diam nulla, tincidunt et mi gravida, pretium sollicitudin eros. In venenatis quis lacus et sollicitudin. Duis eu libero et purus faucibus sagittis. Ut non malesuada risus. Integer ut odio lobortis, lobortis odio nec, tempus lacus. Cras placerat ante eros, sed venenatis risus placerat et.',
          onCancel: () => Promise.resolve()
        });
        reject(error.response);
      });
    });
  };

  getCredits(payload) {
    return config.options.isMock ? Promise.resolve(credits) : this.submit('get', config.endpoints.getCredits);
  };

  getPayments(payload) {
    return config.options.isMock ? Promise.resolve(myPayments) : this.submit('get', config.endpoints.getPayments);
  };

  getInsuranceNotifications(payload) {
    return config.options.isMock ? Promise.resolve(myNotifications) : this.submit('get', config.endpoints.getInsuranceNotifications);
  };

  getCreditNotifications(payload) {
    return config.options.isMock ? Promise.resolve(myNotifications) : this.submit('get', config.endpoints.getCreditNotifications);
  };

  getOpenRequests(payload) {
    return config.options.isMock ? Promise.resolve(openRequest) : this.submit('get', config.endpoints.getOpenRequests);
  };

  sendNewRequest(payload) {
    return config.options.isMock ? Promise.resolve() : this.submit('post', config.endpoints.sendNewRequest, payload);
  };

  saveMarketing(payload) {
    if (config.options.isMock) {
      return Promise.resolve();
    }
    else {
      return this.submit('post', config.endpoints.saveMarketing, payload);
    }
  }

  savePersonalInfo(payload) {
    if (config.options.isMock) {
      return Promise.resolve();
    }
    else {
      return this.submit('post', config.endpoints.savePersonalInfo, payload);
    }
  }
};