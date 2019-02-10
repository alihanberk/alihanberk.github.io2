import Proxy from '../proxies/Proxy';
import { notification } from 'antd';

export default {
  getCredits: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new Proxy(payload).getCredits().then(response => {
        dispatch({ type: 'SET_DATA', payload: { key: 'credits', data: response } });
        resolve();
      }).catch(error => {
        reject();
      });
    });
  },
  getPayments: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new Proxy(payload).getPayments().then(response => {
        dispatch({ type: 'SET_DATA', payload: { key: 'payments', data: response } });
        resolve();
      }).catch(error => {
        reject();
      })
    });
  },
  getInsuranceNotifications: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new Proxy(payload).getInsuranceNotifications().then(response => {
        dispatch({ type: 'SET_DATA', payload: { key: 'insuranceNotifications', data: response } });
        resolve();
      }).catch(error => {
        reject();
      })
    });
  },
  getOpenRequests: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new Proxy(payload).getOpenRequests().then(response => {
        dispatch({ type: 'SET_DATA', payload: { key: 'openRequests', data: response } });
        resolve();
      }).catch(error => {
        reject();
      })
    });
  },
  getCreditNotifications: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new Proxy(payload).getCreditNotifications().then(response => {
        dispatch({ type: 'SET_DATA', payload: { key: 'creditNotifications', data: response } });
        resolve();
      }).catch(error => {
        reject();
      })
    });
  },
  recalculate: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new Proxy().recalculate(payload).then(response => {
        resolve(response);
      }).catch(error => {
        reject();
      });
    });
  },
  sendNewRequest: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new Proxy().sendNewRequest(payload).then(response => {
        notification.success({ message: 'Başarıyla gönderildi.' });
        resolve();
      }).catch(error => {
        reject();
      });
    });
  },
  saveMarketing: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new Proxy().saveMarketing(payload).then(response => {
        notification.success({ message: 'Başarıyla kaydedildi.' });
        resolve();
      }).catch(error => {
        reject();
      });
    });
  },
  savePersonalInfo: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new Proxy().savePersonalInfo(payload).then(response => {
        notification.success({ message: 'Başarıyla kaydedildi.' });
        resolve();
      }).catch(error => {
        reject();
      });
    });
  },
};