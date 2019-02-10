export default {
  development: {
    api: 'https://swapi.co/api'
  },
  production: {
    api: 'https://swapi.co/api'
  },
  endpoints: {
    getCredits: 'get-credits',
    getPayments: 'get-payments',
    getInsuranceNotifications: 'insurance-notifications',
    getCreditNotifications: 'credit-notifications',
    getOpenRequests: 'open-requests',
    saveMarketing: 'save-marketing',
    savePersonalInfo: 'save-personal',
  },
  options: {
    isMock: true
  }
};